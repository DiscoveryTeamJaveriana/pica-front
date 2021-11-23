import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Api } from '../../api/api';

@Injectable({
  providedIn: 'root'
})
export class InspeccionesService {

  
  constructor(private http: HttpClient,
    private api: Api) {
  }

  CrearInspecciones(object : any){
    
    let RqUID = Math.floor(Math.random() * 100) + 1;
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('X-RqUID', RqUID.toString());
    return this.api.post("Inspeccion",object,  { headers: headers },'5005');
   }

   GetHistoricos()
   {
    let RqUID = Math.floor(Math.random() * 100) + 1;
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('X-RqUID', RqUID.toString());
    headers = headers.append("FechaInicio",'2021-11-11');
    headers = headers.append("FechaFin", '2021-11-30');

    return this.http.get("http://127.0.0.1:5004/c3p/v1/Portal/Historico/Fecha",{headers: headers});
   }
   GetHistoricosByFiltro(tipo:any,identificador:any)
   {
    let RqUID = Math.floor(Math.random() * 100) + 1;
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('X-RqUID', RqUID.toString());
    headers = headers.append("TipoConsulta",tipo);

    return this.http.get("http://127.0.0.1:5004/c3p/v1/Portal/Historico/"+identificador,{headers: headers});
   }

}
