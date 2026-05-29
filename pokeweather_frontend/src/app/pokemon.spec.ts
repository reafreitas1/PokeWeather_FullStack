import { Component } from '@angular/core';
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
  city: string = '';
  result: any = null;
  loading: boolean = false;

  constructor(private pokemonService: PokemonService) {}

  search() {
    if (!this.city) return;

    this.loading = true;
    this.pokemonService.getPokemonByCity(this.city).subscribe({
      next: (data: any) => {
        this.result = data;
        this.loading = false;
      },
      error: (err: any) => {
        alert("Cidade não encontrada ou erro no servidor!");
        this.loading = false;
      }
    });
  }
}
