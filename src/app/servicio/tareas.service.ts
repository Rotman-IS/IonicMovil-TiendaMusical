import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../interfaz/interfazCliente';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private url = 'http://localhost:8080/TiendaVirtualMusica/ws';

  constructor(
    private http: HttpClient 
  ) { }

  crearCliente(cliente: Cliente){
    const path = `${this.url}/cliente/insertarCliente`;
    return this.http.post(path, cliente);
  }

  logeo(user: string, pass: string){
    const ruta = `${this.url}/cliente/logeo/${user}/${pass}`;
    return this.http.post(ruta, {
      usuario: user,
      password: pass,
    });
  }

  listarProducto(){
    const ruta = `${this.url}/producto/listarProducto`;
    return this.http.get(ruta);
  }
}
