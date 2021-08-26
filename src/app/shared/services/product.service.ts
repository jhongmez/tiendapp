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
	baseURL = environment.mainURL;
	categoryId = `MCO1430`;
	productsAPI = `${this.baseURL}/search?category=${this.categoryId}`;

	constructor(private http: HttpClient) {
		console.log(`productos services`);
	}

	cargarProductos() {
		return this.http.get<ProductInterface>(`${this.productsAPI}`);
	}


}
