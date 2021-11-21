import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../api/api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
    private api: Api) {
  }

  
  Login(object : any){
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.api.post("Empleados",object,  { headers: headers });
   }

}
