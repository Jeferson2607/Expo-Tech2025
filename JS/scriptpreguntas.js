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

const parrafo1 = document.getElementById('parrafo1-info');
const parrafo2 = document.getElementById('parrafo2-info');
const parrafo3 = document.getElementById('parrafo3-info');
const parrafo4 = document.getElementById('parrafo4-info');
const parrafo5 = document.getElementById('parrafo5-info');

const pregunta1 =document.getElementById('pregunta1-info');
const pregunta2 =document.getElementById('pregunta2-info');
const pregunta3 =document.getElementById('pregunta3-info');
const pregunta4 =document.getElementById('pregunta4-info');
const pregunta5 =document.getElementById('pregunta5-info');

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
        titulo.textContent= 'Preguntas Frecuentes';

        subtitulo1.textContent= 'Inicio';
        subtitulo2.textContent=  'Actividades';
        subtitulo3.textContent= 'Contacto';
        subtitulo4.textContent=  'Expositores';
        subtitulo5.textContent= 'Preguntas Frecuentes';
        subtitulo6.textContent= 'Registro';

        pregunta1.textContent= '¿Qué es una Expotécnica?';
        pregunta2.textContent='¿Cuál es su propósito?';
        pregunta3.textContent='¿Qué beneficios tiene participar en una Expotécnica?';
        pregunta4.textContent= '¿Qué tipo de proyectos se presentan?';
        pregunta5.textContent='¿Cómo me inscribo para participar?';

        parrafo1.textContent= 'Es un evento donde los estudiantes de educación técnica profesional exhiben sus proyectos y prácticas profesionales.';
        parrafo2.textContent='Fomentar el desarrollo de competencias técnicas, genéricas, lingüísticas y para el desarrollo humano, así como la innovación y las capacidades emprendedoras.';
        parrafo3.textContent='Permite a los estudiantes demostrar sus habilidades, aprender de otros, recibir retroalimentación constructiva y generar oportunidades profesionales. ';
        parrafo4.textContent= ' Se presentan proyectos relacionados con las áreas técnicas y tecnológicas que los estudiantes estudian, así como prácticas profesionales realizadas en empresas. ';
        parrafo5.textContent= 'Debes llenar un formulario de registro disponible en línea o con tu docente asesor. Algunos eventos piden una ficha técnica del proyecto y una breve descripción.';
       break;

       case 'ingles':
        titulo.textContent = 'Frequently Asked Questions';

        subtitulo1.textContent = 'Home';
        subtitulo2.textContent = 'Activities';
        subtitulo3.textContent = 'Contact';
        subtitulo4.textContent = 'Exhibitors';
        subtitulo5.textContent = 'Frequently Asked Questions';
        subtitulo6.textContent = 'Registration';
  
        pregunta1.textContent = 'What is an Expotécnica?';
        pregunta2.textContent = 'What is its purpose?';
        pregunta3.textContent = 'What are the benefits of participating in an Expotécnica?';
        pregunta4.textContent = 'What kind of projects are presented?';
        pregunta5.textContent = 'How do I register to participate?';
  
        parrafo1.textContent = 'It is an event where professional technical education students showcase their projects and professional practices.';
        parrafo2.textContent = 'To promote the development of technical, generic, linguistic, and human development skills, as well as innovation and entrepreneurial abilities.';
        parrafo3.textContent = 'It allows students to demonstrate their skills, learn from others, receive constructive feedback, and create professional opportunities.';
        parrafo4.textContent = 'Projects related to the technical and technological areas that students study are presented, as well as professional practices carried out in companies.';
        parrafo5.textContent = 'You must fill out a registration form available online or through your advising teacher. Some events require a technical sheet of the project and a brief description.';
        break;
  
      case 'frances':
        titulo.textContent = 'Questions Fréquemment Posées';

        subtitulo1.textContent = 'Accueil';
        subtitulo2.textContent = 'Activités';
        subtitulo3.textContent = 'Contact';
        subtitulo4.textContent = 'Exposants';
        subtitulo5.textContent = 'Questions Fréquemment Posées';
        subtitulo6.textContent = 'Inscription';
  
        pregunta1.textContent = 'Qu’est-ce qu’une Expotécnica ?';
        pregunta2.textContent = 'Quel est son objectif ?';
        pregunta3.textContent = 'Quels sont les avantages de participer à une Expotécnica ?';
        pregunta4.textContent = 'Quel type de projets sont présentés ?';
        pregunta5.textContent = 'Comment puis-je m’inscrire pour participer ?';
  
        parrafo1.textContent = 'C’est un événement où les étudiants de l’enseignement technique professionnel présentent leurs projets et pratiques professionnelles.';
        parrafo2.textContent = 'Favoriser le développement de compétences techniques, génériques, linguistiques et pour le développement humain, ainsi que l’innovation et les capacités entrepreneuriales.';
        parrafo3.textContent = 'Cela permet aux étudiants de démontrer leurs compétences, d’apprendre des autres, de recevoir des retours constructifs et de générer des opportunités professionnelles.';
        parrafo4.textContent = 'Des projets liés aux domaines techniques et technologiques étudiés par les étudiants sont présentés, ainsi que des pratiques professionnelles réalisées en entreprise.';
        parrafo5.textContent = 'Vous devez remplir un formulaire d’inscription disponible en ligne ou auprès de votre enseignant référent. Certains événements demandent une fiche technique du projet et une brève description.';
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