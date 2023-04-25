// SCRIPT PARA GRANDES OBRAS

const fulImgBox = document.getElementById("fulImgBox"),
    fulImg = document.getElementById("fulImg"),
    rightBtn = document.getElementById("right-btn"),
    leftBtn = document.getElementById("left-btn"),
    listaImg = [...document.querySelectorAll(".img")],
    closeImg = document.getElementById("closeImg");

let indexImg = 0;

listaImg.forEach((img, indice) => {
    img.addEventListener("click", (e) => {
        clicked(indice)
        fulImgBox.style.display = "flex";
        fulImg.src = img.src;

    });
});

function clicked(position) {
    indexImg = position;
    fulImg.src = listaImg[indexImg].src;
}

rightBtn.addEventListener("click", e => {
    if (indexImg >= listaImg.length - 1) {
        indexImg = -1;
    } {
        indexImg++;
    }
    fulImg.src = listaImg[indexImg].src;
});

leftBtn.addEventListener("click", e => {
    if (indexImg <= 0) {
        indexImg = listaImg.length;
    } {
        indexImg--;
    }
    fulImg.src = listaImg[indexImg].src;
})

closeImg.addEventListener("click", e => fulImgBox.style.display = "none")

// SCRIPT PISOS

const fulImgBoxPisos = document.getElementById("fulImgBoxPiso"),
    fulImgPisos = document.getElementById("fulImgPiso"),
    rightBtnPisos = document.getElementById("right-btnPiso"),
    leftBtnPisos = document.getElementById("left-btnPiso"),
    listaImgPisos = [...document.querySelectorAll(".imgPiso")],
    closeImgPisos = document.getElementById("closeImgPiso");

let indexImgPisos = 0;

listaImgPisos.forEach((img, indice) => {
    img.addEventListener("click", (e) => {
        clicked(indice)
        fulImgBoxPisos.style.display = "flex";
        fulImgPisos.src = img.src;

    });
});

function clicked(position) {
    indexImgPisos = position;
    fulImgPisos.src = listaImgPisos[indexImgPisos].src;
}

rightBtnPisos.addEventListener("click", e => {
    if (indexImgPisos >= listaImgPisos.length - 1) {
        indexImgPisos = -1;
    } {
        indexImgPisos++;
    }
    fulImgPisos.src = listaImgPisos[indexImgPisos].src;
});

leftBtnPisos.addEventListener("click", e => {
    if (indexImgPisos <= 0) {
        indexImgPisos = listaImgPisos.length;
    } {
        indexImgPisos--;
    }
    fulImgPisos.src = listaImgPisos[indexImgPisos].src;
})

closeImgPisos.addEventListener("click", e => fulImgBoxPisos.style.display = "none")

// SCRIPT PAREDES

const fulImgBoxPared = document.getElementById("fulImgBoxPared"),
    fulImgPared = document.getElementById("fulImgPared"),
    rightBtnPared = document.getElementById("right-btnPared"),
    leftBtnPared = document.getElementById("left-btnPared"),
    listaImgPared = [...document.querySelectorAll(".imgPared")],
    closeImgPared = document.getElementById("closeImgPared");

let indexImgPared = 0;

listaImgPared.forEach((img, indice) => {
    img.addEventListener("click", (e) => {
        clicked(indice)
        fulImgBoxPared.style.display = "flex";
        fulImgPared.src = img.src;

    });
});

function clicked(position) {
    indexImgPared = position;
    fulImgPared.src = listaImgPared[indexImgPared].src;
}

rightBtnPared.addEventListener("click", e => {
    if (indexImgPared >= listaImgPared.length - 1) {
        indexImgPared = -1;
    } {
        indexImgPared++;
    }
    fulImgPared.src = listaImgPared[indexImgPared].src;
});

leftBtnPared.addEventListener("click", e => {
    if (indexImgPared <= 0) {
        indexImgPared = listaImgPared.length;
    } {
        indexImgPared--;
    }
    fulImgPared.src = listaImgPared[indexImgPared].src;
})

closeImgPared.addEventListener("click", e => fulImgBoxPared.style.display = "none")


















