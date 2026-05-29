package com.pokeweather.dto;

import java.util.List;

public record WeatherResponse(
        List<Weather> weather,
        Main main,
        String name
) {
    public record Main(double temp) {}
    public record Weather(String main) {}
}