import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    Page404Component,
    Page500Component,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
