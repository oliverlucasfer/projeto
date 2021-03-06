import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PainelRoutingModule } from './painel-routing.module';
import { PainelComponent } from './painel.component';


@NgModule({
  declarations: [PainelComponent],
  imports: [
    CommonModule,
    PainelRoutingModule,
    CardModule,
    ButtonModule
  ]
})
export class PainelModule { }
