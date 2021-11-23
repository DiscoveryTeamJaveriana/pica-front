import { Component, OnInit } from '@angular/core';
import { InspeccionesService } from 'src/app/shared/services/Inspecciones/inspecciones.service';

@Component({
  selector: 'app-historicos',
  templateUrl: './historicos.component.html',
  styleUrls: ['./historicos.component.scss']
})
export class HistoricosComponent implements OnInit {

  constructor(private inspeccionesService:InspeccionesService) { }


   public  lishistoricos : any [] =[];
  ngOnInit(): void {
    let IsAutenticado = localStorage.getItem("IsAutenticado");

    if (IsAutenticado != null) 
    {
    }else
    {
      document.location.href = '/';  
    }

    this.getInspecciones();
  }

  getInspecciones(){
    let IsAutenticado = localStorage.getItem("id");
    this.inspeccionesService.GetHistoricosByFiltro("Supervisor",IsAutenticado).subscribe((data: any) => {
      this.lishistoricos = data;
      console.log(data);
    });  
  }

}
