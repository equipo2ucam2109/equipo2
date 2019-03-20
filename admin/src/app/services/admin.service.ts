import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  API_LOGIN = 'https://gameserver.centic.ovh/auth/login';
  API_CONFIG = 'https://gameserver.centic.ovh/config/';

  token = localStorage.getItem('token');
  headersHttp = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });

  constructor(private http: HttpClient) { }

  login(body: any){

    return this.http.post(this.API_LOGIN, body,  {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getConfig(){
    return this.http.get(this.API_CONFIG, { headers: this.headersHttp });
  }

  setConfig(body: any){
    return this.http.put(this.API_CONFIG, body, {
      observe: 'body', 
      headers: this.headersHttp
    });
  }
}