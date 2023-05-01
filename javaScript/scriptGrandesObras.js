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
fulImgBox.addEventListener("click", e => {
    if (e.target.classList.contains("ful-img")) fulImgBox.style.display = "none";
})