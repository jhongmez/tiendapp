import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// Interface
import { ProductInterface } from '../../models/product-interface';


@Injectable({
	providedIn: 'root'
})
export class ProductService {
	
	// URL principal de la API
	// sitio o pais
	// categoria de productos
	baseURL = environment.mainURL;
	sitio = `MCO`;
	categoriaProducto = `MCO1430`;
	productos = `${this.baseURL}/sites/${this.sitio}/search?category=${this.categoriaProducto}`;


	constructor(private http: HttpClient) {
	}

	cargarProductos() {
		return this.http.get<ProductInterface>(`${this.productos}`);
	}

	obtenerInfoProductos(id: string) {
		let infoProducto = `${this.baseURL}/items/${id}`;
		return this.http.get<ProductInterface>(`${infoProducto}`);
	}


}
