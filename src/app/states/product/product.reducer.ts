import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../../shared/models/product.interface';
import * as ProductActions from './product.action';
export interface ProuductState {
  products: IProduct[];
  error: string | null;
}

export const initalProductState: ProuductState = {
  products: [],
  error: null,
};

export const ProductReducer = createReducer(
  initalProductState,
  on(ProductActions.loadProductSuccess, (state, { products }) => ({
    ...state,
    products,
    error: null,
  })),
  on(ProductActions.loadProductFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage,
  }))
);
