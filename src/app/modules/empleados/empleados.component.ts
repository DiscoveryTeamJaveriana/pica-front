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

    let IsAutenticado = localStorage.getItem("IsAutenticado");

    if (IsAutenticado != null) 
    {
    }else
    {
      document.location.href = '/';  
    }

    this.group = this.formBuilder.group({
      Identificacion: new FormControl('', Validators.required),
      Nombre: new FormControl('', Validators.required),
      Correo: new FormControl('', Validators.required),
      Rol: new FormControl(''),
      Telefono: new FormControl('')
    });
  }

  crearEmpleadoSubmit(){
    console.log(this.group.valid);
      if (this.group.valid)
      {

        let usuario = 
        {
          Identificacion: this.group.value.Identificacion,
          Nombre: this.group.value.Nombre,
          Correo: this.group.value.Correo,
          Rol: this.group.value.Rol,
          Telefono: this.group.value.Telefono,
        }
      
        this.usuariosService.CrearEmpleado(usuario).subscribe((data: any) =>
        {
       
          if(data == null)
          {
            this.toastr.success('Proceso de registro existos', 'Mensaje de notifcación!');   
            this.group.reset();          
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

}
