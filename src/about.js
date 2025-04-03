export function showAbout(){
    const content = document.getElementById("content");

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("aboutContainer");
    aboutContainer.innerHTML = `Welcome to Vesuvio’s, the finest Italian restaurant in North Jersey. A staple of the community for years, Vesuvio’s has been serving up authentic, homemade Italian cuisine with the warmth and charm of a true family establishment. Whether you’re here for a classic plate of pasta, a perfectly cooked veal parmigiana, or just a glass of wine to unwind, Vesuvio’s offers an experience that keeps customers coming back.<br>
Originally owned and operated by Artie Bucco, Vesuvio’s was a gathering place for friends, family, and even a few familiar wiseguys. Despite some setbacks—including a tragic fire that led to the original location’s demise—Artie rebuilt his dream with Nuovo Vesuvio, bringing the same passion and dedication to Italian cooking that made the restaurant a neighborhood favorite.<br>
At Vesuvio’s, every dish tells a story. From traditional recipes passed down through generations to new takes on classic flavors, our menu is a tribute to the rich culinary heritage of Italy. Whether you’re dining with old friends, making new connections, or just looking for a good meal in a welcoming atmosphere, Vesuvio’s is the place to be.<br>
Buon appetito, and remember—at Vesuvio’s, you’re always family.`;

    content.appendChild(aboutContainer);
}