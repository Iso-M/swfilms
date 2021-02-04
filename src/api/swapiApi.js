export class SwapiApi {
    async getAllFilms() {
        const rawResponse = await fetch('https://swapi.dev/api/films/', {
            method: 'GET',
        });
        const content = await rawResponse.json();
        return content;
    }
}

export const swapiApi = new SwapiApi();
