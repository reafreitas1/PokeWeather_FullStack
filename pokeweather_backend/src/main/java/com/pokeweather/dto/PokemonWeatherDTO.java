package com.pokeweather.dto;

public record PokemonWeatherDTO(
        String pokemonName,
        String pokemonType,
        double temp,
        String city
) {}