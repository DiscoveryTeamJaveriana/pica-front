import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InspeccionRoutingModule } from './inspeccion-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { LocacionComponent } from './locacion/locacion.component';
import { CrearInspeccionComponent } from './crear-inspeccion/crear-inspeccion.component';
import { HistoricosComponent } from './historicos/historicos.component';


@NgModule({
  declarations: [
    SupervisorComponent,
    LocacionComponent,
    CrearInspeccionComponent,
    HistoricosComponent
  ],
  imports: [
    CommonModule,
    InspeccionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InspeccionModule { }
