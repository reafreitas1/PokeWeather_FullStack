import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from './pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  city = '';
  result: any = null;
  loading = false;


  private pokeService = inject(PokemonService);

  search() {
    if (!this.city.trim()) return;

    this.loading = true;
    this.result = null;


    this.pokeService.getPokemonByCity(this.city).subscribe({
      next: (data) => {
        this.result = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        alert("Error fetching data. Is the backend server running?");
        this.loading = false;
      }
    });
  }
}
