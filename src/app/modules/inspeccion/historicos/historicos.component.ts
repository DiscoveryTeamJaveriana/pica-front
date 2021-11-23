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
    this.getInspecciones();
  }

  getInspecciones(){
    this.inspeccionesService.GetHistoricosByFiltro("Supervisor","76c8aa18-3df1-43de-9d3f-784141e0c7b2").subscribe((data: any) => {
      this.lishistoricos = data;
      console.log(data);
    });  
  }

}
