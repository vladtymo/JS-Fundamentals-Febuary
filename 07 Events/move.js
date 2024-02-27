let activeCircle = document.querySelector('.container .circle.active');

var circles = document.querySelectorAll('.container .circle');
circles.forEach((i) => i.addEventListener("click", () => makeActive(i)));

function makeActive(element) {
    if (activeCircle)
        activeCircle.classList.remove('active');

    element.classList.add('active');
    activeCircle = element;

    moveData.readCoords(element);
}

const moveData = {
    x: 0,
    y: 0,

    speed: 25,

    rCode: 39,
    lCode: 37,
    tCode: 38,
    bCode: 40,

    containerWidth: 300,
    itemWidth: 50,

    moveLeft() {
        if (this.x > 0) // validate coords
            this.x -= this.speed;
    },
    moveRight() {
        if (this.x < this.containerWidth - this.itemWidth)
            this.x += this.speed;
    },
    moveUp() {
        this.y -= this.speed;
    },
    moveDown() {
        this.y += this.speed;
    },
    readCoords(element) {
        this.x = element.style.left ? parseInt(element.style.left) : 0;
        this.y = element.style.top ? parseInt(element.style.top) : 0;
    },
    updateCoords(element) {
        element.style.left = `${this.x}px`;
        element.style.top = `${this.y}px`;
    }
}

// keydown
window.onkeydown = (event) => {

    switch (event.keyCode) {
        case moveData.lCode:
            moveData.moveLeft();
            break;

        case moveData.rCode:
            moveData.moveRight();
            break;

        case moveData.tCode:
            moveData.moveUp();
            break;

        case moveData.bCode:
            moveData.moveDown();
            break;
    }

    moveData.updateCoords(activeCircle);
}
