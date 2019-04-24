import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import {Imagen} from '../model/model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  API_LOGIN = 'https://gameserver.centic.ovh/auth/login';
  API_CONFIG = 'https://gameserver.centic.ovh/config/';
  API_FILES = 'https://gameserver.centic.ovh/files';
  API_ITEMS = 'https://gameserver.centic.ovh/items/';

  token = localStorage.getItem('token');
  headersHttp = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });

  constructor(private http: HttpClient, private router: Router) { }

  //funcion login para que el usuario se identifique y acceda a la zona de inicio de sesion
  login(user: String, password: String){

    let info = {"user":user, "password":password};
    let body = JSON.stringify(info);

     return this.http.post(this.API_LOGIN, body,{
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  //añade el token a la sesión
  setToken(token): void {
    localStorage.setItem("token", token);
    console.log(token);
  }

  //obtiene el token de la sesión
  getToken() {
    return localStorage.getItem("token");
  }

  //subir imagen
  postImagen(file: FormData){

    return this.http.post(this.API_FILES, file, {
      observe: 'events', 
      headers: this.headersHttp
    });

  }

  //crear una nueva imagen del puzle
  postItems(imagen: Imagen){

    return this.http.post(this.API_ITEMS, imagen,{
      observe: 'body', 
      headers: this.headersHttp
    });
    
  }
  getItems(){
    return this.http.get(this.API_ITEMS, { headers: this.headersHttp });
  }

  /*getConfig(){
    return this.http.get(this.API_CONFIG, { headers: this.headersHttp });
  }

  setConfig(body: any){
    return this.http.put(this.API_CONFIG, body, {
      observe: 'body', 
      headers: this.headersHttp
    });
  }*/
}