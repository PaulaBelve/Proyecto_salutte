// REVESTIMIENTO PARA PAREDES 

// VER COMO DARLE EL ESTILO QUE YO QUIERO 

const mostrarCardsRevestimientoParedes = (revestimientosParedes) => {

    const contenedorParedes = document.getElementById(`seccion-rParedes`);

    revestimientosParedes.forEach((pared) => {

        const div = document.createElement(`div`);

        div.classList.add(`boxParedes`);

        div.innerHTML += `   <picture class="boxParedes__img">
                       <img  src=${pared.img}>
                                 </picture>
                    <article class="boxParedes__info">
                    <h3 class="boxParedes__title"> ${pared.nombre} </h3>
                    <p class="boxParedes__text">${pared.texto} </p>
                    <b><a id="boxParedes__boton${pared.id}" class="btn-rPared"> Ver más >> </a></b>

                    
                    
                    </article>
                   
                   ` ;


        contenedorParedes.appendChild(div);

        // Evento para que el boton de ver más muestre el modal


        const botonParedes = document.getElementById(`boxParedes__boton${pared.id}`)
        botonParedes.addEventListener('click', e => {
            e.preventDefault();

            modalPared(pared);

        })

    })

}

// Llamar funcion de paredes

mostrarCardsRevestimientoParedes(revestimientosParedes)



// MODAL PAREDES

function modalPared(pared) {


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

        html: `<span class="sectionRevestimientos">
   
        
       <h3><b>${piso.caracteristica1}</b></h3>
        
       <p>${piso.descripcion1}</p>
     
        
     

   
        <h3>${piso.caracteristica2}</h3>

        
        <p>${piso.descripcion2}</p>

       

    
        
        <h3>${piso.caracteristica3}</h3>

       
        <p>${piso.descripcion3}</p>

        </span>

        <div class="botones-modal">
<div class="boton-column">
       <a href=https://wa.me/1162914596><img class="icon-wsp" src="../Img/whatsapp (1).png" alt=""></a> 
       <a href=https://wa.me/1162914596><p>CONTACTANOS</p></a>
       </div>
       <div class="boton-column">
      <a href=" class="button-obras"><img class="icon-wsp" src="../Img/construccion.png" alt=""></a> 
      <a href=" class="button-obras"><p>OBRAS</p></a>
      </div>

        </div>

        </span>   
        ` ,

        customClass: { title: `tituloRevestimientos` },
        padding: `2rem`,


        imageAlt: `Custom image`,
        showConfirmButton: false,
        showCloseButton: true,



    })
}