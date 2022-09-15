function search() {
    var ciudadElement = document.getElementById("ciudadNombre");
    var tempElement = document.getElementById("Temperatura");
    var desElement = document.getElementById("Description");
    var latElement = document.getElementById("lat");
    var lonElement = document.getElementById("lon");

    fetch("http://api.openweathermap.org/data/2.5/weather?lat="+latElement.value+"&lon="+lonElement.value+"&appid=131c9178333688552b12c73520ccbc35&units=metric&lang=es",
        {
            method: "GET",
            headers:{},
        })
        .then(response => {return response.json()})
        .then(function(response) {
            console.log("Entrads");
            console.log(response);
            var desInfo = response["weather"][0]["description"];

            ciudadElement.innerHTML = response.name;
            tempElement.innerHTML = "Temperatura: " + response.main.temp;
            desElement.innerHTML = "Description: " + response.weather[0].description;
        })
    .catch(err =>{alert("No hay dato")});
}   