import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateitemComponent } from './createitem/createitem.component';
import { DeleteitemComponent } from './deleteitem/deleteitem.component';
import { ProductsChekComponent } from './products-chek/products-chek.component';
import { UpdatecomponentComponent } from './updatecomponent/updatecomponent.component';


const routes: Routes = [
  {path:'create', component:CreateitemComponent},
  {path:'products', component:ProductsChekComponent},
  {path:'update/:id',component:UpdatecomponentComponent},
  {path:'',redirectTo: '/products', pathMatch: 'full'},
  {path:'delete/:id', component:DeleteitemComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
