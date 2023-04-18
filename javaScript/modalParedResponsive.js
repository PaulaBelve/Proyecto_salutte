
const mostrarCardsRevestimientoParedesResponsivo = (revestimientosParedesResponsivo) => {

    const contenedorParedesResponsivo = document.getElementById(`sectionParedes-Responsive`)

    revestimientosParedesResponsivo.forEach((paredResponsive) => {

        const div = document.createElement(`div`);

        div.classList.add(`boxParedesResponsivo`);

        div.innerHTML += `  <article class="boxParedes__infoResponsivo">
        <h3 class="boxParedes__titleResponsivo"> ${paredResponsive.nombre} </h3>
        <p class="boxParedes__textResponsivo">${paredResponsive.texto} </p>
        <b><a id="boxParedes__botonResponsivo${paredResponsive.id}" class="btn-rParedesResponsivo"> + INFO </a></b>

        
        
        </article>
        
        <picture class="boxParedes__imgResponsivo">
                       <img  src=${paredResponsive.img}>
                                 </picture>
                    
                   
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
       <a href=https://wa.me/1149366532><img class="icon-wspResponsive" src="../Img/whatsapp (1).png" alt=""></a> 
       <a href=https://wa.me/1149366532><p>CONTACTANOS</p></a>
       </div>
       <div class="boton-columnResponsive">
      <a href="../Paginas/obrasParedes.html#microCementoPared" class="button-obrasResponsive"><img class="icon-wsp" src="../Img/construccion.png" alt=""></a> 
      <a href="../Paginas/obrasParedes.html#microCementoPared" class="button-obrasResponsive"><p>OBRAS</p></a>
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


//STUCCO VELEZIANO


const mostrarCardsRevestimientoParedesStuccoResponsivo = (revestimientosParedesStuccoResponsivo) => {

    const contenedorParedesResponsivo = document.getElementById(`sectionParedes-Responsive`)

    revestimientosParedesStuccoResponsivo.forEach((paredStuccoResponsive) => {

        const div = document.createElement(`div`);

        div.classList.add(`boxParedesStuccoResponsivo`);

        div.innerHTML += `  <article class="boxParedes__infoResponsivo">
        <h3 class="boxParedes__titleResponsivo"> ${paredStuccoResponsive.nombre} </h3>
        <p class="boxParedes__textResponsivo">${paredStuccoResponsive.texto} </p>
        <b><a id="boxParedes__botonResponsivo${paredStuccoResponsive.id}" class="btn-rParedesResponsivo"> + INFO </a></b>

        
        
        </article>
        
        <picture class="boxParedes__imgResponsivo">
                       <img  src=${paredStuccoResponsive.img}>
                                 </picture>
                    
                   
                   ` ;

        contenedorParedesResponsivo.appendChild(div);

        // Evento para que el boton de ver más muestre el modal


        const botonParedesStuccoResponsivo = document.getElementById(`boxParedes__botonResponsivo${paredStuccoResponsive.id}`)
        botonParedesStuccoResponsivo.addEventListener('click', e => {
            e.preventDefault();

            modalParedesStuccoResponsive(paredStuccoResponsive);

        })

    })

}

// MODAL PISOS

function modalParedesStuccoResponsive(paredStuccoResponsive) {


    Swal.fire({

        width: `100%`,
        title: `${paredStuccoResponsive.nombre}`,
        grow: `column`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },

        html: `<span class="sectionRevestimientosResponsive">
   
        
       <h3><b>${paredStuccoResponsive.caracteristica1}</b></h3>
        
       <p>${paredStuccoResponsive.descripcion1}</p>
     
        
     

   
        <h3>${paredStuccoResponsive.caracteristica2}</h3>

        
        <p>${paredStuccoResponsive.descripcion2}</p>

       

    
        
        <h3>${paredStuccoResponsive.caracteristica3}</h3>

       
        <p>${paredStuccoResponsive.descripcion3}</p>

        </span>

        <div class="botones-modalResponsive">
<div class="boton-columnResponsive">
       <a href=https://wa.me/1149366532><img class="icon-wspResponsive" src="../Img/whatsapp (1).png" alt=""></a> 
       <a href=https://wa.me/1149366532><p>CONTACTANOS</p></a>
       </div>
       <div class="boton-columnResponsive">
      <a href="../Paginas/obrasParedes.html#stuccoVeleziano" class="button-obrasResponsive"><img class="icon-wsp" src="../Img/construccion.png" alt=""></a> 
      <a href="../Paginas/obrasParedes.html#stuccoVeleziano" class="button-obrasResponsive"><p>OBRAS</p></a>
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

mostrarCardsRevestimientoParedesStuccoResponsivo(revestimientosParedesStuccoResponsivo);

//PEDRA FLEX


const mostrarCardsRevestimientoParedesPedraResponsivo = (revestimientosParedesPedraResponsivo) => {

    const contenedorParedesResponsivo = document.getElementById(`sectionParedes-Responsive`)

    revestimientosParedesPedraResponsivo.forEach((paredPedraResponsive) => {

        const div = document.createElement(`div`);

        div.classList.add(`boxParedesPedraResponsivo`);

        div.innerHTML += `  <article class="boxParedes__infoResponsivo">
        <h3 class="boxParedes__titleResponsivo"> ${paredPedraResponsive.nombre} </h3>
        <p class="boxParedes__textResponsivo">${paredPedraResponsive.texto} </p>
        <b><a id="boxParedes__botonResponsivo${paredPedraResponsive.id}" class="btn-rParedesResponsivo"> + INFO </a></b>

        
        
        </article>
        
        <picture class="boxParedes__imgResponsivo">
                       <img  src=${paredPedraResponsive.img}>
                                 </picture>
                    
                   
                   ` ;

        contenedorParedesResponsivo.appendChild(div);

        // Evento para que el boton de ver más muestre el modal


        const botonParedesPedraResponsivo = document.getElementById(`boxParedes__botonResponsivo${paredPedraResponsive.id}`)
        botonParedesPedraResponsivo.addEventListener('click', e => {
            e.preventDefault();

            modalParedesPedraResponsive(paredPedraResponsive);

        })

    })

}

// MODAL PISOS

function modalParedesPedraResponsive(paredPedraResponsive) {


    Swal.fire({

        width: `100%`,
        title: `${paredPedraResponsive.nombre}`,
        grow: `column`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },

        html: `<span class="sectionRevestimientosResponsive">
   
        
       <h3><b>${paredPedraResponsive.caracteristica1}</b></h3>
        
       <p>${paredPedraResponsive.descripcion1}</p>
     
        
     

   
        <h3>${paredPedraResponsive.caracteristica2}</h3>

        
        <p>${paredPedraResponsive.descripcion2}</p>

       

    
        
        <h3>${paredPedraResponsive.caracteristica3}</h3>

       
        <p>${paredPedraResponsive.descripcion3}</p>

        </span>

        <div class="botones-modalResponsive">
<div class="boton-columnResponsive">
       <a href=https://wa.me/1149366532><img class="icon-wspResponsive" src="../Img/whatsapp (1).png" alt=""></a> 
       <a href=https://wa.me/1149366532><p>CONTACTANOS</p></a>
       </div>
       <div class="boton-columnResponsive">
      <a href="../Paginas/obrasParedes.html#pedraFlex" class="button-obrasResponsive"><img class="icon-wsp" src="../Img/construccion.png" alt=""></a> 
      <a href="../Paginas/obrasParedes.html#pedraFlex" class="button-obrasResponsive"><p>OBRAS</p></a>
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

mostrarCardsRevestimientoParedesPedraResponsivo(revestimientosParedesPedraResponsivo);