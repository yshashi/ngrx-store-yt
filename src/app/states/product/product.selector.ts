import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProuductState } from "./product.reducer";

export const selectProductFeature = createFeatureSelector<ProuductState>('product');

export const selectAllProducts = createSelector(
  selectProductFeature,
  (state: ProuductState) => state.products
)

export const selectProductError = createSelector(
  selectProductFeature,
  (state: ProuductState) => state.error
);

