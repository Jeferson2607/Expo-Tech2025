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
const pregunta3=document.querySelector('#pregunta3-info');
const pregunta4 =document.querySelector('#pregunta4-info');
const pregunta5 =document.querySelector('#pregunta5-info');
const pregunta6 =document.querySelector('#pregunta6-info');
const  mensajeConfirmacion  =document.getElementById('confirmacion');

const texto1 =document.querySelector('#texto1-info ');
const texto2 =document.querySelector('#texto2-info ');
const texto3 =document.querySelector('#texto3-info ');
const texto4 =document.querySelector('#texto4-info ');
const texto5 =document.querySelector('#texto5-info ');
const texto6 =document.querySelector('#texto6-info ');
const texto7 =document.querySelector('#texto7-info ');
const texto8 =document.querySelector('#texto8-info ');
const texto9 =document.querySelector('#texto9-info ');
const texto10 =document.querySelector('#texto10-info ');
const texto11 =document.querySelector('#texto11-info ');



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
    idiomaActual.getElementsByTagName('img')[0].src = `../ImagenesIdiomas/${idioma}.png`;
   switch (idioma){ 
    case 'español':
        titulo.textContent= 'Registro';

        subtitulo1.textContent= 'Inicio';
        subtitulo2.textContent=  'Actividades';
        subtitulo3.textContent= 'Contacto';
        subtitulo4.textContent=  'Expositores';
        subtitulo5.textContent= 'Preguntas Frecuentes';
        subtitulo6.textContent= 'Registro';

        pregunta1.innerHTML= 'Formulario de Inscripción';
        pregunta2.innerHTML='Nombre completo:  <input type="text" id="nombre" required>';
        pregunta3.innerHTML='Correo electrónico: <input type="email" id="correo" required>';
        pregunta4.innerHTML='Carrera o profesión: <input type="text" id="carrera" required>';
        pregunta5.innerHTML= 'Intereses:';
        pregunta6.innerHTML='Enviar';
        mensajeConfirmacion .textContent='   ¡Inscripción exitosa! ';

        texto1.innerHTML= ' <input type="checkbox" name="intereses" value="Robótica"> Robótica';
        texto2.innerHTML=' <input type="checkbox" name="intereses" value="IA"> Inteligencia Artificial';
        texto3.innerHTML=' <input type="checkbox" name="intereses" value="Apps"> Desarrollo de Apps';
        texto4.innerHTML=' <input type="checkbox" name="intereses" value="Videojuegos"> Videojuegos';
        texto5.innerHTML= '<input type="checkbox" name="intereses" value="Ciberseguridad"> Ciberseguridad';
        texto6.innerHTML='<input type="checkbox" name="intereses" value="Blockchain"> Blockchain';
        texto7.innerHTML= '<input type="checkbox" name="intereses" value="Big Data"> Big Datan';
        texto8.innerHTML='<input type="checkbox" name="intereses" value="Realidad Virtual"> Realidad Virtual';
        texto9.innerHTML='<input type="checkbox" name="intereses" value="Animación 3D"> Animación 3D';
        texto10.innerHTML='<input type="checkbox" name="intereses" value="Desarrollo Web"> Desarrollo Web';
        texto11.innerHTML= '<input type="checkbox" name="intereses" value="Diseño Gráfico"> Diseño Gráfico';
       
 

       break;

       case 'ingles':
        titulo.textContent = 'Registration';

        subtitulo1.textContent = 'Home';
        subtitulo2.textContent = 'Activities';
        subtitulo3.textContent = 'Contact';
        subtitulo4.textContent = 'Exhibitors';
        subtitulo5.textContent = 'FAQ';
        subtitulo6.textContent = 'Registration';
    
        pregunta1.innerHTML = 'Registration Form';
        pregunta2.innerHTML = 'Full Name:  <input type="text" id="nombre" required>';
        pregunta3.innerHTML = 'Email Address: <input type="email" id="correo" required>';
        pregunta4.innerHTML = 'Career or Profession: <input type="text" id="carrera" required>';
        pregunta5.innerHTML = 'Interests:';
        pregunta6.innerHTML = 'Submit';
        mensajeConfirmacion .textContent = '  Registration Successful!';
        
        texto1.innerHTML = '<input type="checkbox" name="intereses" value="Robótica"> Robotics';
        texto2.innerHTML = '<input type="checkbox" name="intereses" value="IA"> Artificial Intelligence';
        texto3.innerHTML = '<input type="checkbox" name="intereses" value="Apps"> App Development';
        texto4.innerHTML = '<input type="checkbox" name="intereses" value="Videojuegos"> Video Games';
        texto5.innerHTML = '<input type="checkbox" name="intereses" value="Ciberseguridad"> Cybersecurity';
        texto6.innerHTML = '<input type="checkbox" name="intereses" value="Blockchain"> Blockchain';
        texto7.innerHTML = '<input type="checkbox" name="intereses" value="Big Data"> Big Data';
        texto8.innerHTML = '<input type="checkbox" name="intereses" value="Realidad Virtual"> Virtual Reality';
        texto9.innerHTML = '<input type="checkbox" name="intereses" value="Animación 3D"> 3D Animation';
        texto10.innerHTML = '<input type="checkbox" name="intereses" value="Desarrollo Web"> Web Development';
        texto11.innerHTML = '<input type="checkbox" name="intereses" value="Diseño Gráfico"> Graphic Design';

    break;
       
  
      case 'frances':
        titulo.textContent = 'Inscription';

        subtitulo1.textContent = 'Accueil';
        subtitulo2.textContent = 'Activités';
        subtitulo3.textContent = 'Contact';
        subtitulo4.textContent = 'Exposants';
        subtitulo5.textContent = 'FAQ';
        subtitulo6.textContent = 'Inscription';
    
        pregunta1.innerHTML = 'Formulaire d\'inscription';
        pregunta2.innerHTML = 'Nom complet : <input type="text" id="nombre" required>';
        pregunta3.innerHTML = 'Adresse e-mail : <input type="email" id="correo" required>';
        pregunta4.innerHTML = 'Métier ou profession : <input type="text" id="carrera" required>';
        pregunta5.innerHTML = 'Centres d\'intérêt :';
        pregunta6.innerHTML = 'Envoyer';
        mensajeConfirmacion .textContent = '  Inscription réussie ! ';
        
        texto1.innerHTML = '<input type="checkbox" name="intereses" value="Robótica"> Robotique';
        texto2.innerHTML = '<input type="checkbox" name="intereses" value="IA"> Intelligence Artificielle';
        texto3.innerHTML = '<input type="checkbox" name="intereses" value="Apps"> Développement d Applications';
        texto4.innerHTML = '<input type="checkbox" name="intereses" value="Videojuegos"> Jeux Vidéo';
        texto5.innerHTML = '<input type="checkbox" name="intereses" value="Ciberseguridad"> Cybersécurité';
        texto6.innerHTML = '<input type="checkbox" name="intereses" value="Blockchain"> Blockchain';
        texto7.innerHTML = '<input type="checkbox" name="intereses" value="Big Data"> Big Data';
        texto8.innerHTML = '<input type="checkbox" name="intereses" value="Realidad Virtual"> Réalité Virtuelle';
        texto9.innerHTML = '<input type="checkbox" name="intereses" value="Animación 3D"> Animation 3D';
        texto10.innerHTML = '<input type="checkbox" name="intereses" value="Desarrollo Web"> Développement Web';
        texto11.innerHTML = '<input type="checkbox" name="intereses" value="Diseño Gráfico"> Conception Graphique';

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
