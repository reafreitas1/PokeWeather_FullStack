import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Adicionei esta linha que faltava
import { FormsModule } from '@angular/forms';
import { PokemonService } from './pokemon'; // Mudei de './pokemon.service' para './pokemon'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html', // Mudei para o seu nome de arquivo real
  styleUrl: './app.css'      // Mudei para o seu nome de arquivo real
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
      next: (data: any) => { // Adicionei ': any' para evitar erro de tipo
        this.result = data;
        this.loading = false;
      },
      error: (err: any) => { // Adicionei ': any' para evitar erro de tipo
        alert("Cidade não encontrada ou erro no servidor!");
        this.loading = false;
      }
    });
  }
}
