import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Usuario} from '../../usuario';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  API_URI = 'https://gameserver.centic.ovh';
 
  usuario: Usuario = {
    "user": 'ucam2',
    "password": 'p27QRsc'
  }

  constructor(private http:HttpClient) { }


  login() {
    return this.http.post(`${this.API_URI}/auth/login`,this.usuario);
  }
}
