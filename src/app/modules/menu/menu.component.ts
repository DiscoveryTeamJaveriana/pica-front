import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public isAutenticado:boolean = false;
  constructor() 
  {
  }

  ngOnInit(): void {
    let IsAutenticado = localStorage.getItem("IsAutenticado");

    if (IsAutenticado != null) 
    {
      this.isAutenticado = true;
    }else
    {
      this.isAutenticado = false;
    }
  }

}
