import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsChekComponent } from './products-chek/products-chek.component';
import { CreateitemComponent } from './createitem/createitem.component';
import { UpdatecomponentComponent } from './updatecomponent/updatecomponent.component';
import { DeleteitemComponent } from './deleteitem/deleteitem.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsChekComponent,
    CreateitemComponent,
    UpdatecomponentComponent,
    DeleteitemComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
