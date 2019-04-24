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
  /*token = '';
  points;
  credenciales = JSON.stringify({
    "user": 'ucam2',
    "password": 'p27QRsc'
  });*/

  constructor(private service: AdminService){}
  ngOnInit(){

  
  }
}