import { Component, OnInit } from '@angular/core';
import {AdminService} from './services/admin.service';
import {throwError} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'admin';
  token = '';
  points;
  credenciales = JSON.stringify({
    "user": 'ucam2',
    "password": 'p27QRsc'
  });

  constructor(private service: AdminService){}
  ngOnInit(){
    this.getToken();
    this.getConfig();
  
  }
  
  getToken(){
    this.service.login(this.credenciales).subscribe(
      res =>{
        this.token = res["token"];
        localStorage.setItem('token',this.token);
      },
      err => {
        this.handleErrors(err);
      }
    );
  }

  getConfig(){
    this.service.getConfig().subscribe(
      res => {
        this.points = res["score"];
        console.log(res);
        },
      err => {
        this.handleErrors(err);
      }
    );
  }

  form: FormGroup = new FormGroup({
    points: new FormControl(null, Validators.required)
  });

  puntos(){
    if (this.form.valid){
    this.service.setConfig(this.form.value).subscribe(
      res=>{
        this.points = res["score"];
        console.log(res);
      },
      err => {
        this.handleErrors(err);
      }
    );
    }
  }

   handleErrors(error: Response) {
    return throwError(error);
  }

}