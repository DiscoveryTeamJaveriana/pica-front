import { Component, destroyPlatform, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmpleadosService } from 'src/app/shared/services/empleados/empleados.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder,
    private usuariosService:EmpleadosService,
    private toastr:ToastrService) { }

  public group: any;

  ngOnInit(): void {
    this.group = this.formBuilder.group({
      identificacion: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      rol: new FormControl(''),
      telefono: new FormControl('')
    });
  }

  crearEmpleadoSubmit(){
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
