import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { FilterProductComponent } from "./filter-product/filter-product/filter-product.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, FilterProductComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: any[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();

  }

  onFilter(event: any) {
    console.log('Filtro aplicado:', event);
  } 

  getProducts(): void {
    this.productService.list().subscribe(response => {
      this.products = response.data;
      console.log(this.products);
    })
  }

}
