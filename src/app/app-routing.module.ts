import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './modules/empleados/empleados.component';
import { InspeccionModule } from './modules/inspeccion/inspeccion.module';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = 
[
  { path: '', component:  LoginComponent},
  { path: 'empleados', component:  EmpleadosComponent},
  {
    path: 'inspeccion',
    loadChildren: () => import('./modules/inspeccion/inspeccion.module').then(m => m.InspeccionModule),
    data: {
      breadcrumbs: 'inspeccion'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
