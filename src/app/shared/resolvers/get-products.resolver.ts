import { inject } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';

export const getProductos = () => {
  const produtosService = inject(ProdutosService)

  return produtosService.getAll();
}