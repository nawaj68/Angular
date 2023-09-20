import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeshboardRoutingModule } from './deshboard-routing.module';
import { DeshboardComponent } from './deshboard.component';


@NgModule({
  declarations: [
    DeshboardComponent
  ],
  imports: [
    CommonModule,
    DeshboardRoutingModule
  ]
})
export class DeshboardModule { }
