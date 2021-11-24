import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isAutenticado:boolean = false;
  public usuario:any;
  constructor() { }

  ngOnInit(): void {
    let IsAutenticado = localStorage.getItem("IsAutenticado");

    if (IsAutenticado != null) 
    {
      this.isAutenticado = true;
      this.usuario = localStorage.getItem("usuario");
    }else
    {
      this.isAutenticado = false;
    }
  }
  cerrarsesion()
  {
    localStorage.clear();
    window.location.href ="/";
  }
}
