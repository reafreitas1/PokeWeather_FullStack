import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from './pokemon'; // Certifique-se que o arquivo é pokemon.ts

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

  // Usando inject (Padrão Angular 18)
  private pokeService = inject(PokemonService);

  search() {
    if (!this.city.trim()) return;

    this.loading = true;
    this.result = null;

    // Use o nome exato da variável definida no inject: 'this.pokeService'
    this.pokeService.getPokemonByCity(this.city).subscribe({
      next: (data) => {
        this.result = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        alert("Erro ao buscar dados. O Java está rodando?");
        this.loading = false;
      }
    });
  }
}
