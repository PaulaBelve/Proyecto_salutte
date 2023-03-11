// REVESTIMIENTO PARA PAREDES 

// PROBAR VER MÁS 
/*const box = document.querySelector('#infoParedes');
const verMas = document.querySelector(`#leer_mas`);

verMas.addEventListener('click', leerMas)

function leerMas() {

    if (box.className === "abierto") {

        box.className = "";
        verMas.textContent = "Mostrar más"
    } else {
        box.className = "abierto";
        verMas.textContent = "Mostrar menos"

    }
} */



const microCementoPared = (revestimientoMicroCemento) => {

    const contenedorParedes = document.getElementById(`seccion-rParedes`)

    revestimientoMicroCemento.forEach((pared) => {

        const div = document.createElement(`div`);

        div.classList.add(`boxParedes-microCemento`);

        div.innerHTML += `   <picture class="boxParedes__img">
                       <img  src=${pared.img}>
                                 </picture>
                    <article class="boxParedes__info">
                    <h3 class="boxParedes__title"> ${pared.nombre} </h3>
                    <p class="boxParedes__text">${pared.texto} </p>
                    <b><a id="boxParedes__boton${pared.id}" class="btn-paredes"> + INFO </a></b>

                    
                    
                    </article>
                   
                   ` ;







        contenedorParedes.appendChild(div);



        const botonParedes = document.getElementById(`boxParedes__boton${pared.id}`)
        botonParedes.addEventListener('click', e => {
            e.preventDefault();

            modalPared(pared);

        })



    })

}

// Llamar funcion de paredes

microCementoPared(revestimientoMicroCemento)

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

const stucoVeleziano = (revestimientoStuccoVeleziano) => {

    const contenedorParedes = document.getElementById(`seccion-rParedes`)

    revestimientoStuccoVeleziano.forEach((pared) => {

        const div = document.createElement(`div`);

        div.classList.add(`boxParedes-stuccoVeleziano`);

        div.innerHTML += `  
        <article class="boxParedes__info">
                    <h3 class="boxParedes__title"> ${pared.nombre} </h3>
                    <p class="boxParedes__text">${pared.texto} </p>
                    <b><a id="boxParedes__boton${pared.id}" class="btn-paredes"> + INFO </a></b>

                    
                    
                    </article>
        <picture class="boxParedes__img">
                       <img  src=${pared.img}>
                                 </picture>
                    
                   
                   ` ;







        contenedorParedes.appendChild(div);



        const botonParedes = document.getElementById(`boxParedes__boton${pared.id}`)
        botonParedes.addEventListener('click', e => {
            e.preventDefault();

            modalPared(pared);

        })



    })

}

// Llamar funcion de paredes

stucoVeleziano(revestimientoStuccoVeleziano)

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

const pedraFlex = (revestimientoPedraFlex) => {

    const contenedorParedes = document.getElementById(`seccion-rParedes`)

    revestimientoPedraFlex.forEach((pared) => {

        const div = document.createElement(`div`);

        div.classList.add(`boxParedes-pedraFlex`);

        div.innerHTML += `   <picture class="boxParedes__img">
                       <img  src=${pared.img}>
                                 </picture>
                    <article class="boxParedes__info">
                    <h3 class="boxParedes__title"> ${pared.nombre} </h3>
                    <p class="boxParedes__text">${pared.texto} </p>
                    <b><a id="boxParedes__boton${pared.id}" class="btn-paredes"> + INFO </a></b>

                    
                    
                    </article>
                   
                   ` ;







        contenedorParedes.appendChild(div);



        const botonParedes = document.getElementById(`boxParedes__boton${pared.id}`)
        botonParedes.addEventListener('click', e => {
            e.preventDefault();

            modalPared(pared);

        })



    })

}

// Llamar funcion de paredes

pedraFlex(revestimientoPedraFlex)

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

const tarquini = (revestimientoTarquini) => {

    const contenedorParedes = document.getElementById(`seccion-rParedes`)

    revestimientoTarquini.forEach((pared) => {

        const div = document.createElement(`div`);

        div.classList.add(`boxParedes-tarquini`);

        div.innerHTML += `  
        
        <article class="boxParedes__info">
        <h3 class="boxParedes__title"> ${pared.nombre} </h3>
        <p class="boxParedes__text">${pared.texto} </p>
        <b><a id="boxParedes__boton${pared.id}" class="btn-paredes"> + INFO </a></b>

        
        
        </article>
        <picture class="boxParedes__img">
                       <img  src=${pared.img}>
                                 </picture>
                   
                   
                   ` ;







        contenedorParedes.appendChild(div);



        const botonParedes = document.getElementById(`boxParedes__boton${pared.id}`)
        botonParedes.addEventListener('click', e => {
            e.preventDefault();

            modalPared(pared);

        })



    })

}

// Llamar funcion de paredes

tarquini(revestimientoTarquini)

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
