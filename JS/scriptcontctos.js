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

const pregunta1 =document.querySelector('#pregunta1-info');
const pregunta2 =document.querySelector('#pregunta2-info');
const pregunta4 =document.getElementById('pregunta4-info');
const pregunta3 =document.querySelector('#pregunta3-info');


idiomaActual.addEventListener('click',()=>{
  listaIdiomas.classList.toggle('toggle');
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion)=>{
  opcion.addEventListener('click',()=>{
      const idioma = opcion.getElementsByTagName('span')[0].textContent.toLowerCase();
      establecerIdioma(idioma);
  });
})

function establecerIdioma(idioma) {
  idiomaActual.getElementsByTagName('img')[0].src = `/ImagenesIdiomas/${idioma}.png`;
  switch (idioma) {
    case 'español':
        titulo.textContent= 'Contacto';

        subtitulo1.textContent= 'Inicio';
        subtitulo2.textContent=  'Actividades';
        subtitulo3.textContent= 'Contacto';
        subtitulo4.textContent=  'Expositores';
        subtitulo5.textContent= 'Preguntas Frecuentes';
        subtitulo6.textContent= 'Registro';

        pregunta1.innerHTML= ' <span class="heading">Deja tu mensaje</span>';
        pregunta2.innerHTML=' <input placeholder="Nombre" type="text" class="input"> ';
        pregunta4.textContent='Cuenta Regresiva para el inicio del evento';
        pregunta3.textContent='INSCRIBETE YA';

       break;

       case 'ingles':
        titulo.textContent = 'Contact';

        subtitulo1.textContent = 'Home';
        subtitulo2.textContent = 'Activities';
        subtitulo3.textContent = 'Contact';
        subtitulo4.textContent = 'Exhibitors';
        subtitulo5.textContent = 'Frequently Asked Questions';
        subtitulo6.textContent = 'Registration';
  
        pregunta1.textContent = 'Welcome to ExpoTech 2025!';
        pregunta2.textContent = 'ExpoTech 2025 is the most anticipated annual event for students in technical and professional education, where innovative projects and professional practices are showcased in various areas of technology and engineering. This year, ExpoTech brings together young talents, companies, and professionals from around the world, offering a unique platform to showcase skills, share knowledge, and create growth opportunities.';
        pregunta4.textContent = 'Countdown to the start of the event';
        pregunta3.textContent = 'REGISTER NOW';
       
        break;
  
      case 'frances':
        titulo.textContent = 'Contact';

        subtitulo1.textContent = 'Accueil';
        subtitulo2.textContent = 'Activités';
        subtitulo3.textContent = 'Contact';
        subtitulo4.textContent = 'Exposants';
        subtitulo5.textContent = 'Questions Fréquemment Posées';
        subtitulo6.textContent = 'Inscription';
  
        pregunta1.innerHTML= ' <span class="heading">Deja tu mens</span>';
        pregunta2.innerHTML = '  <input placeholder="Name" type="text" class="input" id="pregunta2-info">';
        pregunta4.textContent = 'Compte à rebours avant le début de l événement';
        pregunta3.textContent = 'INSCRIVEZ-VOUS MAINTENANT';
        break;

  
    default:
        break;
   }
}
 

document.addEventListener('DOMContentLoaded', () => {
  switch(navigator.language){
      case 'en-US':
          establecerIdioma('ingles')
        break;

        default:
          break;
  }
});

document.querySelector('.card1').addEventListener('click', function() {
    window.open('https://www.instagram.com/', '_blank'); // '_blank' para abrir en nueva pestaña
  });
  
  // Facebook
  document.querySelector('.card2').addEventListener('click', function() {
    window.open('https://www.facebook.com/', '_blank');
  });
  
  // WhatsApp
  document.querySelector('.card3').addEventListener('click', function() {
    window.open('https://wa.me/1234567890', '_blank'); // Aquí pon el número o el enlace de WhatsApp
  });
  
  // Gmail
  document.querySelector('.card4').addEventListener('click', function() {
    window.open('https://mail.google.com/', '_blank');
  });