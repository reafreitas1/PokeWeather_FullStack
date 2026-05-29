package com.pokeweather.service;

import com.pokeweather.dto.PokeTypeResponse;
import com.pokeweather.dto.PokemonWeatherDTO;
import com.pokeweather.dto.WeatherResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Random;

@Service
public class PokeWeatherService {

    @Value("${openweathermap.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    public PokemonWeatherDTO getPokemonByCity(String city) {
        String weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";
        WeatherResponse weather = restTemplate.getForObject(weatherUrl, WeatherResponse.class);

        double temp = weather.main().temp();
        String weatherMain = weather.weather().get(0).main();

        String pokeType = determineType(temp, weatherMain);

        String pokeUrl = "https://pokeapi.co/api/v2/type/" + pokeType;
        PokeTypeResponse typeResponse = restTemplate.getForObject(pokeUrl, PokeTypeResponse.class);

        Random rand = new Random();
        var pokemonList = typeResponse.pokemon();
        var randomEntry = pokemonList.get(rand.nextInt(pokemonList.size()));
        String pokemonName = randomEntry.pokemon().name();

        return new PokemonWeatherDTO(pokemonName, pokeType, temp, weather.name());
    }

    private String determineType(double temp, String weatherMain) {
        if (weatherMain.equalsIgnoreCase("Rain")) return "water";
        if (temp < 10) return "ice";
        if (temp >= 10 && temp < 20) return "grass";
        if (temp >= 20 && temp < 30) return "ground";
        if (temp >= 30) return "fire";
        return "normal";
    }
}