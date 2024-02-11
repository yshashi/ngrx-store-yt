import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './states/app.state';
import { selectCount } from './states/counter/counter.selector';
import { IProduct } from './shared/models/product.interface';
import { selectCartProducts } from './states/cart/cart.selector';
import { CartStore } from './store/cart.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-material-tailwind-boilerplate';
  count$: Observable<number>;
  products$: Observable<IProduct[]>;
  cartStore = inject(CartStore);

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
    this.products$ = this.store.select(selectCartProducts);
  }
}
