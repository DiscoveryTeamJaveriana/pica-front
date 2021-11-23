import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SupervisorService } from 'src/app/shared/services/Supervisor/supervisor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.scss']
})
export class SupervisorComponent implements OnInit {

  public group: any;
  
  constructor(private formBuilder: FormBuilder,
    private supervisorService:SupervisorService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    let IsAutenticado = localStorage.getItem("IsAutenticado");

    if (IsAutenticado != null) 
    {
    }else
    {
      document.location.href = '/';  
    }

    this.group = this.formBuilder.group({
      identificacion: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      usuario: new FormControl('', Validators.required),
      telefono: new FormControl(''),
      password: new FormControl('', Validators.required)
    });
  }

  crearSupervisorSubmit(){
      if (this.group.value)
      {
        let supervisor = 
        {
          Identificacion: this.group.value.identificacion,
          Nombre: this.group.value.nombre,
          Correo: this.group.value.correo,
          Usuario: this.group.value.usuario,
          Telefono: this.group.value.telefono,
          Clave: this.group.value.password
        }

        this.supervisorService.CrearSupervisor(supervisor).subscribe((data: any) =>
        {
          if (data == null)
          {
            this.toastr.success('Proceso de registro existos', 'Mensaje de notifcación!');             
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
