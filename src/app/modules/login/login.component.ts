import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/shared/services/login/login.service';
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public group: any;

  public isAutenticado:boolean = true;

  constructor(private formBuilder: FormBuilder,
    private toastr:ToastrService,
    private loginService:LoginService) { }


  ngOnInit(): void {
    this.group = this.formBuilder.group({
      usuario: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    let IsAutenticado = localStorage.getItem("IsAutenticado");
    console.log("IsAutenticado"+IsAutenticado)
    if (IsAutenticado != null) 
    {
       document.location.href = '/bienvenido';
    }else
    {
      this.isAutenticado = false;
    }
  }

  loginSubmit(){
      if (this.group.value)
      {
        let usuario = 
        {
          Usuario: this.group.value.usuario,
          Clave: this.group.value.password,
        }

        this.loginService.Login(usuario).subscribe((data: any) =>
        {
          console.log(data);
          if (data.Id != null)
          {
            localStorage.setItem("IsAutenticado","Si");  
            localStorage.setItem("usuario",data.Nombre);  
            localStorage.setItem("id",data.Id);  
            document.location.href = '/bienvenido';     
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
 
  isAutenticadoFun()
  {
    let IsAutenticado = localStorage.getItem("IsAutenticado");

    if (IsAutenticado != null) 
    {
      this.isAutenticado = true;
      document.location.href = '/bienvenido'; 
    }  
  }
}
