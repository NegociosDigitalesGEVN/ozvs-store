import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ProductosService } from '../../servicios/productos.service';
import { CartProducto } from '../../interfaces/cart-producto';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrl: './productos-lista.component.css',
})
export class ProductosListaComponent {
  @Input() producto?: Producto;
  productos: Producto[] = [];
  cart: CartProducto[] = [];

  constructor(private servProductos: ProductosService) {}

  ngOnInit(): void {
    //Invocar al servicio para obtener los productos
    this.servProductos.getProductos().subscribe((response) => {
      this.productos = response;
    });
  }

  add(producto: any): void {
    console.log('Estoy comprando' + producto?.nombre);
    //cargar localStorage
    this.cart = JSON.parse(localStorage.getItem('cart') as string);

    // Buscar si el producto ya está en el carrito
    const existingProductIndex = this.cart.findIndex(
      (elem) => elem.id === producto?.id
    );
      console.log("Indice "+ existingProductIndex)
    if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, aumentar la cantidad
      this.cart[existingProductIndex].cantidad += 1;
    } else {
      console.log(producto)
      this.cart?.push({
        id: producto?.id as number,
        nombre: producto?.nombre as string,
        descripcion: producto?.descripcion as string,
        precios: producto?.precio as number,
        imagen: producto?.imagen as string,
        cantidad: 1
      });
    }
    //Almacenar LocalStorage
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
