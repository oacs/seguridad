import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpcionesComponent } from './opciones/opciones.component';
import { CifradoComponent } from './cifrado/cifrado.component';

const routes: Routes = [
  {path: '', component: OpcionesComponent},
  {path: 'cifrado', component: CifradoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
