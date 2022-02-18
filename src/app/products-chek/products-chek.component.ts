
import { HttpClient } from '@angular/common/http';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { ProduktsService } from 'src/produkts.service';
import { Item } from '../Item';

@Component({
  selector: 'app-products-chek',
  templateUrl: './products-chek.component.html',
  styleUrls: ['./products-chek.component.css']
})
export class ProductsChekComponent implements OnInit {
itemcomp:Item[]=[]
p: number = 1;
products:any
key:any ='id'
reverse:boolean=false
  constructor(private service:ProduktsService) { }
  

  ngOnInit(): void {
    this.getapi()
  }
 getapi(){
   this.service.getitem().subscribe((a)=>console.warn(this.itemcomp=a))
   
 }
 
Search(){
  if(this.products==""){
    this.getapi();
  }else{
    this.itemcomp=this.itemcomp.filter(rez=>{
      return rez.products.toLocaleLowerCase().match(this.products.toLocaleLowerCase());
    });
  }
}
sort(key:any){
  this.key=key;
  this.reverse=!this.reverse
}
}
