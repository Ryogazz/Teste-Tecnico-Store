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

// search(term: string) {
//   return this.htttpClient.get<Produto[]>(`/api/produtos?nome_like=${term}&categoria_like=${term}`);
// }
//esta aqui para indicar que a busca poderai ser feita no back porem o jason server não suporta isso
  
}
