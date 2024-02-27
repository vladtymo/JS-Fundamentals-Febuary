// ------------- working with BOM
window.console.log("Hello BOM!");

window.onkeydown = (e) => {
    console.log("Key Pressed:", e.keyCode);

    if (e.keyCode === 32) {
        // move hero
    }
}

// --------- window
console.log(window);
console.log(`Window size: ${window.innerHeight}x${window.innerWidth}`);

// window.addEventListener("beforeunload", (event) => {
//     console.log("Goodbye!");
//     // працює, як і повернення з window.onbeforeunload
//     // event.returnValue = "Є незбережені зміни. Піти зі сторінки?";
// });

window.onresize = () => {
    document.body.innerHTML += "!";
}

// --------- history
console.log(window.history);

//history.go(-3);   // go back 3 pages
//history.go(3);    // go forward 3 pages

backBtn.onclick = () => history.back();
forwardBtn.onclick = () => history.forward();

// --------- screen
console.log(window.screen);

screen.orientation.onchange = () => {
    alert("Rotated!");
}

// --------- location
console.log(location);

w3schoolBtn.onclick = () => {
    location.assign("https://w3schools.com"); // save history
    // location.replace("https://w3schools.com"); // remove history
    // location.reload();
}
// location.reload();

// --------- navigator
console.log(navigator);

// --------- geolocation
console.log(navigator.geolocation);

navigator.geolocation.getCurrentPosition((res) => {
    console.log(`My location: ${res.coords.latitude} : ${res.coords.longitude}`);
}, (err) => console.log("Cannot get your location!"));
