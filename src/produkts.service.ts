import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './app/Item';


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
}
