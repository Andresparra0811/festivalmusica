document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
    navegacionFija();
    resaltarEnlace();
    scrollNav();
});

function navegacionFija() {
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    document.addEventListener('scroll', function() {
        if(sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed');
        }
        else {
            header.classList.remove('fixed');
        }
    });

};  



function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    const cantidad_imagenes = 16;
    for (let i=1;i<=cantidad_imagenes;i++) {
        //se recomienda escribir el nombre de la etiqueta en mayúsculas
        const imagen = document.createElement('IMG');
        imagen.src = `src/src/gallery/full/${i}.jpg`;  
        imagen.alt = `Imagen ${i}`;

        galeria.appendChild(imagen);
            //Eveent Handler para la galeria

        
        imagen.onclick = function(){
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
}

    }



function mostrarImagen(i) {
    
    const imagen = document.createElement('IMG');
    imagen.src = `src/src/gallery/full/${i}.jpg`;  
    imagen.alt = `Imagen ${i}`;

    //generar modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal
    

    //botón para cerrar el modal
    const cerrarModalBtn = document.createElement('BUTTON');
    cerrarModalBtn.textContent = 'X';
    cerrarModalBtn.classList.add('btn-cerrar');
    cerrarModalBtn.onclick = cerrarModal;

    modal.appendChild(imagen);
    modal.appendChild(cerrarModalBtn);
    

    //agregar al HTML

    const body= document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.appendChild(modal);
}
//si recive una función como parámetro no se le ponen los paréntesis
function cerrarModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('fade-out');
    
    setTimeout(() => {
        modal.remove();
        const body= document.querySelector('body');
        body.classList.remove('overflow-hidden');
    }, 500);

}
function resaltarEnlace() {
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')
 
        let actual = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if(window.scrollY >= (sectionTop - sectionHeight / 3 ) ) {
                actual = section.id
            }
        })
 
        navLinks.forEach(link => {
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual) {
                link.classList.add('active')
            }
        })
    })
}


function scrollNav() {
    const links = document.querySelectorAll('.navegacion-principal a');
    links.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        })
    })
}
