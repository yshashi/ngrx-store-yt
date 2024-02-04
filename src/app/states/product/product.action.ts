import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../shared/models/product.interface';

export const loadProduct = createAction('[Product Component] loadProduct');
export const loadProductSuccess = createAction(
  '[Product Component] loadProductSuccess',
  props<{products: IProduct[]}>()
);
export const loadProductFailure = createAction(
  '[Product Component] loadProductFailure',
  props<{ errorMessage: string }>()
);

