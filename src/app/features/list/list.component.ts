import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProdutosService } from '../../shared/services/produtos.service';
import { Produto } from '../../shared/interfaces/produto.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  produtos: Produto[] = [];

  produtosService = inject(ProdutosService);


  ngOnInit(): void {
    this.produtosService.getAll().subscribe(produtos => {
      this.produtos = produtos
    });
  }
}
