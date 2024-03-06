import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosListaComponent } from '../../componentes/productos-lista/productos-lista.component';
import { ProductoComponent } from '../../componentes/producto/producto.component';
import { ModprimengModule } from '../../modprimeng.module';
import { HttpClientModule } from '@angular/common/http';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    ProductosListaComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ModprimengModule,
    HttpClientModule,
    TagModule,
    RatingModule,
    DataViewModule,
    TableModule
   

   
  ],
  exports:[
    ProductosListaComponent,
    ProductoComponent
  ]
})
export class ProductosModule { }
