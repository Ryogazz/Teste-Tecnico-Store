import { Component, inject } from '@angular/core';
import { ProdutosService } from '../../shared/services/produtos.service';
import { Produto } from '../../shared/interfaces/produto.interface';
import { CardComponent } from './components/card/card.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
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
