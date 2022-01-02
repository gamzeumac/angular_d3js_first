import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {select, Store} from "@ngrx/store";
import{ProductEffect} from "./app.effects"
import {ProductService} from "./lizenzen.service";
import * as productActions from "./lizenzen.actions"
import {Product} from "./Product";
import * as fromApp from "./lizenzen.reducer"
import * as fromProduct from "./index"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent 

  implements OnInit {

    products$: Observable<Product[]>;

     constructor(private productService: ProductService,

                 private store: Store<fromApp.ProductState>,
               
                 ) {  
     }
    ngOnInit() {
       this.store.dispatch(new productActions.Load());
       console.log( 'products',this.products$)
     }     
     
   
}
