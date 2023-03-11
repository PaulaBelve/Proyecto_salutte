// REVESTIMIENTO PARA PAREDES 

// NO MUESTRA LOS MODALES

const mostrarCardsRevestimientoParedes = (revestimientosParedes) => {

    const eventoParedes = document.getElementById(`boxParedes__boton`);

    revestimientosParedes.forEach((pared) => {

        /*    const div = document.createElement(`div`);
    
            div.classList.add(`btn`); */


        eventoParedes.innerHTML += ``/* ` <!--   <picture class="boxParedes__img">
                          <img  src=${pared.img}>
                                    </picture>
                       <article class="boxParedes__info">
                       <h3 class="boxParedes__title"> ${pared.nombre} </h3>
                       <p class="boxParedes__text">${pared.texto} </p>  </article>-->
                       
                       
                       <b><a id="boxParedes__boton${pared.id}" class="btn-rPared"> + INFO </a></b>
    
                       
                       
                      
                      
                      ` ;


        //eventoParedes.appendChild(div); */

        // Evento para que el boton de ver más muestre el modal


        const botonParedes = document.getElementById(`boxParedes__boton${pared.id}`)
        botonParedes.addEventListener('click', e => {
            e.preventDefault();

            modalPared(pared);

        })



    })

}

// MODAL PISOS

function modalPared(pared) {


    Swal.fire({

        width: `70%`,
        title: `${pared.nombre}`,
        grow: `column`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },

        html: `<span class="sectionRevestimientos">
   
        
       <h3><b>${pared.caracteristica1}</b></h3>
        
       <p>${pared.descripcion1}</p>
     
        
     

   
        <h3>${pared.caracteristica2}</h3>

        
        <p>${pared.descripcion2}</p>

       

    
        
        <h3>${pared.caracteristica3}</h3>

       
        <p>${pared.descripcion3}</p>

        </span>

        <div class="botones-modal">
<div class="boton-column">
       <a href=https://wa.me/1162914596><img class="icon-wsp" src="../Img/whatsapp (1).png" alt=""></a> 
       <a href=https://wa.me/1162914596><p>CONTACTANOS</p></a>
       </div>
       <div class="boton-column">
      <a href="../Paginas/obrasParedes.html" class="button-obras"><img class="icon-wsp" src="../Img/construccion.png" alt=""></a> 
      <a href="../Paginas/obrasParedes.html" class="button-obras"><p>OBRAS</p></a>
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

// Llamar funcion de paredes

mostrarCardsRevestimientoParedes(revestimientosParedes)