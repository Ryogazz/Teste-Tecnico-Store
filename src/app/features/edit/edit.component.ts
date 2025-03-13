import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../shared/interfaces/produto.interface';
import { FormComponent } from '../../shared/components/form/form.component';
import { ProdutosService } from '../../shared/services/produtos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

  produto: Produto = inject(ActivatedRoute).snapshot.data['produto'];
  produtosService = inject(ProdutosService)
  matSnackBar = inject(MatSnackBar)
  router = inject(Router)
  
  onEditProduct(produto: Produto) {
    this.produtosService
      .put(this.produto.id.toString(), produto)
      .subscribe(() =>{
        this.matSnackBar.open('Produto editado com sucesso!', 'OK')
        this.router.navigateByUrl('/');
      })
  }
}
