import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { CartProducto } from '../../interfaces/cart-producto';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input() producto?:Producto
  cart: CartProducto[] = []

  constructor(){}

  add():void{
    console.log("Estoy comprando" + this.producto?.nombre)
    //cargar localStorage
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Buscar si el producto ya está en el carrito
    const existingProductIndex = this.cart.findIndex(elem => elem.id === this.producto?.id);
  
    if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, aumentar la cantidad
      this.cart[existingProductIndex].cantidad += 1;
    }else{
    this.cart?.push({id: this.producto?.id as number,
      nombre: this.producto?.nombre as string,
    descripcion: this.producto?.descripcion as string,
    precios: this.producto?.precio as number,
    imagen: this.producto?.imagen as string,
    cantidad: 1
  })
}
    //Almacenar LocalStorage
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }
  }
