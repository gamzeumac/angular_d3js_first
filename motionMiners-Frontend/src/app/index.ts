import {createFeatureSelector, createSelector, ActionReducerMap} from "@ngrx/store";
import * as fromProduct from './lizenzen.reducer'

export interface State {
  products: fromProduct.ProductState;
}
export const reducers: ActionReducerMap<State , any > = {
  products: fromProduct.ProductReducer,
};

const getProductFeatureState =createFeatureSelector<fromProduct.ProductState>('products')

export const getProducts = createSelector(
  getProductFeatureState,
  state => {
    return state.products
 
  }
);

export const getLoaded = createSelector(
  getProductFeatureState,
  state => {
    return state.loaded
  }
);
