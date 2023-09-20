import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { BadgesComponent } from './badges/badges.component';
import { ModalsComponent } from './modals/modals.component';
import { ToastersComponent } from './toasters/toasters.component';
import { ToastComponent } from './toasters/toast/toast.component';



@NgModule({
  declarations: [
    AlertsComponent,
    BadgesComponent,
    ModalsComponent,
    ToastersComponent,
    ToastComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NotificationsModule { }
