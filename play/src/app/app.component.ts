import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { PlayService } from './services/play.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'play';

  constructor(private play: PlayService){}
  
  ngOnInit(){

    this.play.sendPonits().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
  }
}
