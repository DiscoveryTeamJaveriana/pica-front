import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../api/api';

@Injectable({
  providedIn: 'root'
})
export class InspeccionesService {

  
  constructor(private http: HttpClient,
    private api: Api) {
  }

  CrearSupervisor(object : any){
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.api.post("Inspeccion",object,  { headers: headers });
   }

   GetSupervisor(object : any){
    return this.api.get('Inspeccion/'+ object);
   }

}
