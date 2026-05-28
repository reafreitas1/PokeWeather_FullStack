package com.pokeweather.dto;

import java.util.List;

public record PokeTypeResponse(
        List<PokemonEntry> pokemon
) {
    public record PokemonEntry(PokemonSummary pokemon) {}
    public record PokemonSummary(String name, String url) {}
}