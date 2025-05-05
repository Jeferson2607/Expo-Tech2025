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

const pregunta1 = document.querySelector('#pregunta1-info');
const pregunta2 = document.querySelector('#pregunta2-info');
const pregunta3 = document.querySelector('#pregunta3-info');
const pregunta4 = document.querySelector('#pregunta4-info');
const pregunta5 = document.querySelector('#pregunta5-info');
const pregunta6 = document.querySelector('#reset-btn');
const pregunta7= document.getElementById('pregunta7-info');
const pregunta8 = document.getElementById('pregunta8-info');


idiomaActual.addEventListener('click', () => {
  listaIdiomas.classList.toggle('toggle');
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion) => {
  opcion.addEventListener('click', () => {
    const idioma = opcion.getElementsByTagName('span')[0].textContent.toLowerCase();
    establecerIdioma(idioma);
  });
})

function establecerIdioma(idioma) {
  idiomaActual.getElementsByTagName('img')[0].src = `../ImagenesIdiomas/${idioma}.png`;
  switch (idioma) {
    case 'español':
      titulo.textContent = 'Contacto';

      subtitulo1.textContent = 'Inicio';
      subtitulo2.textContent = 'Actividades';
      subtitulo3.textContent = 'Contacto';
      subtitulo4.textContent = 'Expositores';
      subtitulo5.textContent = 'Preguntas Frecuentes';
      subtitulo6.textContent = 'Registro';

      pregunta1.innerHTML = ' <span class="heading">Deja tu mensaje</span>';
      pregunta2.innerHTML = ' <input placeholder="Nombre" type="text" class="input"> ';
      pregunta2.setAttribute(
        "placeholder", "Nombre"
      );
      pregunta3.innerHTML = ' <input placeholder="Correo con el que te registraste" type="text" class="input"> ';
      pregunta3.setAttribute(
        "placeholder", "Correo con el que te registraste"
      );

      pregunta4.setAttribute(
        "placeholder", "Mensaje"
      );
      pregunta5.innerHTML='Enviar';
      pregunta6.innerHTML = 'Borrar';
      pregunta7.textContent=' Direccion del evento';
      pregunta8.textContent= 'Contactanos';


      break;

    case 'ingles':
      titulo.textContent = 'Contact';

      subtitulo1.textContent = 'Home';
      subtitulo2.textContent = 'Activities';
      subtitulo3.textContent = 'Contact';
      subtitulo4.textContent = 'Exhibitors';
      subtitulo5.textContent = 'Frequently Asked Questions';
      subtitulo6.textContent = 'Registration';

      pregunta1.innerHTML = ' <span class="heading">Leave your message</span>';
      pregunta2.innerHTML = ' <input placeholder="Nombre" type="text" class="input"> ';
      pregunta2.setAttribute(
        "placeholder", "Name"
      );
      pregunta3.innerHTML = '<input placeholder="Correo con el que te registraste" id="mail" type="email" class="input" > ';
      pregunta3.setAttribute(
        "placeholder", "Email address you registered with"
      );
      pregunta4.setAttribute(
        "placeholder", "Message"
      );
      pregunta5.innerHTML='Submit';
      pregunta6.innerHTML = 'Delete';
      pregunta7.innerHTML=' <img src="/ImagenesGenerales/mapas-y-banderas.png" alt="">Event Address';
      pregunta8.textContent= 'Contact Us';

      
      break;

    case 'frances':
      titulo.textContent = 'Contact';

      subtitulo1.textContent = 'Accueil';
      subtitulo2.textContent = 'Activités';
      subtitulo3.textContent = 'Contact';
      subtitulo4.textContent = 'Exposants';
      subtitulo5.textContent = 'Questions Fréquemment Posées';
      subtitulo6.textContent = 'Inscription';

      pregunta1.innerHTML = ' <span class="heading">laissez votre message</span>';
      pregunta2.innerHTML = '<input placeholder="Nombre" type="text" class="input"> ';
      pregunta2.setAttribute(
        "placeholder", "Nom"
      );

      pregunta3.innerHTML = '<input placeholder="Correo con el que te registraste" id="mail" type="email" class="input" > ';
      pregunta3.setAttribute(
        "placeholder", "Adresse e-mail avec laquelle vous vous êtes inscrit"
      );

      pregunta4.setAttribute(
        "placeholder", "laissez votre message"
      );
      pregunta5.innerHTML='Envoyer';
      pregunta6.innerHTML = 'Supprimer';
      pregunta7.innerHTML=' <img src="/ImagenesGenerales/mapas-y-banderas.png" alt=""> Adresse de l événement';
      pregunta8.textContent= 'Contactez-nous';

      
      break;


    default:
      break;
  }
}


document.addEventListener('DOMContentLoaded', () => {
  switch (navigator.language) {
    case 'en-US':
      establecerIdioma('ingles')
      break;

    default:
      break;
  }
});

document.querySelector('.card1').addEventListener('click', function () {
  window.open('https://www.instagram.com/', '_blank'); // '_blank' para abrir en nueva pestaña
});

// Facebook
document.querySelector('.card2').addEventListener('click', function () {
  window.open('https://www.facebook.com/', '_blank');
});

// WhatsApp
document.querySelector('.card3').addEventListener('click', function () {
  window.open('https://wa.me/1234567890', '_blank'); // Aquí pon el número o el enlace de WhatsApp
});

// Gmail
document.querySelector('.card4').addEventListener('click', function () {
  window.open('https://mail.google.com/', '_blank');
});