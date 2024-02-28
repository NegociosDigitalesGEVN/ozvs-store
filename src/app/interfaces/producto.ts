export interface Producto {
    id:number;
    nombre:string;
    marca:string
    modelo:string;
    descripcion: string;
    precio: number;
    precioA:number;
    imagen: string;	
    rating?: number;
    stock: any;
}
