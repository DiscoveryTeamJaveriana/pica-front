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
    console.log(this.group.valid);
      if (this.group.value)
      {
        let supervisor = 
        {
          identificacion: this.group.value.identificacion,
          nombre: this.group.value.nombre,
          correo: this.group.value.correo,
          usuario: this.group.value.usuario,
          telefono: this.group.value.telefono,
          password: this.group.value.password
        }

        console.log(supervisor);
        this.supervisorService.CrearSupervisor(supervisor).subscribe((data: any) =>
        {
       
         this.toastr.success('Proceso de registro existos', 'Mensaje de notifcación!');
       });

      }else
      {
        this.toastr.warning('por favor valide los campos obligatorios del formulario!', 'Mensaje de notifcación!'); 
      }
  }

}
