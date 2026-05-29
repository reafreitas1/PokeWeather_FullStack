# 🌤️ PokeWeather Full Stack

Este projeto é uma **releitura modernizada** de uma aplicação desenvolvida originalmente em 2022. O objetivo foi reconstruir o sistema do zero para aplicar as tecnologias mais recentes do mercado.

A aplicação utiliza a **OpenWeatherMap API** para buscar o clima de uma cidade e a **PokeAPI** para sugerir um Pokémon baseado na temperatura atual.

## 🚀 Evolução Tecnológica
Para esta versão, foquei em utilizar recursos modernos das linguagens:
*   **Java 21:** Uso de `Records` para uma estrutura de dados mais limpa e imutável.
*   **Spring Boot 3.3:** Configuração simplificada e melhor performance.
*   **Angular 18:** Arquitetura `Standalone`, uso da `Inject API` e novo `Control Flow` (@if).

## 🛠️ Tecnologias
- **Backend:** Java 21, Spring Boot 3, Maven.
- **Frontend:** Angular 18, TypeScript, CSS3 (Flexbox).
- **APIs:** OpenWeatherMap & PokéAPI.

## ⚙️ Como rodar o projeto

### Backend
1. Adicione sua chave da OpenWeather em `src/main/resources/application.properties`.
2. Execute a classe `PokeweatherApplication.java` no IntelliJ.

### Frontend
1. Navegue até a pasta do frontend no terminal.
2. Instale as dependências: `npm install`.
3. Rode o projeto: `ng serve`.
4. Acesse: `http://localhost:4200`.

---
Desenvolvido para fins de estudo sobre integração Full Stack e modernização de código.
