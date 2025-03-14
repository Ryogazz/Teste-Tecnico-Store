import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProdutosService } from '../../../shared/services/produtos.service';
import { PayloadProduct } from '../../../shared/interfaces/payload-product.interface';
import { Produto } from '../../../shared/interfaces/produto.interface';
import { FormComponent } from '../../../shared/components/form/form.component';
import { BackToHomeComponent } from '../../../shared/components/back-to-home/back-to-home.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    FormComponent, BackToHomeComponent
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {

  produtosService = inject(ProdutosService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  onSubmit(produto: Produto) {
    const produtoData = this.prepareProductData(produto);
    if (!produtoData) {
      console.error('Dados do produto inválidos!');
      return;
    }

    this.sendProductData(produtoData);
  }

  private prepareProductData(produto: Produto): PayloadProduct | null {
    const precoDecimal = this.convertPriceToDecimal(produto.preco);
    if (isNaN(precoDecimal)) {
      console.error('Preço inválido!');
      return null;
    }

    let dataCriacao = new Date(produto.dataCriacao);

    if (isNaN(dataCriacao.getTime())) {
      console.error('Data de criação inválida!');
      return null;
    }

    return {
      nome: produto.nome ?? '',
      descricao: produto.descricao ?? '',
      preco: precoDecimal,
      categoria: produto.categoria ?? '',
      destaque: produto.destaque ?? false,
      dataCriacao: dataCriacao.toISOString(),
    };
  }

  private convertPriceToDecimal(precoRawValue: number | null | undefined): number {
    return parseFloat((precoRawValue ?? '').toString().replace('R$', '').replace(',', '.').trim());
  }

  private sendProductData(produtoData: PayloadProduct) {
    this.produtosService.post(produtoData).subscribe({
      next: () => {
        this.matSnackBar.open('Produto criado com sucesso!', 'OK');
        this.router.navigateByUrl('/').catch((error) => console.error(error));
      },
      error: (error) => {
        console.error('Erro ao criar produto:', error);
        this.matSnackBar.open('Erro ao criar produto!', 'OK');
      }
    });
  }
}