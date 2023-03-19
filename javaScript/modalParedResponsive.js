
const mostrarCardsRevestimientoParedesResponsivo = (revestimientosParedesResponsivo) => {

    const contenedorParedesResponsivo = document.getElementById(`sectionParedes-Responsive`)

    revestimientosParedesResponsivo.forEach((paredResponsive) => {

        const div = document.createElement(`div`);

        div.classList.add(`boxParedesResponsivo`);

        div.innerHTML += `   <picture class="boxParedes__imgResponsivo">
                       <img  src=${paredResponsive.img}>
                                 </picture>
                    <article class="boxParedes__infoResponsivo">
                    <h3 class="boxParedes__titleResponsivo"> ${paredResponsive.nombre} </h3>
                    <p class="boxParedes__textResponsivo">${paredResponsive.texto} </p>
                    <b><a id="boxParedes__botonResponsivo${paredResponsive.id}" class="btn-rParedesResponsivo"> + INFO </a></b>

                    
                    
                    </article>
                   
                   ` ;

        contenedorParedesResponsivo.appendChild(div);

        // Evento para que el boton de ver más muestre el modal


        const botonParedesResponsivo = document.getElementById(`boxParedes__botonResponsivo${paredResponsive.id}`)
        botonParedesResponsivo.addEventListener('click', e => {
            e.preventDefault();

            modalParedesResponsive(paredResponsive);

        })

    })

}

// MODAL PISOS

function modalParedesResponsive(paredResponsive) {


    Swal.fire({

        width: `100%`,
        title: `${paredResponsive.nombre}`,
        grow: `column`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },

        html: `<span class="sectionRevestimientosResponsive">
   
        
       <h3><b>${paredResponsive.caracteristica1}</b></h3>
        
       <p>${paredResponsive.descripcion1}</p>
     
        
     

   
        <h3>${paredResponsive.caracteristica2}</h3>

        
        <p>${paredResponsive.descripcion2}</p>

       

    
        
        <h3>${paredResponsive.caracteristica3}</h3>

       
        <p>${paredResponsive.descripcion3}</p>

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

mostrarCardsRevestimientoParedesResponsivo(revestimientosParedesResponsivo);