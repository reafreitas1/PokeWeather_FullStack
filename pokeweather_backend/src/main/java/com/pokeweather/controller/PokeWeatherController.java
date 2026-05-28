package com.pokeweather.controller;

import com.pokeweather.dto.PokemonWeatherDTO;
import com.pokeweather.service.PokeWeatherService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pokemon")
@CrossOrigin(origins = "http://localhost:4200") // IMPORTANTE: Libera o acesso para o Angular
public class PokeWeatherController {

    private final PokeWeatherService service;

    public PokeWeatherController(PokeWeatherService service) {
        this.service = service;
    }

    @GetMapping("/{city}")
    public PokemonWeatherDTO getPokemon(@PathVariable String city) {
        return service.getPokemonByCity(city);
    }
}