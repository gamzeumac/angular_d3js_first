import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { ProductService } from './lizenzen.service';
import { ProductEffect } from './app.effects';
import { reducers } from './index'; 
import { MylistComponent } from './mylist/mylist.component';


const appRoutes: Routes = [
  {path: '', component: MylistComponent , pathMatch :"full"},
  

];
@NgModule({
  imports:      [ 
  BrowserModule, 
  FormsModule,
  HttpClientModule,
  RouterModule.forRoot(appRoutes),
  StoreModule.forRoot(reducers),
  EffectsModule.forRoot([ProductEffect])
   ],
  declarations: [ AppComponent, MylistComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
