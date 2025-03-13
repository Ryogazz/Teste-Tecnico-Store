import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CurrencyPipe } from '@angular/common';
import { ProdutosService } from '../../shared/services/produtos.service';
import { PayloadProduct } from '../../shared/interfaces/payload-product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  providers: [CurrencyPipe],
})
export class CreateComponent {

  produtosService = inject(ProdutosService)
  matSnackBar = inject(MatSnackBar)
  router = inject(Router)

  form = new FormGroup({
    nome: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }),
    descricao: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }),
    preco: new FormControl<number | null>(null, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(0)
      ]
    }),
    categoria: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }),
    destaque: new FormControl<boolean>(false, {
      nonNullable: true
    }),
    dataCriacao: new FormControl<Date>(new Date(), {
      nonNullable: true
    }),
  })

  onSubmit() {

    if (this.isFormInvalid()) {
      console.error('Formulário inválido!');
      return;
    }

    const produtoData = this.prepareProductData();
    if (!produtoData) {
      console.error('Dados do produto inválidos!');
      return;
    }

    this.sendProductData(produtoData);
  }

  private isFormInvalid(): boolean {
    return this.form.invalid;
  }

  private prepareProductData(): PayloadProduct | null {
    const formValue = this.form.value;

    const precoDecimal = this.convertPriceToDecimal(formValue.preco);
    if (isNaN(precoDecimal)) {
      console.error('Preço inválido!');
      return null;
    }

    let dataCriacao = formValue.dataCriacao;

    if (typeof dataCriacao === 'string') {
      dataCriacao = new Date(dataCriacao);
    }


    if (!(dataCriacao instanceof Date) || isNaN(dataCriacao.getTime())) {
      console.error('Data de criação inválida!');
      return null;
    }

    return {
      nome: formValue.nome ?? '',
      descricao: formValue.descricao ?? '',
      preco: precoDecimal,
      categoria: formValue.categoria ?? '',
      destaque: formValue.destaque ?? false,
      dataCriacao: dataCriacao.toISOString(),
    };
  }



  private convertPriceToDecimal(precoRawValue: number | null | undefined): number {
    return parseFloat((precoRawValue ?? '').toString().replace('R$', '').replace(',', '.').trim());
  }

  private sendProductData(produtoData: PayloadProduct) {
    this.produtosService.post(produtoData).subscribe({
      next: () => {
        this.matSnackBar.open('Produto criado com sucesso!', 'OK',)
        this.router.navigateByUrl('/').catch((error) => console.error(error));
      },
      error: (error) => {
        console.error('Erro ao criar produto:', error);
        this.matSnackBar.open('Erro ao criar produto!', 'OK',)
      }
    });
  }

}
