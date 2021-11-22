import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Api } from '../../api/api';

@Injectable({
  providedIn: 'root'
})
export class InspeccionesService {

  
  constructor(private http: HttpClient,
    private api: Api) {
  }

  CrearSupervision(object : any){
    
    let RqUID = Math.floor(Math.random() * 100) + 1;
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('X-RqUID', RqUID.toString());
    return this.api.post("Inspeccion",object,  { headers: headers },'5005');
   }

   GetSupervisor(object : any){
    return this.api.get('Inspeccion/'+ object);
   }

}
