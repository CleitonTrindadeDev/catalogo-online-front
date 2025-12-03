import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filter-product.component.html',
  styleUrl: './filter-product.component.scss'
})
export class FilterProductComponent {
  @Output() filterEmmiter = new EventEmitter<any>();
  categoryControl = new FormControl('');
  searchControl = new FormControl('');

  categories = [
    { id: 1, name: 'Roupas' },
    { id: 2, name: 'Eletrônicos' },
    { id: 3, name: 'Acessórios' }
  ];

  applyFilter() {
    this.filterEmmiter.emit({
      category: this.categoryControl.value,
      search: this.searchControl.value
    });
  

  }
}
