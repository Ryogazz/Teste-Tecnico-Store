import { Component, EventEmitter, input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Produto } from '../../interfaces/produto.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  product = input<Produto | null>(null);

  form!: FormGroup;

  @Output() submitForm = new EventEmitter<Produto>();

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl<string>(this.product()?.nome ?? '', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(3)
        ]
      }),
      descricao: new FormControl<string>(this.product()?.descricao ?? '', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(1)
        ]
      }),
      preco: new FormControl<number | null>(this.product()?.preco ?? null, {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.min(0)
        ]
      }),
      categoria: new FormControl<string>(this.product()?.categoria ?? '', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(1)
        ]
      }),
      destaque: new FormControl<boolean>(this.product()?.destaque ?? false, {
        nonNullable: true
      }),
      dataCriacao: new FormControl<string>(
        this.product()?.dataCriacao ? this.formatDate(new Date(this.product()!.dataCriacao)) : this.formatDate(new Date()), 
        {
          nonNullable: true
        }
      ),
    });
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  onSubmit() {
    const product = this.form.value as Produto;
    this.submitForm.emit(product);
  }
}
