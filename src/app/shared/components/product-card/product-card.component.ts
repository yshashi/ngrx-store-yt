import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../models/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: IProduct;
  @Output() handleAdd = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  addToCart(product: IProduct) {
    this.handleAdd.emit(product);
  }
}
