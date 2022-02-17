import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduktsService } from 'src/produkts.service';

@Component({
  selector: 'app-deleteitem',
  templateUrl: './deleteitem.component.html',
  styleUrls: ['./deleteitem.component.css']
})
export class DeleteitemComponent implements OnInit {

  deletecomp:any
  constructor(private service:ProduktsService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getprod()
  }
  getprod(){
    let  prodid=Number(this.route.snapshot.paramMap.get("id"));
    this.service.getproduct(prodid).subscribe(x=>console.warn(this.deletecomp=x));
    
   }
 delete(id:Number){
  
    this.service.deletepersone(id)
  
 }
}
