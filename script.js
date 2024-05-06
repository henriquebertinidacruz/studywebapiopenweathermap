function getDataFromAPI(city, elementId) {
    var apiKey = "5367ad95e7aab94d0b84e42128a72319";

    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var temperaturaKelvin = data.main.temp;
            var temperaturaCelsius = temperaturaKelvin - 273.15;
            var temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

            var descricao = data.weather[0].description;
            var pressao = data.main.pressure;
            var umidade = data.main.humidity;
            var velocidadeVento = data.wind.speed;

            temperaturaCelsius = temperaturaCelsius.toFixed(2);
            temperaturaFahrenheit = temperaturaFahrenheit.toFixed(2);

            var cardBody = document.querySelector('#' + elementId + ' .card-body');
            cardBody.innerHTML = '<p>Temperatura em ' + city + ': ' + temperaturaCelsius + '°C / ' + temperaturaFahrenheit + '°F</p>' +
                                 '<p>Condição: ' + descricao + '</p>' +
                                 '<p>Pressão: ' + pressao + ' hPa</p>' +
                                 '<p>Umidade: ' + umidade + '%</p>' +
                                 '<p>Velocidade do Vento: ' + velocidadeVento + ' m/s</p>';
        })
        .catch(error => {
            console.error('Erro ao obter dados da API:', error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    getDataFromAPI("Sao Paulo", "collapseOne");
    getDataFromAPI("Rio de Janeiro", "collapseTwo");
    getDataFromAPI("Belo Horizonte", "collapseThree");
    getDataFromAPI("Salvador", "collapseFour");
    getDataFromAPI("Fortaleza", "collapseFive");

    getDataFromAPI("Washington", "collapseSix");
    getDataFromAPI("Atlanta", "collapseSeven");
    getDataFromAPI("Austin", "collapseEight");
    getDataFromAPI("Phoenix", "collapseNine");
    getDataFromAPI("Sacramento", "collapseTen");
});
