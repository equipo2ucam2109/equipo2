import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Points} from '../../../points';
 
@Injectable({
  providedIn: 'root'
})
export class PlayService {
API_URI = 'https://gameserver.centic.ovh';



sendPoint: Points ={
    "validation":'1e4513fa-4716-11e9-aa23-005056873508',
    "invitation":'e7524a08-4502-11e9-9197-005056873508',
    "percent": 50,
    "title": 'Puntos ganados',
    "resume": 'Has ganado puntos con el juego',
    "message": 'Como has jugado al juego dle TCM has recibido puntos por ello'
  }


  constructor(private http:HttpClient) { }

  puntuacion(){
    return this.http.post(`${this.API_URI}/games/send_points`,this.sendPoint);
  }

}
