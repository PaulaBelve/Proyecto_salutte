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

// SCRIPT PORCELANATO

// SCRIPT PARA MICROCEMENTO

const fulImgBoxPorcelanato = document.getElementById("fulImgBoxPorcelanato"),
    fulImgPorcelanato = document.getElementById("fulImgPorcelanato"),
    rightBtnPorcelanato = document.getElementById("right-btnPorcelanato"),
    leftBtnPorcelanato = document.getElementById("left-btnPorcelanato"),
    listaImgPorcelanato = [...document.querySelectorAll(".imgPorcelanato")],
    closeImgPorcelanato = document.getElementById("closeImgPorcelanato");

let indexImgPorcelanato = 0;

listaImgPorcelanato.forEach((img, indice) => {
    img.addEventListener("click", (e) => {
        clicked(indice)
        fulImgBoxPorcelanato.style.display = "flex";
        fulImgPorcelanato.src = img.src;

    });
});

function clicked(position) {
    indexImgPorcelanato = position;
    fulImgPorcelanato.src = listaImgPorcelanato[indexImgPorcelanato].src;
}

rightBtnPorcelanato.addEventListener("click", e => {
    if (indexImgPorcelanato >= listaImgPorcelanato.length - 1) {
        indexImgPorcelanato = -1;
    } {
        indexImgPorcelanato++;
    }
    fulImgPorcelanato.src = listaImgPorcelanato[indexImgPorcelanato].src;
});

leftBtnPorcelanato.addEventListener("click", e => {
    if (indexImgPorcelanato <= 0) {
        indexImgPorcelanato = listaImgPorcelanato.length;
    } {
        indexImgPorcelanato--;
    }
    fulImgPorcelanato.src = listaImgPorcelanato[indexImgPorcelanato].src;
})

closeImgPorcelanato.addEventListener("click", e => fulImgBoxPorcelanato.style.display = "none")
fulImgBoxPorcelanato.addEventListener("click", e => {
    if (e.target.classList.contains("ful-img")) fulImgBoxPorcelanato.style.display = "none";
})