import { Component, inject, signal } from '@angular/core';
import { ProdutosService } from '../../../shared/services/produtos.service';
import { Produto } from '../../../shared/interfaces/produto.interface';
import { CardComponent } from './components/card/card.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { filter } from 'rxjs';
import { ConfirmationDialogService } from '../../../shared/services/confirmation-dialog-service.service';
import { NoItemsComponent } from './components/no-items/no-items.component';
import { SearchBarComponent } from '../../../shared/components/search-bar/search-bar.component';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule,NoItemsComponent, SearchBarComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  produtos = signal<Produto[]>(inject(ActivatedRoute).snapshot.data['produtos']);

  produtosService = inject(ProdutosService);
  router = inject(Router);
  confirmationDialogService = inject(ConfirmationDialogService);

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
      this.produtosService.getAll().subscribe((produtos) => {
        this.produtos.set(produtos);
      })
    });
  }
}
