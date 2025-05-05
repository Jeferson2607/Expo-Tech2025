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
    idiomaActual.getElementsByTagName('img')[0].src = `../ImagenesIdiomas/${idioma}.png`;
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

        texto1.innerHTML= 'Diseño Gráfico';
        texto2.innerHTML= 'Diseño Gráfico';
        texto3.innerHTML= 'Química/Ciencias Ambientales​';
        texto4.innerHTML= 'Ciberseguridad/Tecnologías de la Información​';

        subtexto1.innerHTML= 'Estudiante de último año en Colegio Técnico Don Bosco. Co-diseñó la línea gráfica oficial de Expotech 2024 (logo, carteles y elementos visuales del evento),contribuyendo a la identidad visual de la feria de ingeniería y tecnología.';
        subtexto2.innerHTML= 'Compañero de Vargas Alemán en duodécimo año de colegio. Colaboró en el diseño de materiales gráficos para Expotech 2024 , creando afiches informativos y diseños promocionales que ilustran los proyectos presentados en la feria.';
        subtexto3.innerHTML= 'Estudiante universitaria (UCR). Presentó un proyecto de bloqueador solar natural elaborado a partir de la broza del café (residuo del proceso del café), aprovechando desechos agrícolas para producir un filtro UV ecológico';
        subtexto4.innerHTML= 'Estudiante universitario (TEC). Desarrolló una herramienta de análisis de redes para detectar vulnerabilidades en sistemas informáticos. Este proyecto de ciberseguridad en Expotech 2024 buscó reforzar la protección de datos y educación en seguridad digital para usuarios finales.';

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

        texto1.innerHTML = 'Graphic Design';
        texto2.innerHTML = 'Graphic Design';
        texto3.innerHTML = 'Chemistry/Environmental Sciences';
        texto4.innerHTML = 'Cybersecurity/Information Technologies';

        subtexto1.innerHTML = 'Senior student at Don Bosco Technical High School. Co-designed the official graphic line of Expotech 2024 (logo, posters, and visual elements of the event), contributing to the visual identity of the engineering and technology fair.';
        subtexto2.innerHTML = 'Classmate of Vargas Alemán in twelfth grade. Collaborated in designing graphic materials for Expotech 2024, creating informational posters and promotional designs illustrating the projects presented at the fair.';
        subtexto3.innerHTML = 'University student (UCR). Presented a natural sunscreen project made from coffee pulp (a by-product of the coffee process), using agricultural waste to produce an eco-friendly UV filter.';
        subtexto4.innerHTML = 'University student (TEC). Developed a network analysis tool to detect vulnerabilities in IT systems. This cybersecurity project at Expotech 2024 aimed to enhance data protection and promote digital security education for end users.';

       
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
        pregunta4.textContent='Carlos Antonio Valverde Montoya';

        texto1.textContent = 'Design Graphique';
        texto2.textContent = 'Design Graphique';
        texto3.textContent = 'Chimie/Sciences de l’Environnement';
        texto4.textContent = 'Cybersécurité/Technologies de l’Information';

        subtexto1.textContent = 'Étudiant en dernière année au Collège Technique Don Bosco. A co-conçu la ligne graphique officielle d’Expotech 2024 (logo, affiches et éléments visuels de l’événement), contribuant à l’identité visuelle de la foire d’ingénierie et de technologie.';
        subtexto2.textContent = 'Camarade de classe de Vargas Alemán en terminale. A collaboré à la conception de supports graphiques pour Expotech 2024, en créant des affiches informatives et des visuels promotionnels illustrant les projets présentés à la foire.';
        subtexto3.textContent = 'Étudiante universitaire (UCR). A présenté un projet d’écran solaire naturel fabriqué à partir de la pulpe de café (résidu du processus de production du café), en valorisant les déchets agricoles pour produire un filtre UV écologique.';
        subtexto4.textContent = 'Étudiant universitaire (TEC). A développé un outil d’analyse de réseau pour détecter les vulnérabilités dans les systèmes informatiques. Ce projet de cybersécurité présenté à Expotech 2024 visait à renforcer la protection des données et à promouvoir l’éducation à la sécurité numérique pour les utilisateurs finaux.';

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

  
  