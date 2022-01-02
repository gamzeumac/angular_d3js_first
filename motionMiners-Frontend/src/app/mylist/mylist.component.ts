import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {select, Store} from "@ngrx/store";

import {ProductService} from "../lizenzen.service";
import * as ProductActions from "../lizenzen.actions"
import {Product} from "../Product";
import * as fromApp from "../lizenzen.reducer"
import * as fromProduct from "../index"
 @Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss']
})
export class MylistComponent implements OnInit {

  products$: Observable<Product[]>;
   constructor(private ProductService: ProductService,
               private store: Store<fromApp.ProductState>
              
               ) {
   }
  ngOnInit() {
     this.store.dispatch(new ProductActions.Load());
   }
   
 }
