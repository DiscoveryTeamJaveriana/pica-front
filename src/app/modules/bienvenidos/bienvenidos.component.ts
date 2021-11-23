import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip,Color } from 'ng2-charts';
import { InspeccionesService } from 'src/app/shared/services/Inspecciones/inspecciones.service';


@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.scss']
})
export class BienvenidosComponent {

  public isAutenticado:boolean = false;
  
  public LisSupervisiones : any [] = [];
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins:any = {'backgroundColor': [
    "#FF6384",
 "#4BC0C0",
 "#FFCE56",
 "#E7E9ED",
 "#36A2EB"
 ]};

 public barChartColors: Color[] = [
  { backgroundColor: '#4e73df' },
]

barChartData: ChartDataSets[] = [
  { data: [1, 1, 1, 20], label: 'Task Status' }
];
 
  constructor(private inspeccionesService:InspeccionesService)
   {
    this.getInspecciones();
   }

  ngOnInit(): void {
    let IsAutenticado = localStorage.getItem("IsAutenticado");

    // if (IsAutenticado != null) 
    // {
    //   this.isAutenticado = true;
    // }else
    // {
    //   this.isAutenticado = false;
    //   document.location.href = '/';  
    // }

    
  }

  getInspecciones(){
    this.inspeccionesService.GetHistoricos().subscribe((data: any) => {
      this.LisSupervisiones = data;
      console.log(data);
      this.barChartLabels = this.LisSupervisiones.map(item => item.Fecha).
      filter((value, index, self) => self.indexOf(value) === index);
    });  
  }
}
