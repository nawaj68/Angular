import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { InstituteAddComponent } from './institute-add/institute-add.component';
import { InstituteListComponent } from './institute-list/institute-list.component';


@NgModule({
  declarations: [
    InstituteAddComponent,
    InstituteListComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }
