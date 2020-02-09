import { Component, OnInit } from '@angular/core';

import { CarritoService } from 'src/app/servicio/carrito.service';
import { Producto } from 'src/app/interfaz/interfazProducto';
import { TareasService } from 'src/app/servicio/tareas.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  carro  = [];
  private producto: Producto;

  constructor(
    private tareaService: TareasService,
    private carroServ: CarritoService
  ) { }

  ngOnInit() { 
    this.getListarProducto();
    this.carro = this.carroServ.getCarro();
  }

  getListarProducto(){
    this.tareaService.listarProducto()
    .subscribe((product: Producto) => (this.producto = product));
    
  }
  agregarCarro(producto){
    this.carroServ.agregarProducto(producto);
  }
 


}
