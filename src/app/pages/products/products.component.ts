import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();

  }

  getProducts(): void {
    this.productService.list().subscribe(response => {
      console.log(response)
    })
  }

}
