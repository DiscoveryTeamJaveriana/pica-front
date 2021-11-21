import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../api/api';
@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  constructor(private http: HttpClient,
    private api: Api) {
  }

  CrearSupervisor(object : any){
    const headers = new Headers();

    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    headers.append('X-RqUID', '122');
    console.log(headers);
    return this.api.post("Supervisor",object,  { headers: headers });
   }

   GetSupervisor(object : any){
    return this.api.get('Supervisor/'+ object);
   }
}
