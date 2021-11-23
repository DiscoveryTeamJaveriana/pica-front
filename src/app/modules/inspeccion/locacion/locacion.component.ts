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
    let IsAutenticado = localStorage.getItem("IsAutenticado");

    if (IsAutenticado != null) 
    {
    }else
    {
      document.location.href = '/';  
    }

    this.group = this.formBuilder.group({
      Nombre: new FormControl('', Validators.required),
      Direccion: new FormControl('',Validators.required),
      Barrio: new FormControl('',Validators.required),
      Sector: new FormControl('',Validators.required),
      Representante: new FormControl('',Validators.required),
      Correo: new FormControl('',Validators.required),
      Telefono: new FormControl('')
    });
  }

  crearLocacionSubmit(){
      if (this.group.valid)
      {
        let locacion = 
        {
          Nombre: this.group.value.Nombre,
          Direccion: this.group.value.Direccion,
          Barrio: this.group.value.Barrio,
          Sector:this.group.value.Sector,
          Representante:this.group.value.Representante,
          Correo: this.group.value.Correo, 
          Telefono: this.group.value.Telefono
        }

        console.log(this.group.value);
      
        this.locacionesService.CrearLocacion(locacion).subscribe((data: any) =>
        {
       
          if(data == null)
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
