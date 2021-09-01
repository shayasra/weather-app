let select = document.querySelector("select");
let para = document.querySelector("p");

select.addEventListener("change", setWeather)

function setWeather() {
    let option = select.value;
    switch (option) {
        case "sunny": para.textContent="It's Sunny Apply Sun Cream"; break;
        case "rainy": para.textContent="It's Raining Take Umberalla";break;
        case "cloudy": para.textContent="It's Cloudy, but anytime it will start rain"; break
    }
}