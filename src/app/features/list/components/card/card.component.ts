import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Produto } from '../../../../shared/interfaces/produto.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  produto = input.required<Produto>()

  produtoNome = computed(() => this.produto().nome)
  produtoCategoria = computed(() => this.produto().categoria)
  produtoDescricao = computed(() => this.produto().descricao)
  produtoPreco = computed(() => this.produto().preco)
  produtoDataCriacao = computed(() => this.produto().dataCriacao)
  produtoDestaque = computed(() => this.produto().destaque)
  
}
