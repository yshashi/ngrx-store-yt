import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CartState } from './cart.reducer';

//export const selectCartState = (state: { cart: CartState }) => state.cart;
export const selectCartState = (state: AppState) => state.cart;

export const selectCartProducts = createSelector(
  selectCartState,
  (state: CartState) => state.products
);

export const selectTotal = createSelector(
  selectCartState,
  (state: CartState) => state.totalPrice
);
