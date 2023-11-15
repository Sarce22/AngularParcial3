import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { UltimosLanzamientosComponent } from './ultimos-lanzamientos/ultimos-lanzamientos.component';
import { PromocionesComponent } from './promociones/promociones.component';

const routes: Routes = [

  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path:'dashboard',component:DashboardComponent,

    children:[

      {
        path:'',redirectTo:'/dashboard',pathMatch:'full'
      },
      {
        path:'admin',component:AdminComponent
      },
      {
        path:'ultimosLanzamiento',component:UltimosLanzamientosComponent
      },
      {
        path:'promociones',component:PromocionesComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
