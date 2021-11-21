import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Api } from './shared/api/api';
import { FooterComponent } from './modules/footer/footer.component';
import { HeaderComponent } from './modules/header/header.component';
import { MenuComponent } from './modules/menu/menu.component';
import { BienvenidosComponent } from './modules/bienvenidos/bienvenidos.component';
import { LoginComponent } from './modules/login/login.component';
import { EmpleadosComponent } from './modules/empleados/empleados.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    BienvenidosComponent,
    LoginComponent,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        positionClass: "toast-bottom-full-width",
        preventDuplicates: true,
      },  
      ),
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
