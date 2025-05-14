function getApiData() {
    //free public api
    fetch("https://restcountries.com/v3.1/name/bharat")
        .then((response) => {
            response.json().then((data) => {
                console.log(data);
                [data] = data
                document.getElementById("name").innerHTML = data.name.official
                document.getElementById("capital").innerHTML = data.capital[0]
                document.getElementById("flags").src = data.flags.svg
                document.getElementById("population").innerHTML = data.population
                document.getElementById("area").innerHTML = data.area
                document.getElementById("independent").innerHTML = data.independent
                document.getElementById("unmember").innerHTML = data.unMember
                document.getElementById("landlocked").innerHTML = data.landlocked
                document.getElementById("timezones").innerHTML = data.timezones
                document.getElementById("startofweek").innerHTML = data.startOfWeek
                document.getElementById("maps").href = data.maps.googleMaps
                document.getElementById("borders").innerHTML = data.borders
                document.getElementById("region").innerHTML = data.region
                document.getElementById("subregion").innerHTML = data.subregion
            }).catch((error) => {
                alert("invalid Country Name")
            })
        }).catch((error) => {
            alert("invalid Country Name")
        })
}
getApiData()
function searchCountry() {
    var name = document.getElementById("search").value
    fetch("https://restcountries.com/v3.1/name/"+name)
        .then((response) => {
            response.json().then((data) => {
                console.log(data);
                [data] = data

                document.getElementById("name").innerHTML = data.name.official
                document.getElementById("capital").innerHTML = data.capital[0]
                document.getElementById("flags").src = data.flags.svg
                document.getElementById("population").innerHTML = data.population
                document.getElementById("area").innerHTML = data.area
                document.getElementById("independent").innerHTML = data.independent
                document.getElementById("unmember").innerHTML = data.unMember
                document.getElementById("landlocked").innerHTML = data.landlocked
                document.getElementById("timezones").innerHTML = data.timezones
                document.getElementById("startofweek").innerHTML = data.startOfWeek
                document.getElementById("maps").href = data.maps.googleMaps
                document.getElementById("borders").innerHTML = data.borders
                document.getElementById("region").innerHTML = data.region
                document.getElementById("subregion").innerHTML = data.subregion

            }).catch((error) => {
                alert("invalid Country Name")
            })
        }).catch((error) => {
            alert("invalid Country Name")
        })
}
