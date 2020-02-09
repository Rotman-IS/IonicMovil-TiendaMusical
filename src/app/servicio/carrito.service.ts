import { Injectable } from '@angular/core';
import { Producto } from '../interfaz/interfazProducto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

 
  private producto: Producto;
  private carro = [];
  
  constructor(
    
  ) { }

  getCarro(){
    return this.carro;
  }

  agregarProducto(producto){
    this.carro.push(producto);
    
  }
}
