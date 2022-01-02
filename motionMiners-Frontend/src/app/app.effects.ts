import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';

import { Action, Store, select } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromProduct from './index';

import { ProductService } from './lizenzen.service';
import * as productAction from './lizenzen.actions';
import { of } from 'rxjs/internal/observable/of'; 

@Injectable()
export class ProductEffect {
  constructor(
    private productService: ProductService,
    private action$: Actions,
    private store: Store<any>
  ) {}

  productsHandler$=  createEffect(
 
   () => this.action$.pipe(
      ofType(productAction.ProductActionTypes.LoadSuccess),
      withLatestFrom(this.store.pipe(select(fromProduct.getProducts))),
      
      switchMap(([, loaded]) => {
        
        console.log('LOADING DATA', loaded);
  
        return this.productService.getProducts().pipe(
          map((products) => {
            
            return new productAction.LoadSuccess(products);
          }),
          catchError((err) => of(new productAction.LoadFail(err)))
        );
      })
    )
  )

 
}
