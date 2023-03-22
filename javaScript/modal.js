
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
                    <b><a id="boxPisos__boton${piso.id}" class="btn-rPisos"> + INFO </a></b>

                    
                    
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

// MODAL PISOS

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
       <a href=https://wa.me/1149366532><img class="icon-wsp" src="../Img/whatsapp (1).png" alt=""></a> 
       <a href=https://wa.me/1149366532><p>CONTACTANOS</p></a>
       </div>
       <div class="boton-column">
      <a href="../Paginas/obrasPisos.html#microCementoPiso" class="button-obras"><img class="icon-wsp" src="../Img/construccion.png" alt=""></a> 
      <a href="../Paginas/obrasPisos.html#microCementoPiso" class="button-obras"><p>OBRAS</p></a>
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

// FUNCIÓN DONDE SE MUESTRAN LAS CARDS

mostrarCardsRevestimientoPisos(revestimientosPisos);

// VER COMO DARLE EL ESTILO QUE YO QUIERO 

const mostrarCardsPorcelanato = (porcelanatoLiquido) => {

    const contenedorPisos = document.getElementById(`sectionPisos`)

    porcelanatoLiquido.forEach((porcelanato) => {

        const div = document.createElement(`div`);

        div.classList.add(`boxPisosPorcelanato`);

        div.innerHTML += ` 
        <article class="boxPisos__info">
        <h3 class="boxPisos__title">${porcelanato.nombre}</h3>
        <p class="boxPisos__text">${porcelanato.texto} </p>
        <b><a id="boxPisos__boton${porcelanato.id}" class="btn-rPisos"> + INFO </a></b>
        </article>
        
        <picture class="boxPisos__img">
                       <img  src=${porcelanato.img}>
                                 </picture>
                   
                   

                    
                    
                    
                   
                   ` ;







        contenedorPisos.appendChild(div);

        // Evento para que el boton de ver más muestre el modal


        const botonPisos = document.getElementById(`boxPisos__boton${porcelanato.id}`)
        botonPisos.addEventListener('click', e => {
            e.preventDefault();

            modalPisos(porcelanato);

        })

    })

}

// MODAL PISOS

function modalPisos(porcelanato) {


    Swal.fire({

        width: `70%`,
        title: `${porcelanato.nombre}`,
        grow: `column`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },

        html: `<span class="sectionRevestimientos">
   
        
       <h3><b>${porcelanato.caracteristica1}</b></h3>
        
       <p>${porcelanato.descripcion1}</p>
     
        
     

   
        <h3>${porcelanato.caracteristica2}</h3>

        
        <p>${porcelanato.descripcion2}</p>

       

    
        
        <h3>${porcelanato.caracteristica3}</h3>

       
        <p>${porcelanato.descripcion3}</p>

        </span>

        <div class="botones-modal">
<div class="boton-column">
       <a href=https://wa.me/1162914596><img class="icon-wsp" src="../Img/whatsapp (1).png" alt=""></a> 
       <a href=https://wa.me/1162914596><p>CONTACTANOS</p></a>
       </div>
       <div class="boton-column">
      <a href="../Paginas/obrasPisos.html#porcelanato" class="button-obras"><img class="icon-wsp" src="../Img/construccion.png" alt=""></a> 
      <a href="../Paginas/obrasPisos.html#porcelanato" class="button-obras"><p>OBRAS</p></a>
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

// FUNCIÓN DONDE SE MUESTRAN LAS CARDS

mostrarCardsPorcelanato(porcelanatoLiquido);





