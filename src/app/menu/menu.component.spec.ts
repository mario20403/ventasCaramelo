import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  platos: any[] = [
    { id: 1, nombre: 'Plato 1', precio: 10, imagen: 'ruta/imagen1.jpg' },
    { id: 2, nombre: 'Plato 2', precio: 15, imagen: 'ruta/imagen2.jpg' },
    { id: 3, nombre: 'Plato 3', precio: 12, imagen: 'ruta/imagen3.jpg' },
    // Agrega más platos según sea necesario
  ];

  carrito: any[] = [];

  agregarAlCarrito(plato: any) {
    const itemExistente = this.carrito.find(item => item.id === plato.id);
    if (itemExistente) {
      itemExistente.cantidad++;
    } else {
      this.carrito.push({ ...plato, cantidad: 1 });
    }
  }

  eliminarDelCarrito(item: any) {
    const index = this.carrito.indexOf(item);
    if (index > -1) {
      this.carrito.splice(index, 1);
    }
  }

  calcularTotal(): number {
    let total = 0;
    for (const item of this.carrito) {
      total += item.precio * item.cantidad;
    }
    return total;
  }
}
