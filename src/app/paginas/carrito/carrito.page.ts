import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaz/interfazProducto';
import { CarritoService } from 'src/app/servicio/carrito.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  carro: Producto[] = [];

  constructor(
    private carroSer: CarritoService
  ) { }

  ngOnInit() {
    this.carro = this.carroSer.getCarro()
  }

}
