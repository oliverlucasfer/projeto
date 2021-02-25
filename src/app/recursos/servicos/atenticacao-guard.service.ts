import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from './autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AtenticacaoGuardService implements CanActivate{

  constructor(private AutenticacaoService: AutenticacaoService) { }

  canActivate(): boolean {
    return this.AutenticacaoService.isAuthenticaded();
  }
}
