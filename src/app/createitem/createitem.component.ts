import { Component, OnInit } from '@angular/core';
import { ProduktsService } from 'src/produkts.service';
import { Item } from '../Item';

@Component({
  selector: 'app-createitem',
  templateUrl: './createitem.component.html',
  styleUrls: ['./createitem.component.css']
})
export class CreateitemComponent implements OnInit {

  item:Item[]=[]
  constructor(private serv:ProduktsService) { }

  ngOnInit(): void {
  }
 additem(arr:any){
   this.serv.addpersone(arr)
 }
 
}
