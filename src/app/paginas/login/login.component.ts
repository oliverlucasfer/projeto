import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from 'src/app/recursos/modelos/RequestLogin';
import { AlertService } from 'src/app/recursos/servicos/alert.service';
import { LoginService } from 'src/app/recursos/servicos/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin!: RequestLogin;

  constructor(
    private LoginService: LoginService, 
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin() :void{
    this.LoginService.doLogin(this.requestLogin).subscribe(
    (data) => {
     this.router.navigate(['painel']);
    },
    (httperror) => {
      this.alertService.error(httperror.error.message)
    });
  }
}
