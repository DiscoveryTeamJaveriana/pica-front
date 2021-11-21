import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../api/api';

@Injectable({
  providedIn: 'root'
})
export class LocacionesService {

  constructor(private http: HttpClient,
    private api: Api) {
  }

  CrearSupervisor(object : any){
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.api.post("Locacion",object,  { headers: headers });
   }

   GetSupervisor(object : any){
    return this.api.get('Locacion/'+ object);
   }
}
