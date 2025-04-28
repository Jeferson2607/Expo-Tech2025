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
const pregunta4 =document.getElementById('pregunta4-info');
const pregunta3 =document.querySelector('#pregunta3-info');


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
        titulo.textContent= 'Inicio';

        subtitulo1.textContent= 'Inicio';
        subtitulo2.textContent=  'Actividades';
        subtitulo3.textContent= 'Contacto';
        subtitulo4.textContent=  'Expositores';
        subtitulo5.textContent= 'Preguntas Frecuentes';
        subtitulo6.textContent= 'Registro';

        pregunta1.textContent= '¡Bienvenidos a ExpoTech 2025!';
        pregunta2.textContent='ExpoTech 2025 es el evento anual más esperado para los estudiantes de educación técnica y profesional, donde se exhiben proyectos innovadores y prácticas profesionales en diversas áreas de la tecnología y la ingeniería. Este año, ExpoTech reúne a jóvenes talentos, empresas y profesionales de todo el mundo, ofreciendo una plataforma única para demostrar habilidades, compartir conocimientos y generar oportunidades de crecimiento.';
        pregunta4.textContent='Cuenta Regresiva para el inicio del evento';
        pregunta3.textContent='INSCRIBETE YA';

       break;

       case 'ingles':
        titulo.textContent = 'Home';

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
        titulo.textContent = 'Accueil';

        subtitulo1.textContent = 'Accueil';
        subtitulo2.textContent = 'Activités';
        subtitulo3.textContent = 'Contact';
        subtitulo4.textContent = 'Exposants';
        subtitulo5.textContent = 'Questions Fréquemment Posées';
        subtitulo6.textContent = 'Inscription';
  
        pregunta1.textContent = 'Bienvenue à ExpoTech 2025 !';
        pregunta2.textContent = 'ExpoTech 2025 est l événement annuel le plus attendu pour les étudiants en éducation technique et professionnelle, où des projets innovants et des pratiques professionnelles sont présentés dans divers domaines de la technologie et de l\'ingénierie. Cette année, ExpoTech réunit des jeunes talents, des entreprises et des professionnels du monde entier, offrant une plateforme unique pour démontrer des compétences, partager des connaissances et créer des opportunités de croissance.';
        pregunta4.textContent = 'Compte à rebours avant le début de l événement';
        pregunta3.textContent = 'INSCRIVEZ-VOUS MAINTENANT';
        break;

  
    default:
        break;
   }
}
 

document.addEventListener('DOMContentLoaded', () => {
    if (navigator.language.startsWith('es')) {
        establecerIdioma('español');
    } else if (navigator.language.startsWith('en')) {
        establecerIdioma('ingles');
    } else if (navigator.language.startsWith('fr')) {
        establecerIdioma('frances');
    }
});
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const diasElemento = document.getElementById('dias');
    const horasElemento = document.getElementById('horas');
    const minutosElemento = document.getElementById('minutos');
    const segundosElemento = document.getElementById('segundos');
  
    // 🎯 Fecha objetivo: 25 de diciembre de 2025, a la medianoche
    const fechaObjetivo = new Date('2025-12-25T00:00:00').getTime();
  
    function actualizarCuentaRegresiva() {
      const ahora = new Date().getTime();
      const diferencia = fechaObjetivo - ahora;
  
      if (diferencia <= 0) {
        clearInterval(intervalo);
        diasElemento.textContent = '00';
        horasElemento.textContent = '00';
        minutosElemento.textContent = '00';
        segundosElemento.textContent = '00';
        alert('🎉 ¡Inicio el evento!');
        return;
      }
  
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  
      diasElemento.textContent = dias.toString().padStart(2, '0');
      horasElemento.textContent = horas.toString().padStart(2, '0');
      minutosElemento.textContent = minutos.toString().padStart(2, '0');
      segundosElemento.textContent = segundos.toString().padStart(2, '0');
    }
  
    const intervalo = setInterval(actualizarCuentaRegresiva, 1000);
    actualizarCuentaRegresiva(); // Mostrar inmediatamente sin esperar 1s
  });
  