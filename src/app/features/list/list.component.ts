import { Component, inject } from '@angular/core';
import { ProdutosService } from '../../shared/services/produtos.service';
import { Produto } from '../../shared/interfaces/produto.interface';
import { CardComponent } from './components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { filter } from 'rxjs';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog-service.service';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule, ConfirmationDialogComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  produtos: Produto[] = [];

  produtosService = inject(ProdutosService);
  router = inject(Router);
  confirmationDialogService = inject(ConfirmationDialogService);

  ngOnInit(): void {
    this.produtosService.getAll().subscribe(produtos => {
      this.produtos = produtos
    });
  }

  onEditProduct(produto: Produto) {
    this.router.navigateByUrl(`/edit-product/${produto.id}`)
  }

  onDeleteProduct(produto: Produto) {
    this.confirmationDialogService
      .openConfirmationDialog()
      .pipe(filter((result) => !!result))
      .subscribe(() => {
        this.deleteProduct(produto.id);
      });
  }

  private deleteProduct(productId: number) {
    this.produtosService.delete(productId.toString()).subscribe(() => {
      this.produtos = this.produtos.filter((p) => p.id !== productId);
    });
  }
}
