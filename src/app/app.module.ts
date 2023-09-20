import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthUserInterceptor } from './auth-interceptor/auth-user.interceptor';
import { ProfileComponent } from './containers/default-layout/profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { DefaultFooterComponent } from './containers/default-layout/default-footer/default-footer.component';
import { DefaultHeaderComponent } from './containers/default-layout/default-header/default-header.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';

const App_Containers = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent
]

@NgModule({
  declarations: [
    AppComponent,
ProfileComponent,
AdminComponent,
App_Containers
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:AuthUserInterceptor, multi:true
  },
Title,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
