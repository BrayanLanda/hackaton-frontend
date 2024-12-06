import { Component } from '@angular/core';
import { Products, ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  // products: Products[] = [];

  // constructor(private productsService: ProductsService) { }

  // ngOnInit(): void {
  //   this.productsService.getAllProducts().subscribe(data => {
  //     this.products = data;
  //   });
  // }

}
