import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, JsonPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})

export class ProductCardComponent {
  @Input() products: any;
  showModal = false;
  selectedProduct: any = null;


  openModal(product: any) {
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
