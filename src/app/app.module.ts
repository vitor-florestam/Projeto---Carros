import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './components/header/header.component';

import { MatToolbarModule} from '@angular/material/toolbar';
import { NavComponent } from './components/nav/nav.component';

import {MatSidenavModule} from'@angular/material/sidenav';
import {MatListModule} from'@angular/material/list';
import { HomeComponent } from './dashboard/home/home.component';
import { CarrosCrudComponent } from './dashboard/carros-crud/carros-crud.component';
import { FavoritosComponent } from './dashboard/favoritos/favoritos.component';
import { UsuariosCrudComponent } from './dashboard/usuarios-crud/usuarios-crud.component';
import { UploadComponent } from './dashboard/upload/upload.component';
import { StorageComponent } from './dashboard/storage/storage.component';
import { ChartsComponent } from './dashboard/charts/charts.component';
import { PushComponent } from './dashboard/push/push.component';
import { InfoComponent } from './dashboard/info/info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





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
    InfoComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
