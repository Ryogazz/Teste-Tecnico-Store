import { Produto } from './produto.interface';

export type PayloadProduct = Omit<Produto, 'id'>