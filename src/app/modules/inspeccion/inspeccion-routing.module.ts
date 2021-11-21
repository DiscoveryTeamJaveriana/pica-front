import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearInspeccionComponent } from './crear-inspeccion/crear-inspeccion.component';
import { HistoricosComponent } from './historicos/historicos.component';
import { LocacionComponent } from './locacion/locacion.component';
import { SupervisorComponent } from './supervisor/supervisor.component';

const routes: Routes = [
  { path: 'supervisor', component:  SupervisorComponent},
  { path: 'locacion', component:  LocacionComponent},
  { path: 'crear-inpeccion', component:  CrearInspeccionComponent},
  { path: 'historicos', component:  HistoricosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspeccionRoutingModule { }
