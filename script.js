$(document).ready(function () {
    $('#weatherResult').hide();
    $('#weatherForm').submit(function (e) {
        e.preventDefault();
        const city = $('#city').val();
        const apiKey = '07218686a44543b191e6f4ff220e7bd7';
        const apiUrl = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}&units=M`;

        $.ajax({
            url: apiUrl,
            method: 'GET',
            success: function (response) {
                const weather = response.data[0];
                const weatherIconUrl = `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`;
                const weatherResult = `
                    <h3>Weather in ${weather.city_name}</h3>
                    <p>Temperature: ${weather.temp} °C</p>
                    <p>Weather: ${weather.weather.description}</p>
                    <p>Humidity: ${weather.rh} %</p>
                    <p>Wind Speed: ${weather.wind_spd} m/s</p>
                    <img src="${weatherIconUrl}" alt="Weather Icon" />
                `;

                $('#weatherResult').html(weatherResult);
                console.log(response);
            },
            error: function (err) {
                console.log(err);
            }
        });
        $('#city').val("");
        $('#weatherResult').show();
    });
});
