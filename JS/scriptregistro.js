const toggleButton = document.getElementById("toggleMode");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

const titulo = document.getElementById('titulo-info');
const subtitulo1 = document.querySelector('#subtitulo1-info a');
const subtitulo2 = document.querySelector('#subtitulo2-info a');
const subtitulo3 = document.querySelector('#subtitulo3-info a');
const subtitulo4 = document.querySelector('#subtitulo4-info a');
const subtitulo5 = document.querySelector('#subtitulo5-info a');
const subtitulo6 = document.querySelector('#subtitulo6-info a');

const pregunta1 =document.getElementById('pregunta1-info');
const pregunta2 =document.getElementById('pregunta2-info');
const pregunta3=document.getElementById('pregunta3-info');
const pregunta4 =document.getElementById('pregunta4-info');
const pregunta5 =document.getElementById('pregunta5-info');
const pregunta6 =document.getElementById('pregunta6-info');
const pregunta7 =document.getElementById('pregunta7-info');
const pregunta8 =document.getElementById('pregunta8-info');
const pregunta9 =document.getElementById('pregunta9-info');
const pregunta10 =document.querySelector('#pregunta10-info');


idiomaActual.addEventListener('click', ()=>{
    listaIdiomas.classList.toggle('toggle');
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion)=>{
    opcion.addEventListener('click', ()=>{
        const idioma = opcion.getElementsByTagName('span') [0].textContent.toLowerCase();
        establecerIdioma(idioma);
    });
})

function establecerIdioma(idioma){
    idiomaActual.getElementsByTagName('img')[0].src = `/ImagenesIdiomas/${idioma}.png`;
   switch (idioma){ 
    case 'español':
        titulo.textContent= 'Registro';

        subtitulo1.textContent= 'Inicio';
        subtitulo2.textContent=  'Actividades';
        subtitulo3.textContent= 'Contacto';
        subtitulo4.textContent=  'Expositores';
        subtitulo5.textContent= 'Preguntas Frecuentes';
        subtitulo6.textContent= 'Registro';

        pregunta1.textContent= 'Registro';
        pregunta2.textContent='Registro de Expotech 2025';
        pregunta3.textContent='Nombre';
        pregunta4.textContent='Apellido';
        pregunta5.textContent= 'Especificacion del Proyecto';
        pregunta6.textContent='Categoria';
        pregunta7.textContent='Email';
        pregunta8.textContent='Contraseña';
        pregunta9.textContent='Confirmar Contraseña';
        pregunta10.textContent='Registrarse';

       break;

       case 'ingles':
        titulo.textContent = 'Registration';

        subtitulo1.textContent = 'Home';
        subtitulo2.textContent = 'Activities';
        subtitulo3.textContent = 'Contact';
        subtitulo4.textContent = 'Exhibitors';
        subtitulo5.textContent = 'FAQ';
        subtitulo6.textContent = 'Registration';
    
        pregunta1.textContent = 'Registration';
        pregunta2.textContent = 'Expotech 2025 Registration';
        pregunta3.textContent = 'First Name';
        pregunta4.textContent = 'Last Name';
        pregunta5.textContent = 'Project Specification';
        pregunta6.textContent = 'Category';
        pregunta7.textContent = 'Email';
        pregunta8.textContent = 'Password';
        pregunta9.textContent = 'Confirm Password';
        pregunta10.textContent = 'Sign Up';
    break;
       
  
      case 'frances':
        titulo.textContent = 'Inscription';

        subtitulo1.textContent = 'Accueil';
        subtitulo2.textContent = 'Activités';
        subtitulo3.textContent = 'Contact';
        subtitulo4.textContent = 'Exposants';
        subtitulo5.textContent = 'FAQ';
        subtitulo6.textContent = 'Inscription';
    
        pregunta1.textContent = 'Inscription';
        pregunta2.textContent = 'Inscription à Expotech 2025';
        pregunta3.textContent = 'Prénom';
        pregunta4.textContent = 'Nom';
        pregunta5.textContent = 'Spécification du projet';
        pregunta6.textContent = 'Catégorie';
        pregunta7.textContent = 'Email';
        pregunta8.textContent = 'Mot de passe';
        pregunta9.textContent = 'Confirmer le mot de passe';
        pregunta10.textContent = 'S\'inscrire';
    break;

  
    default:
        break;
   }
}
 
document.addEventListener('DOMContentLoaded',()=>{
    switch (navigator.language) {
        case 'es-US':
            establecerIdioma('español')
            break;
        
        default:
            break;
    }
});

document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();

  // Validación básica
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const carrera = document.getElementById('carrera').value.trim();

  if (nombre === '' || correo === '' || carrera === '') {
    alert('Por favor, completa todos los campos obligatorios.');
    return;
  }

  // Mostrar mensaje de confirmación
  document.getElementById('confirmacion').style.display = 'block';

  // Opcional: Resetear formulario
  this.reset();
});
