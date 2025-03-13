import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../shared/interfaces/produto.interface';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

  produto: Produto = inject(ActivatedRoute).snapshot.data['produto'];
  
  onInit() {
    console.log(this.produto);
  }


  
}
