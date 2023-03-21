
const mostrarCardsRevestimientoPisosResponsivo = (revestimientosPisosResponsivo) => {

    const contenedorPisosResponsivo = document.getElementById(`sectionPisos-Responsive`)

    revestimientosPisosResponsivo.forEach((pisoResponsive) => {

        const div = document.createElement(`div`);

        div.classList.add(`boxPisosResponsivo`);

        div.innerHTML += `   
        <article class="boxPisos__infoResponsivo">
                    <h3 class="boxPisos__titleResponsivo"> ${pisoResponsive.nombre} </h3>
                    <p class="boxPisos__textResponsivo">${pisoResponsive.texto} </p>
                    <b><a id="boxPisos__botonResponsivo${pisoResponsive.id}" class="btn-rPisosResponsivo"> + INFO </a></b>

                    
                    
                    </article>
        <picture class="boxPisos__imgResponsivo">
                       <img  src=${pisoResponsive.img}>
                                 </picture>
                    
                   
                   ` ;

        contenedorPisosResponsivo.appendChild(div);

        // Evento para que el boton de ver más muestre el modal


        const botonPisosResponsivo = document.getElementById(`boxPisos__botonResponsivo${pisoResponsive.id}`)
        botonPisosResponsivo.addEventListener('click', e => {
            e.preventDefault();

            modalPisosResponsive(pisoResponsive);

        })

    })

}

// MODAL PISOS

function modalPisosResponsive(pisoResponsive) {


    Swal.fire({

        width: `100%`,
        title: `${pisoResponsive.nombre}`,
        grow: `column`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },

        html: `<span class="sectionRevestimientosResponsive">
   
        
       <h3><b>${pisoResponsive.caracteristica1}</b></h3>
        
       <p>${pisoResponsive.descripcion1}</p>
     
        
     

   
        <h3>${pisoResponsive.caracteristica2}</h3>

        
        <p>${pisoResponsive.descripcion2}</p>

       

    
        
        <h3>${pisoResponsive.caracteristica3}</h3>

       
        <p>${pisoResponsive.descripcion3}</p>

        </span>

        <div class="botones-modalResponsive">
<div class="boton-columnResponsive">
       <a href=https://wa.me/1162914596><img class="icon-wspResponsive" src="../Img/whatsapp (1).png" alt=""></a> 
       <a href=https://wa.me/1162914596><p>CONTACTANOS</p></a>
       </div>
       <div class="boton-columnResponsive">
      <a href="../Paginas/obrasPisos.html#microCementoPiso" class="button-obrasResponsive"><img class="icon-wsp" src="../Img/construccion.png" alt=""></a> 
      <a href="../Paginas/obrasPisos.html#microCementoPiso" class="button-obrasResponsive"><p>OBRAS</p></a>
      </div>

        </div>

        </span>   
        ` ,

        customClass: { title: `tituloRevestimientosResponsive` },
        padding: `2rem`,


        imageAlt: `Custom image`,
        showConfirmButton: false,
        showCloseButton: true,



    })
}

// FUNCIÓN DONDE SE MUESTRAN LAS CARDS

mostrarCardsRevestimientoPisosResponsivo(revestimientosPisosResponsivo);