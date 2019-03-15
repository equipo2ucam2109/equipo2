import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import  {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private rest: AdminService ) { }

  ngOnInit() {

    this.rest.login().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
}
}