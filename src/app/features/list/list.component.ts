import { Component, inject } from '@angular/core';
import { ProdutosService } from '../../shared/services/produtos.service';
import { Produto } from '../../shared/interfaces/produto.interface';
import { CardComponent } from './components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';



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
  router = inject(Router);
  dialog = inject(MatDialog);
  ngOnInit(): void {
    this.produtosService.getAll().subscribe(produtos => {
      this.produtos = produtos
    });
  }

  onEditProduct(produto: Produto) {
    console.log('Produto a ser editado:', produto);
    this.router.navigateByUrl(`/edit-product/${produto.id}`)
  }

  onDeleteProduct(produto: Produto) {

    this.openDialog()

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    });

    dialogRef.afterClosed()
      .subscribe((ansower: boolean) => {
        if (ansower) {
          // this.produtosService.delete(produto.id.toString()).subscribe(() => {
          //   this.produtos = this.produtos.filter(p => p.id !== produto.id);
          // });
          console.log('Produto deletado com sucesso!');
        }
      })
  }
}
