import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';


@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    CardModule,
    ButtonModule
  ]
})
export class CadastroModule { }
