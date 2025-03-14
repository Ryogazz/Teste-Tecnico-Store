import {  Routes } from '@angular/router';
import { ListComponent } from './pages/product-journey/list/list.component';

import { getProductos } from './shared/resolvers/get-products.resolver';
import { getProduto } from './shared/resolvers/get-product.resolver';

export const routes: Routes = [
  {
    path: '',
    resolve: {
      produtos: getProductos
    },
    component: ListComponent
  },
  {
    path: 'create-product',
    loadComponent: () => import('./pages/product-journey/create/create.component').then(m => m.CreateComponent)
  },
  {
    path: 'edit-product/:id',
    resolve: {
      produto: getProduto
    },
    loadComponent: () => import('./pages/product-journey/edit/edit.component').then(m => m.EditComponent)
  }

];
