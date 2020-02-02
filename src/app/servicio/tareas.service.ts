import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../interfaz/interfazCliente';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private url = 'http://192.168.1.8:8080/TiendaVirtualMusicaDos/ws/cliente';

  constructor(
    private http: HttpClient 
  ) { }

  crearCliente(cliente: Cliente){
    const path = `${this.url}/insertarCliente`;
    return this.http.post(path, cliente);
  }

  logeo(user: string, pass: string){
    const ruta = `${this.url}/logeo/${user}/${pass}`;
    return this.http.post(ruta, {
      usuario: user,
      password: pass,
    });
  }
}
