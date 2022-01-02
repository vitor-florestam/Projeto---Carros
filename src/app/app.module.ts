import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './components/header/header.component';

import { MatToolbarModule} from '@angular/material/toolbar';
import { NavComponent } from './components/nav/nav.component';

import {MatSidenavModule} from'@angular/material/sidenav';
import {MatListModule} from'@angular/material/list';
import { HomeComponent } from './partes-da-navbar/home/home.component';
import { CarrosCrudComponent } from './partes-da-navbar/carros-crud/carros-crud.component';
import { FavoritosComponent } from './partes-da-navbar/favoritos/favoritos.component';
import { UsuariosCrudComponent } from './partes-da-navbar/usuarios-crud/usuarios-crud.component';
import { UploadComponent } from './partes-da-navbar/upload/upload.component';
import { StorageComponent } from './partes-da-navbar/storage/storage.component';
import { ChartsComponent } from './partes-da-navbar/charts/charts.component';
import { PushComponent } from './partes-da-navbar/push/push.component';
import { InfoComponent } from './partes-da-navbar/info/info.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    CarrosCrudComponent,
    FavoritosComponent,
    UsuariosCrudComponent,
    UploadComponent,
    StorageComponent,
    ChartsComponent,
    PushComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
