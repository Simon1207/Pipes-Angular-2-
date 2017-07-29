import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

//Cambiar-Idioma de Fechas
import {LOCALE_ID} from '@angular/core'
//Importacion de Pipe.ts
import {CapitalizadoPipe} from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContraseñaPipe } from './pipes/contraseña.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContraseñaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //Se agrega la variable a providers para español
  providers: [
    {provide:LOCALE_ID, useValue:"es"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
