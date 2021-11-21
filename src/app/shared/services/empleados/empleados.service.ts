import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../api/api';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient,
    private api: Api) {
  }

  CrearEmpleado(object : any){
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.api.post("Empleados",object,  { headers: headers });
   }

   GetEmpleado(object : any){
    return this.api.get('Empleados/'+ object);
   }
}
