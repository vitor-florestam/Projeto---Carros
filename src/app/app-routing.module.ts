import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { CarrosCrudComponent } from './dashboard/carros-crud/carros-crud.component';
import { ChartsComponent } from './dashboard/charts/charts.component';
import { FavoritosComponent } from './dashboard/favoritos/favoritos.component';
import { HomeComponent } from './dashboard/home/home.component';
import { InfoComponent } from './dashboard/info/info.component';
import { PushComponent } from './dashboard/push/push.component';
import { StorageComponent } from './dashboard/storage/storage.component';
import { UploadComponent } from './dashboard/upload/upload.component';
import { UsuariosCrudComponent } from './dashboard/usuarios-crud/usuarios-crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  {path: "",
    component: LoginComponent},
  {path: "dashboard",
    component: DashboardComponent,
    children: [
      {path: "home",
    component: HomeComponent},
  {path: "carros",
  component: CarrosCrudComponent},
  { path: "charts",
  component: ChartsComponent},
  { path: "favoritos",
  component: FavoritosComponent},
  { path: "info",
  component: InfoComponent },
  { path: "push",
  component: PushComponent},
  {path: "storage",
  component: StorageComponent},
  {path: "upload",
  component: UploadComponent},
  {path: "usuarios",
  component: UsuariosCrudComponent}
    ]
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
