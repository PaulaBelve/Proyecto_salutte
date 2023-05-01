// SCRIPT PARA MICROCEMENTO

const fulImgBoxMicroCemento = document.getElementById("fulImgBoxMicroCemento"),
    fulImgMicroCemento = document.getElementById("fulImgMicroCemento"),
    rightBtnMicroCemento = document.getElementById("right-btnMicroCemento"),
    leftBtnMicroCemento = document.getElementById("left-btnMicroCemento"),
    listaImgMicroCemento = [...document.querySelectorAll(".imgMicroCemento")],
    closeImgMicroCemento = document.getElementById("closeImgMicroCemento");

let indexImgMicroCemento = 0;

listaImgMicroCemento.forEach((img, indice) => {
    img.addEventListener("click", (e) => {
        clicked(indice)
        fulImgBoxMicroCemento.style.display = "flex";
        fulImgMicroCemento.src = img.src;

    });
});

function clicked(position) {
    indexImgMicroCemento = position;
    fulImgMicroCemento.src = listaImgMicroCemento[indexImgMicroCemento].src;
}

rightBtnMicroCemento.addEventListener("click", e => {
    if (indexImgMicroCemento >= listaImgMicroCemento.length - 1) {
        indexImgMicroCemento = -1;
    } {
        indexImgMicroCemento++;
    }
    fulImgMicroCemento.src = listaImgMicroCemento[indexImgMicroCemento].src;
});

leftBtnMicroCemento.addEventListener("click", e => {
    if (indexImgMicroCemento <= 0) {
        indexImgMicroCemento = listaImgMicroCemento.length;
    } {
        indexImgMicroCemento--;
    }
    fulImgMicroCemento.src = listaImgMicroCemento[indexImgMicroCemento].src;
})

closeImgMicroCemento.addEventListener("click", e => fulImgBoxMicroCemento.style.display = "none")
fulImgBoxMicroCemento.addEventListener("click", e => {
    if (e.target.classList.contains("ful-img")) fulImgBoxMicroCemento.style.display = "none";
})


// SCRIPT PARA STUCCO

const fulImgBoxStucco = document.getElementById("fulImgBoxStucco"),
    fulImgStucco = document.getElementById("fulImgStucco"),
    rightBtnStucco = document.getElementById("right-btnStucco"),
    leftBtnStucco = document.getElementById("left-btnStucco"),
    listaImgStucco = [...document.querySelectorAll(".imgStucco")],
    closeImgStucco = document.getElementById("closeImgStucco");

let indexImgStucco = 0;

listaImgStucco.forEach((img, indice) => {
    img.addEventListener("click", (e) => {
        clicked(indice)
        fulImgBoxStucco.style.display = "flex";
        fulImgStucco.src = img.src;

    });
});

function clicked(position) {
    indexImgStucco = position;
    fulImgStucco.src = listaImgStucco[indexImgStucco].src;
}

rightBtnStucco.addEventListener("click", e => {
    if (indexImgStucco >= listaImgStucco.length - 1) {
        indexImgStucco = -1;
    } {
        indexImgStucco++;
    }
    fulImgStucco.src = listaImgStucco[indexImgStucco].src;
});

leftBtnStucco.addEventListener("click", e => {
    if (indexImgStucco <= 0) {
        indexImgStucco = listaImgStucco.length;
    } {
        indexImgStucco--;
    }
    fulImgStucco.src = listaImgStucco[indexImgStucco].src;
})

closeImgStucco.addEventListener("click", e => fulImgBoxStucco.style.display = "none")
fulImgBoxStucco.addEventListener("click", e => {
    if (e.target.classList.contains("ful-img")) fulImgBoxStucco.style.display = "none";
})

// SCRIPT PARA PEDRAFLEX

const fulImgBoxPedraFlex = document.getElementById("fulImgBoxPedraFlex"),
    fulImgPedraFlex = document.getElementById("fulImgPedraFlex"),
    rightBtnPedraFlex = document.getElementById("right-btnPedraFlex"),
    leftBtnPedraFlex = document.getElementById("left-btnPedraFlex"),
    listaImgPedraFlex = [...document.querySelectorAll(".imgPedraFlex")],
    closeImgPedraFlex = document.getElementById("closeImgPedraFlex");

let indexImgPedraFlex = 0;

listaImgPedraFlex.forEach((img, indice) => {
    img.addEventListener("click", (e) => {
        clicked(indice)
        fulImgBoxPedraFlex.style.display = "flex";
        fulImgPedraFlex.src = img.src;

    });
});

function clicked(position) {
    indexImgPedraFlex = position;
    fulImgPedraFlex.src = listaImgPedraFlex[indexImgPedraFlex].src;
}

rightBtnPedraFlex.addEventListener("click", e => {
    if (indexImgPedraFlex >= listaImgPedraFlex.length - 1) {
        indexImgPedraFlex = -1;
    } {
        indexImgPedraFlex++;
    }
    fulImgPedraFlex.src = listaImgPedraFlex[indexImgPedraFlex].src;
});

leftBtnPedraFlex.addEventListener("click", e => {
    if (indexImgPedraFlex <= 0) {
        indexImgPedraFlex = listaImgPedraFlex.length;
    } {
        indexImgPedraFlex--;
    }
    fulImgPedraFlex.src = listaImgPedraFlex[indexImgPedraFlex].src;
})

closeImgPedraFlex.addEventListener("click", e => fulImgBoxPedraFlex.style.display = "none")
fulImgBoxPedraFlex.addEventListener("click", e => {
    if (e.target.classList.contains("ful-img")) fulImgBoxPedraFlex.style.display = "none";
})