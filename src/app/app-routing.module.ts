import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { AtenticacaoGuardService } from './recursos/servicos/atenticacao-guard.service';

const routes: Routes = [{ path: '', component: LoginComponent },
{
  path: 'painel',
  canActivate: [AtenticacaoGuardService],
  loadChildren: () =>
    import('./paginas/painel/painel.module').then(
      (m) => m.PainelModule
    ),
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
