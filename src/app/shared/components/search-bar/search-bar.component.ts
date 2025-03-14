import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

}
