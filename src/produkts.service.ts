import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Item } from './app/Item';
import { ProductsChekComponent } from './app/products-chek/products-chek.component';


@Injectable({
  providedIn: 'root'
})
export class ProduktsService {
url='https://localhost:44395/api/purchase'
it:Item[]=[]
  constructor(private http:HttpClient) { }

  getitem():Observable<Item[]>{
    return this.http.get<Item[]>(this.url)
  }
  
  addpersone(data:any){
    this.http.post<Item[]>(this.url,{products:data.prod,price:data.price})
    .subscribe((c)=>{console.warn(this.it)})
  }
  getproduct(prodid:number):Observable<Item>{
    const prod=this.http.get<Item>(this.url+'/'+prodid)
    return prod;
  }
  
  deletepersone(data:any){
    const ur=`${this.url}/${data}`;
    this.http.delete(ur).subscribe((rez)=>console.warn("Ok"))
  }
  updateitem(it:Item,body:any){
    const ur=`${this.url}/${it}`;
    return this.http.put<Item[]>(ur,body)
    .subscribe((a)=>console.warn(a))
    
  }
  
}
