import { Component, OnInit } from '@angular/core';
import {PlayService} from '../../services/play.service';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  constructor(private play: PlayService) { }
  //constructor() { }

  ngOnInit() {
   /* boton(){ this.play.puntuacion().subscribe(

      res => {
        console.log(res);
      },
      err => {
        console.error(err);
      }

    );}*/
  this.play.puntuacion().subscribe(

      res => {
        console.log(res);
      },
      err => {
        console.error(err);
      }

    );
  }

  
    
   
    
  

}
