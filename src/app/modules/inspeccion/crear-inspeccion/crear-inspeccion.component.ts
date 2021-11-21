import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { InspeccionesService } from 'src/app/shared/services/Inspecciones/inspecciones.service';

@Component({
  selector: 'app-crear-inspeccion',
  templateUrl: './crear-inspeccion.component.html',
  styleUrls: ['./crear-inspeccion.component.scss']
})
export class CrearInspeccionComponent implements OnInit {

  public group: any;
  
  constructor(private formBuilder: FormBuilder,
    private inspeccionesService: InspeccionesService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
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
  }

  crearInspeccionSubmit(){
    console.log(this.group.valid);
      if (this.group.valid)
      {

        console.log(this.group.value);
      
      //   this.usuariosService.CrearEmpleado(usuario).subscribe((data: any) =>
      //   {
       
      //    this.toastr.success('Proceso de registro existos', 'Mensaje de notifcación!');
      //  });

      }else
      {
        this.toastr.warning('por favor valide los campos obligatorios del formulario!', 'Mensaje de notifcación!'); 
      }
    }

}
