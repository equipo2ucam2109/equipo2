import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { PlayService } from './services/play.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'play';

  constructor(private play: PlayService){}

  respuestaInfo: any = [];
  respuestaSendPoints: any = [];
  
  punto;
  total;

  ngOnInit(){
    this.play.getCredenciales();
  
    this.play.getInfo().subscribe(
      res => {
        this.respuestaInfo = res;
        console.log(this.respuestaInfo);
        for (var key in this.respuestaInfo) {
          if (key == 'data'){
            console.log(' name=' + key + ' value=' + this.respuestaInfo[key]);
            console.log(this.respuestaInfo[key]['points']);
            this.punto = this.respuestaInfo[key]['points'];
       }
      }
      },
      err => {
        console.error(err);
      }
    );
  }


  enviar(){
    this.play.sendPonits().subscribe(
      res => {
        console.log(res);
        this.respuestaSendPoints = res;
        for (var key in this.respuestaSendPoints) {
         if (key == 'match_score'){
            console.log(' name=' + key + ' value=' + this.respuestaSendPoints[key]);
            console.log( this.respuestaInfo[key]);
            alert("Has consegido " + this.punto*0.5 + " en esta partida"); 
       }
      }
      },
      err => {
        console.error(err);
        alert(err);
      }
    );
  }


}
