import { Component, Input, OnInit } from '@angular/core';
import { ProduktsService } from 'src/produkts.service';
import { Item } from '../Item';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-updatecomponent',
  templateUrl: './updatecomponent.component.html',
  styleUrls: ['./updatecomponent.component.css']
})
export class UpdatecomponentComponent implements OnInit {
prod:any
it:Item[]=[]
PROD:string=" ";
PRICE:string=" ";
  constructor(
    private serv:ProduktsService,
    private route:ActivatedRoute,
    private location:Location
    ) { }

  ngOnInit(): void {
   
   this.getprod()
   
   
  }
 getprod(){
  let  prodid=Number(this.route.snapshot.paramMap.get("id"));
  this.serv.getproduct(prodid).subscribe(x=>console.warn(this.prod=x));
  
 }
 update(body:any){
  console.warn(body)
  let prod=this.PROD;
  let price=this.PRICE;
  const obj={id:body,products:prod,price:price}
  this.serv.updateitem(body,obj)
  console.warn(obj)
}
}
