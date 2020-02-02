import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/servicio/tareas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string;
  pass: string;
  
  constructor(
    private tareaService: TareasService,
  ) { }

  ngOnInit() {
  }

  logeoCliente(){
    const cliente = {
    usuario: this.user,
    password: this.pass
    };
    this.tareaService.logeo(cliente.usuario, cliente.password)
    .subscribe( res => {
      console.log(res)
    },
    error =>{
      console.error(error)
    }
    )
  }

}
