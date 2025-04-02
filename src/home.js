export function showHome(){
    const content = document.getElementById("content");

    const homeTextDiv = document.createElement("div");
    homeTextDiv.classList.add("homeText");
    homeTextDiv.textContent = "Welcome to Vesuvio's. Check out our amazing food! I hope this one doesn't get burnt down!";

    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("hours");
    hoursDiv.textContent = `Monday: 11am - 11pm
                            Tuesday: 11am - 11pm
                            Wednesday: 11am - 11pm
                            Thursaday: 11am - 11pm
                            Friday: 11am - 1am
                            Saturday: 11am - 1am
                            Sunday: 12pm - 10pm`

    content.appendChild(homeTextDiv);
    content.appendChild(hoursDiv);
}