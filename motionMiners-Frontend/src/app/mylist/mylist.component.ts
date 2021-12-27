import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {select, Store} from "@ngrx/store";

import {ProductService} from "../lizenzen.service";
import * as productActions from "../lizenzen.actions"
import {Product} from "../Product";
import * as fromApp from "../lizenzen.reducer"
import * as fromProduct from "../index"
import {Router} from "@angular/router";
@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss']
})
export class MylistComponent implements OnInit {

  products$: any ; 
   constructor(private productService: ProductService,
               private store: Store<fromApp.ProductState>
              
               ) {
   }
  ngOnInit() {
     this.store.dispatch(new productActions.Load());
   }
   
 }
