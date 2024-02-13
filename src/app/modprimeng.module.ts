import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';

const misModulos:any =[
  ButtonModule,
  CardModule,
  SidebarModule,
  ToastModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    misModulos
  ],
  exports:[
    misModulos
  ]
})
export class ModprimengModule { }
