import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardapioRoutingModule } from './cardapio-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CardapioRoutingModule
  ]
})
export class CardapioModule { }
