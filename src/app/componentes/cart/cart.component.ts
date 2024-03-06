import { Component } from '@angular/core';
import { CartProducto } from '../../interfaces/cart-producto';
import { JsonPipe } from '@angular/common';

interface Colum {
  field: string;
  header: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cart: CartProducto[] = []


  ngOnInit(): void{
    this.cart = JSON.parse(localStorage.getItem('cart')as string);
  }

  calcularTotal(): number{
    return this.cart.reduce((total, producto) => total + producto.precios * producto.cantidad, 0);
  }
}
