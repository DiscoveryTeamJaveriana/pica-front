import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
import { InspeccionesService } from 'src/app/shared/services/Inspecciones/inspecciones.service';


@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.scss']
})
export class BienvenidosComponent {

  public isAutenticado: boolean = false;

  public LisSupervisiones: any[] = [];
  public Listipos: any[] = [];

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins: any = {
    'backgroundColor': [
      "#FF6384",
      "#4BC0C0",
      "#FFCE56",
      "#E7E9ED",
      "#36A2EB"
    ]
  };

  public barChartColors: Color[] = [
    { backgroundColor: '#ea4335' },
  ]

  barChartData: ChartDataSets[] = [
    { data: [1, 1, 1, 20], label: 'Vistas por fecha' }
  ];

  constructor(private inspeccionesService: InspeccionesService) {
    this.getInspecciones();
  }

  ngOnInit(): void {
    let IsAutenticado = localStorage.getItem("IsAutenticado");

    if (IsAutenticado != null) 
    {
      this.isAutenticado = true;
    }else
    {
      this.isAutenticado = false;
      document.location.href = '/';  
    }
  }

  getInspecciones() {
    this.inspeccionesService.GetHistoricos().subscribe((data: any) => {
      
      this.LisSupervisiones = data.map((x: any) => x.Fecha);
      this.Listipos  = data.map((x: any) => x.Tipo);
      

      let unicos = this.LisSupervisiones.reduce((accArr, valor) => {
        if (!accArr.some((date: {date: string; count: number}) => date.date === valor)) {
          accArr.push({
            date: valor,
            count: this.LisSupervisiones.filter((date: string) => date === valor).length
          });
        }
        return accArr;
      },[]);


      let unicosTipo = this.Listipos.reduce((accArr2, valor2) => {
        if (!accArr2.some((date: {tipo: string; count: number}) => date.tipo === valor2)) {
          accArr2.push({
            tipo: valor2,
            count: this.Listipos.filter((tipo: string) => tipo === valor2).length
          });
        }
        return accArr2;
      },[]);
      
      console.log(unicosTipo);

      let fechas = unicos.map((t:any)=> t.date);
      let Count = unicos.map((t:any)=> t.count);
      this.barChartLabels = fechas;
      this.barChartData[0].data = Count
      this.barChartData[0].data?.push(1);
      this.barChartData[0].data?.push(20);

    });
  }
}
