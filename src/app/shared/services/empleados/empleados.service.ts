import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Api } from '../../api/api';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient,
    private api: Api) {
      api.puerto ='5002';
  }

  CrearEmpleado(object : any){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('X-RqUID', '122');
    return this.api.post("Empleado",object,  { headers: headers },'5002');
   }

   GetEmpleado(object : any){
    return this.api.get('Empleado'+ object);
   }
}
