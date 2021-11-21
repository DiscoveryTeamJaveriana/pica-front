import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from '../../api/api';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  constructor(private http: HttpClient,
    private api: Api) {
      api.puerto ='5001';
  }

  CrearSupervisor(object : any){
    let headers = new HttpHeaders();

    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('X-RqUID', '122');
    console.log(headers);
    return this.api.post("Supervisor",object,  { headers: headers },'5001');
   }

   GetSupervisor(object : any){
    return this.api.get('Supervisor/'+ object);
   }
}
