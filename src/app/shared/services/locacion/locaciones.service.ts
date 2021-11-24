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

  CrearLocacion(object : any){
    let headers = new HttpHeaders();
    let RqUID = Math.floor(Math.random() * 100) + 1;
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('X-RqUID', RqUID.toString());
    return this.api.post("Locacion",object,  { headers: headers },'pica-location');
   }

   GetLocacacion(){
    return this.api.get('Locaciones','','','pica-location');
   }
}
