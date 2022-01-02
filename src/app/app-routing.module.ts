import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarrosCrudComponent } from './partes-da-navbar/carros-crud/carros-crud.component';
import { ChartsComponent } from './partes-da-navbar/charts/charts.component';
import { FavoritosComponent } from './partes-da-navbar/favoritos/favoritos.component';
import { HomeComponent } from './partes-da-navbar/home/home.component';
import { InfoComponent } from './partes-da-navbar/info/info.component';
import { PushComponent } from './partes-da-navbar/push/push.component';
import { StorageComponent } from './partes-da-navbar/storage/storage.component';
import { UploadComponent } from './partes-da-navbar/upload/upload.component';
import { UsuariosCrudComponent } from './partes-da-navbar/usuarios-crud/usuarios-crud.component';



const routes: Routes = [
  { path: "home",
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
  component: UsuariosCrudComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
