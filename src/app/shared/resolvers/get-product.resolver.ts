import { inject } from '@angular/core'
import { ActivatedRouteSnapshot } from '@angular/router'
import { ProdutosService } from '../services/produtos.service'

export const getProduto = (
  route: ActivatedRouteSnapshot) => {
  const produtosService = inject(ProdutosService)
  return produtosService.getById(route.paramMap.get('id') as string)
}
