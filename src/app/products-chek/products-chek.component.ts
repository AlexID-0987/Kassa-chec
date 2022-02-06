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
  constructor(private service:ProduktsService) { }

  ngOnInit(): void {
    this.getapi()
  }
 getapi(){
   this.service.getitem().subscribe((a)=>console.warn(this.itemcomp=a))
 }
}
