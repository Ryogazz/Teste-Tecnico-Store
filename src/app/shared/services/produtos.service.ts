import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto.interface';
import { PayloadProduct } from '../interfaces/payload-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  htttpClient = inject(HttpClient);

  getAll() {
    return this.htttpClient.get<Produto[]>('/api/produtos')
  }

  getById(id: string) {
    return this.htttpClient.get<Produto>(`/api/produtos/${id}`)
  }
  
  post(payload: PayloadProduct) {
    return this.htttpClient.post('/api/produtos', payload)
  }

  put(id: string, payload: PayloadProduct) {
    return this.htttpClient.put(`/api/produtos/${id}`, payload)
  }

  delete(id: string) {
    return this.htttpClient.delete(`/api/produtos/${id}`)
  }
}
