import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Api } from '../../api/api';

@Injectable({
  providedIn: 'root'
})
export class LocacionesService {

  constructor(private http: HttpClient,
    private api: Api) {
  }

  CrearSupervisor(object : any){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('X-RqUID', '122');
    return this.api.post("Locacion",object,  { headers: headers },'5003');
   }

   GetSupervisor(object : any){
    return this.api.get('Locacion/'+ object,'5003');
   }
}
