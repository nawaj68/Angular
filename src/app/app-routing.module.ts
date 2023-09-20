import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { AuthGuard } from './guard/auth.guard';
import { AdminComponent } from './admin/admin.component';

// const privtroute : Routes = [
//   {
//     path:'a',
//     //loadChildren:() => import('./views/deshboard/deshboard.module').then((m)=> m.DeshboardModule)
//     component:AdminComponent
//   }
// ]

 const childrenRoutes: Routes = [
  {
    path:'deshboard',
    loadChildren :() => import('./views/deshboard/deshboard.module').then((m) => m.DeshboardModule)
  }
 ]

 const routes : Routes= [
  {
    path:'',
    redirectTo:'auth',
    pathMatch:'full'
  },
  {
path:'auth',
loadChildren:() => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path:'',
    component:DefaultLayoutComponent,
    children:childrenRoutes,
    canActivate:[AuthGuard],
    data:{
      title:'Home'
    }
  },
    {
      path:'admin',
component:AdminComponent,
canActivate:[AuthGuard],
data:{
  title:'Admin Home'
}
    },
    {path:'**',
  redirectTo:'deshboard'
}
  
 ]

@NgModule({
    imports: [RouterModule.forRoot(routes,{
      scrollPositionRestoration:'top',
      anchorScrolling:'enabled',
      initialNavigation:'enabledBlocking'
    })],
    exports: [RouterModule]
  })

  // @NgModule({
  //   imports: [RouterModule.forChild(privtroute)],
  //   exports: [RouterModule]
  // })
  export class AppRoutingModule { }