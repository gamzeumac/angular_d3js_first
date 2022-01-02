import { Product } from "./Product";
import { ProductActions, ProductActionTypes } from "./lizenzen.actions";

export interface ProductState {
  toggleCheckBox: boolean,
  products: Product[],
  loaded: boolean;
  error: string
}

const initialState: ProductState = {
  toggleCheckBox: true,
  products: [],
  loaded: true,
  error: ''
};


export function ProductReducer(state = initialState, action: ProductActions): ProductState {
  console.log(state)
  switch (action.type) {
case ProductActionTypes.LoadSuccess:
  return {
    ...state,
    products: [...action.payload],
    loaded: true,
    error: ''
  }
    default:
      return state
  }
}


