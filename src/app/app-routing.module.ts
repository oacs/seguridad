import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpcionesComponent } from './opciones/opciones.component';

const routes: Routes = [
  {path: '', component: OpcionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
