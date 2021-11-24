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
    return this.api.post("Inspeccion",object,  { headers: headers },'pica-inspection');
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

    return this.http.get("http://zuul-proxy:7777/pica-historic/c3p/v1/Portal/Historico/Fecha",{headers: headers});
   }
   GetHistoricosByFiltro(tipo:any,identificador:any)
   {
    let RqUID = Math.floor(Math.random() * 100) + 1;
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('X-RqUID', RqUID.toString());
    headers = headers.append("TipoConsulta",tipo);
    return this.http.get("http://zuul-proxy:7777/pica-historic/c3p/v1/Portal/Historico/"+identificador,{headers: headers});
   }


   EnviarCorreo(reciever:any)
   {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http.post("http://pica-notification:10074/api/Notification/email",reciever,{headers: headers});
   }

}
