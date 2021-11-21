import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LocacionesService } from 'src/app/shared/services/locacion/locaciones.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-locacion',
  templateUrl: './locacion.component.html',
  styleUrls: ['./locacion.component.scss']
})
export class LocacionComponent implements OnInit {

  public group: any;
  
  constructor(private formBuilder: FormBuilder,
    private locacionesService: LocacionesService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.group = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      direccion: new FormControl('',Validators.required),
      barrio: new FormControl('',Validators.required),
      sector: new FormControl('',Validators.required),
      representante: new FormControl('',Validators.required),
      correo: new FormControl('',Validators.required),
      telefono: new FormControl('')
    });
  }

  crearLocacionSubmit(){
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
