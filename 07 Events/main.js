// -=-=-=-=-=-=-=- Events -=-=-=-=-=-=-=-

// ---------- set event handler
// 2 - using addEventListener()
btn2.addEventListener("click", function () {
    console.log("Button 2 first click!");
});

btn2.addEventListener("click", () => console.log("Second"));
btn2.addEventListener("click", () => console.log("Third"));

btn2.onclick = () => console.warn("Super click!");

function showMessage() {
    alert("Button 2 custom function!");
}

btn2.addEventListener("click", showMessage);
btn2.removeEventListener("click", showMessage);

// // 3 - using on{event_name} property
const btn3 = document.getElementById('btn3');

btn3.onmousedown = () => console.log("Mouse Down");
btn3.onmouseup = () => console.log("Mouse Up");
btn3.onmouseenter = () => console.log("Mouse Enter");
btn3.onmouseleave = () => console.log("Mouse Leave");

btn3.onmousemove = () => {
    btn3.innerText += "!";
}

window.onresize = () => document.body.innerHTML += "*";

// ----- [event] parameter contains event information
btn3.onclick = (event) => {
    console.log(event);
    console.log(event.target); // element that effects the event
    // event.target.textContent += ")";

    console.log("Button 3 clicked!");
};
// set event hadnler and clear the previous one
btn3.onclick = (event) => {
    console.log(event);
    alert("Button 3 clicked!");
};

const coordsText = document.querySelector('#coords-text');

window.onmousemove = (event) => {
    // console.log(event);
    coordsText.textContent = `${event.x}:${event.y}`;
}

// ----------- add event listener to many items
var circles = document.querySelectorAll('.container .circle');

circles.forEach((i) => {
    i.addEventListener("click", function (event) {
        // change element color
        event.target.classList.toggle('super');
    });
});

// ------ .stopPropagation()
const innerBlock = document.querySelector('.inner');

innerBlock.onclick = (event) => {
    console.log("inner clicked!");
    event.stopPropagation();
};

window.onclick = () => {
    console.warn("Window clicked!");
}
