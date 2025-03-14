import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ListComponent } from './pages/product-journey/list/list.component';
import { ProdutosService } from './shared/services/produtos.service';
import { inject } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'create-product',
    loadComponent: () => import('./pages/product-journey/create/create.component').then(m => m.CreateComponent)
  },
  {
    path: 'edit-product/:id',
    resolve: {
      produto: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const produtosService = inject(ProdutosService)
        return produtosService.getById(route.paramMap.get('id') as string)
      }
    },
    loadComponent: () => import('./pages/product-journey/edit/edit.component').then(m => m.EditComponent)
  }

];
