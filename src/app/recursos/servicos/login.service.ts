import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLogin } from '../modelos/RequestLogin';
import { ResponseLogin } from '../modelos/ResponseLogin';
import { AutenticacaoService } from './autenticacao.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private AutenticacaoService: AutenticacaoService) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient
    .post<ResponseLogin>('http://localhost:8080/api/login', requestLogin)
      .pipe(tap((loginResponse: ResponseLogin) => this.AutenticacaoService.loginResponse = loginResponse));  
  }
}