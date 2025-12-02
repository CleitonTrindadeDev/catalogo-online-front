import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: any[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();

  }

  getProducts(): void {
    this.productService.list().subscribe(response => {
      this.products = response.data;
      console.log(this.products);
    })
  }

}
