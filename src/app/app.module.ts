import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { CifradoComponent } from './cifrado/cifrado.component';
import { DescifradoComponent } from './descifrado/descifrado.component';
import { FrecuenciaComponent } from './frecuencia/frecuencia.component';
import { FuerzaBrutaComponent } from './fuerza-bruta/fuerza-bruta.component';

@NgModule({
  declarations: [
    AppComponent,
    OpcionesComponent,
    CifradoComponent,
    DescifradoComponent,
    FrecuenciaComponent,
    FuerzaBrutaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
