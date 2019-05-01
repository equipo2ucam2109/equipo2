import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user;
  public password;
  public loginOk: boolean = true;


  constructor(private rest: AdminService, private router: Router) { }

  ngOnInit() {
  }

  login(){

    return this.rest.login(this.user, this.password).subscribe(
      data =>{
        const token = data['token'];
        this.rest.setToken(token);
        this.router.navigateByUrl('main');
        this.loginOk = true;
      },
      error => {
        console.log(error);
        this.errorLogin()}

    );

  }

  errorLogin(){
    this.loginOk = false;
  }


}
