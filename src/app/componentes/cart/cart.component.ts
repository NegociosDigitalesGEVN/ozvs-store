import { Component } from '@angular/core';
import { CartProducto } from '../../interfaces/cart-producto';
import { JsonPipe } from '@angular/common';

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
}
