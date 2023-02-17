// REVER LOS NOMBRES - ARMAR EN EL CSS LOS ESTILOS DE LAS CLASES

const mostrarCardsRevestimientoPisos = (revestimientosPisos) => {

    const contenedorPisos = document.getElementById(`sectionPisos`)

    revestimientosPisos.forEach((piso) => {

        const div = document.createElement(`div`);

        div.classList.add(`boxPisos`);

        div.innerHTML += `   <picture class="boxPisos__img">
                       <img  src=${piso.img}>
                                 </picture>
                    <article class="boxPisos__info">
                    <h3 class="boxPisos__title"> ${piso.nombre} </h3>
                    <p class="boxPisos__text">${piso.texto} </p>
                    <b><a id="boxPisos__boton${piso.id}" class="btn-rPisos"> Ver más >> </a></b>

                    
                    
                    </article>
                   
                   ` ;







        contenedorPisos.appendChild(div);

        // Evento para que el boton de ver más muestre el modal


        const botonPisos = document.getElementById(`boxPisos__boton${piso.id}`)
        botonPisos.addEventListener('click', e => {
            e.preventDefault();

            modalPisos(piso);

        })

    })

}

// MODAL

function modalPisos(piso) {


    Swal.fire({

        width: `70%`,
        title: `${piso.nombre}`,
        grow: `column`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },

        html: `<span class="textoRevestimientos">
        
        <p>___________________________________________________</p>
        
        <h3><b>${piso.caracteristica1}</b></h3>
        <p>___________________________________________________</p>
        <p>${piso.descripcion1}</p>
        <h3>${piso.caracteristica2}</h3>

        <p>___________________________________________________</p>
        <p>${piso.descripcion2}</p>
       
        <h3>${piso.caracteristica3}</h3>

        <p>___________________________________________________</p>
        <p>${piso.descripcion3}</p></span>

        <div class="botones-modal">

        <a href=https://wa.me/1162914596><img class="icon-wsp" src="../Img/whatsapp (2).png" alt="">Contactanos</a>
        <a href=" class="button-obras"><img class="icon-wsp" src="../Img/construccion.png" alt="">Ver obras</a>

        </div>

        
        ` ,

        customClass: { title: `tituloRevestimientos` },
        padding: `2rem`,


        imageAlt: `Custom image`,
        showConfirmButton: false,
        showCloseButton: true,



    })
}

// FUNCIÓN DONDE SE MUESTRAN LAS CARDS

mostrarCardsRevestimientoPisos(revestimientosPisos);

