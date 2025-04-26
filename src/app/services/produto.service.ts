import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private API_URL = 'http://localhost:3036/produtos';
  constructor(private http: HttpClient) {}
  getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.API_URL);
  }
}
