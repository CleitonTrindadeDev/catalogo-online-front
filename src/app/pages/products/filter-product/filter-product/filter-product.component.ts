import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
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
  filterForm: FormGroup;
  categories = [
    { id: 1, name: 'Roupas' },
    { id: 2, name: 'Eletrônicos' },
    { id: 3, name: 'Acessórios' }
  ];


  constructor() {
    this.filterForm = new FormGroup({
      category: new FormControl(''),
      product: new FormControl('')
    });
  }

  applyFilter() {
    console.log(this.filterForm.value);
    this.filterEmmiter.emit(
      this.filterForm.value
    );
  }
}
