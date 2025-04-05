import vesuvio from "./images/vesuvio.png";

export function showHome(){
    const content = document.getElementById("content");

    const homeImage = document.createElement("img");
    homeImage.src = vesuvio;
    homeImage.style.width = "20vw";

    const homeTextDiv = document.createElement("div");
    homeTextDiv.classList.add("homeText");
    homeTextDiv.textContent = "Welcome to Vesuvio's. Check out our amazing food! I hope this one doesn't get burnt down!";

    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("hours");
    hoursDiv.innerHTML = `Monday: 11am - 11pm<br>
                      Tuesday: 11am - 11pm<br>
                      Wednesday: 11am - 11pm<br>
                      Thursday: 11am - 11pm<br>
                      Friday: 11am - 1am<br>
                      Saturday: 11am - 1am<br>
                      Sunday: 12pm - 10pm`;

    content.appendChild(homeImage);
    content.appendChild(homeTextDiv);
    content.appendChild(hoursDiv);
}