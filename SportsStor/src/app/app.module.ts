import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductRepository } from './model/product.repository';
import { StaticDataSource } from './model/static.datasource';
import { StoreModule } from './store/store.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   StoreModule
  ],
  providers: [
    provideHttpClient(),
    ProductRepository,
    StaticDataSource
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
