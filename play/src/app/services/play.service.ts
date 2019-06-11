import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

import {Observable, throwError} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class PlayService {

  API_PONITS = 'https://gameserver.centic.ovh/games/send_points';
  API_INFO = 'https://gameserver.centic.ovh/games/info/';

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }
  
getCredenciales(){
    this.activatedRoute.queryParams.subscribe(url => {
     // localStorage.setItem('invitation', url["invitation"]);
      //localStorage.setItem('validation', url["validation"]);
      //se usan en local
     localStorage.setItem('invitation', "700781c2-70d4-11e9-ad96-005056873508");
      localStorage.setItem('validation', "707573ee-70d4-11e9-ad96-005056873508");

    });
  }


  sendPonits(){
  
    let message = {
        "validation": localStorage.getItem('validation'),
        "invitation": localStorage.getItem('invitation'),
        "percent": 50,
        "title": 'Puntos ganados',
        "resume": 'Has ganado puntos con el juego',
        "message": 'Como has jugado al juego dle TCM has recibido puntos por ello'
      };
  
     return this.http.post(this.API_PONITS, message);
   }

}