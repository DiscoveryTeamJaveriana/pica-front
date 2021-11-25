import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmpleadosService } from 'src/app/shared/services/empleados/empleados.service';
import { InspeccionesService } from 'src/app/shared/services/Inspecciones/inspecciones.service';
import { LocacionesService } from 'src/app/shared/services/locacion/locaciones.service';

@Component({
  selector: 'app-crear-inspeccion',
  templateUrl: './crear-inspeccion.component.html',
  styleUrls: ['./crear-inspeccion.component.scss']
})
export class CrearInspeccionComponent implements OnInit {

  public group: any;
  public LisLocaciones : any [] = [];
  public LisEmpleados : any [] = [];

  constructor(private formBuilder: FormBuilder,
    private inspeccionesService: InspeccionesService,
    private toastr:ToastrService,
    private locacionesService: LocacionesService,
    private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    let IsAutenticado = localStorage.getItem("IsAutenticado");

    if (IsAutenticado != null) 
    {
    }else
    {
      document.location.href = '/';  
    }
    this.group = this.formBuilder.group({
      CodigoSupervisor: new FormControl('', Validators.required),
      CodigoLocacion: new FormControl('',Validators.required),
      CodigoEmpleado: new FormControl('',Validators.required),
      Fecha: new FormControl('',Validators.required),
      Titulo: new FormControl('',Validators.required),
      Tipo: new FormControl('',Validators.required),
      Descripcion: new FormControl('',Validators.required),

      Aprobado: new FormControl(''),
      Novedad: new FormControl(''),
      DescripcionNovedad: new FormControl(''),
      AccionMejora: new FormControl(''),
      DescripcionAccionMejora: new FormControl(''),
      Comentario: new FormControl('')
    });
    this.getLocaciones();
    this.getEmpleado();
    
    let usuario = localStorage.getItem("usuario");  
    this.group.controls['CodigoSupervisor'].value =usuario;
  }

  crearInspeccionSubmit(){
    let IdSupervisor = localStorage.getItem("id");
      if (this.group.valid)
      {
        var Aprobado = (this.group.value.Aprobado =="true");
        var Novedad = (this.group.value.Novedad=="true");
        let Inspeccion = 
        {
          CodigoSupervisor: IdSupervisor,
          CodigoLocacion:this.group.value.CodigoLocacion,
          CodigoEmpleado:this.group.value.CodigoEmpleado,
          Fecha:this.group.value.Fecha,
          Titulo:this.group.value.Titulo,
          Tipo:this.group.value.Tipo,
          Descripcion: this.group.value.Descripcion,
          Aprobado: Aprobado,
          Novedad: Novedad,
          DescripcionNovedad:this.group.value.DescripcionNovedad,
          AccionMejora:this.group.value.AccionMejora,
          DescripcionAccionMejora:this.group.value.DescripcionAccionMejora,
          Comentario:this.group.value.Comentario
        }
      
        this.inspeccionesService.CrearInspecciones(Inspeccion).subscribe((data: any) =>
        {
       
          if(data == null)
          {
            this.toastr.success('Proceso de registro existos', 'Mensaje de notifcación!');

            let reciever = localStorage.getItem("Correo"); 
            let correo = 
            {
              reciever :reciever
            }
            this.inspeccionesService.EnviarCorreo(correo).subscribe((data: any) =>{ }); 
            // this.group.reset();
            window.location.href="/bienvenido"
          }else 
          {
            this.toastr.warning(data.Mensaje, 'Mensaje de notifcación!'); 
           } 
       });

      }else
      {
        this.toastr.warning('por favor valide los campos obligatorios del formulario!', 'Mensaje de notifcación!'); 
      }
    }
   getLocaciones()
   {
    this.locacionesService.GetLocacacion().subscribe((data: any) => {
      this.LisLocaciones = data;
    });  
   }
   getEmpleado()
   {
    this.empleadosService.GetEmpleado().subscribe((data: any) => {
      this.LisEmpleados = data;
      console.log(this.LisEmpleados);
    });  
   }
}
