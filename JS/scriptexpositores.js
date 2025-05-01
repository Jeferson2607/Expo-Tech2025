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
const pregunta3 =document.getElementById('pregunta3-info');
const pregunta4 =document.getElementById('pregunta4-info');

const texto1 =document.getElementById('texto1-info');
const texto2 =document.getElementById('texto2-info');
const texto3 =document.getElementById('texto3-info');
const texto4 =document.getElementById('texto4-info');

const subtexto1 =document.getElementById('subtexto1-info');
const subtexto2 =document.getElementById('subtexto2-info');
const subtexto3 =document.getElementById('subtexto3-info');
const subtexto4 =document.getElementById('subtexto4-info');

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
        titulo.textContent= 'Expositores';

        subtitulo1.textContent= 'Inicio';
        subtitulo2.textContent=  'Actividades';
        subtitulo3.textContent= 'Contacto';
        subtitulo4.textContent=  'Expositores';
        subtitulo5.textContent= 'Preguntas Frecuentes';
        subtitulo6.textContent= 'Registro';

        pregunta1.textContent= 'Joel Andrés Vargas Alemán';
        pregunta2.textContent='Arath Zumbado Gaitán';
        pregunta3.textContent='María Fernanda Espinoza López';
        pregunta4.textContent='Carlos Antonio Valverde Montoya';

       break;

       case 'ingles':
        titulo.textContent = 'Exhibitors';

        subtitulo1.textContent = 'Home';
        subtitulo2.textContent = 'Activities';
        subtitulo3.textContent = 'Contact';
        subtitulo4.textContent = 'Exhibitors';
        subtitulo5.textContent = 'Frequently Asked Questions';
        subtitulo6.textContent = 'Registration';
  
        pregunta1.textContent= 'Joel Andrés Vargas Alemán';
        pregunta2.textContent='Arath Zumbado Gaitán';
        pregunta3.textContent='María Fernanda Espinoza López';
        pregunta4.textContent='Carlos Antonio Valverde Montoya';
       
        break;
  
      case 'frances':
        titulo.textContent = 'Exposants';

        subtitulo1.textContent = 'Accueil';
        subtitulo2.textContent = 'Activités';
        subtitulo3.textContent = 'Contact';
        subtitulo4.textContent = 'Exposants';
        subtitulo5.textContent = 'Questions Fréquemment Posées';
        subtitulo6.textContent = 'Inscription';
  
        pregunta1.textContent= 'Joel Andrés Vargas Alemán';
        pregunta2.textContent='Arath Zumbado Gaitán';
        pregunta3.textContent='María Fernanda Espinoza López';
        pregunta4.textContent='<div class="content">Carlos Antonio Valverde Montoya holo';
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

  
  