import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  htttpClient = inject(HttpClient);

  getAll() {
    return this.htttpClient.get<Produto[]>('/api/produtos')
  }

}
