import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  API_PONITS = 'https://gameserver.centic.ovh/games/send_points';

  constructor(private http: HttpClient) { }


  sendPonits(){
  
    let message = {
       // "validation": localStorage.getItem('validation'),
       // "invitation": localStorage.getItem('invitation'),
        "validation": '4769fac6-47ce-11e9-aa23-005056873508' ,
        "invitation": 'e7524a08-4502-11e9-9197-005056873508' ,
        "percent": 50,
        "title": 'Puntos ganados',
        "resume": 'Has ganado puntos con el juego',
        "message": 'Como has jugado al juego dle TCM has recibido puntos por ello'
      };
  
     return this.http.post(this.API_PONITS, message);
   }
}
