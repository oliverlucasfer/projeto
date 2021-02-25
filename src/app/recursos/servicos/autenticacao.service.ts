import { Injectable } from '@angular/core';
import { ResponseLogin } from '../modelos/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  public loginResponse: ResponseLogin | undefined;

  public clear(): void{
    this.loginResponse = undefined;
  }

  public isAuthenticaded(): boolean {
    return Boolean(this.loginResponse?.jwt);
  }
}
