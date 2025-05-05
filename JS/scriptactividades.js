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

const texto1 = document.getElementById('texto1-info');
const texto2 = document.getElementById('texto2-info');
const texto3 = document.getElementById('texto3-info');
const texto4 = document.getElementById('texto4-info');
const texto5 = document.getElementById('texto5-info');
const texto6 = document.getElementById('texto6-info');
const texto7 = document.getElementById('texto7-info');
const texto8 = document.getElementById('texto8-info');
const texto9 = document.getElementById('texto9-info');
const texto10 = document.getElementById('texto10-info');
const texto11 = document.getElementById('texto11-info');
const texto12 = document.getElementById('texto12-info');
const texto13 = document.getElementById('texto13-info');
const texto14 = document.getElementById('texto14-info');
const texto15 = document.getElementById('texto15-info');
const texto16 = document.getElementById('texto16-info');
const texto17 = document.getElementById('texto17-info');

const pregunta1 =document.getElementById('pregunta1-info');
const pregunta2 =document.getElementById('pregunta2-info');
const pregunta3 =document.getElementById('pregunta3-info');
const pregunta4 =document.getElementById('pregunta4-info');
const pregunta5 =document.getElementById('pregunta5-info');
const pregunta6 =document.getElementById('pregunta6-info');
const pregunta7 =document.getElementById('pregunta7-info');
const pregunta8 =document.getElementById('pregunta8-info');
const pregunta9 =document.getElementById('pregunta9-info');
const pregunta10 =document.getElementById('pregunta10-info');
const pregunta11 =document.getElementById('pregunta11-info');
const pregunta12 =document.getElementById('pregunta12-info');
const pregunta13 =document.getElementById('pregunta12-info');

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
    idiomaActual.getElementsByTagName('img')[0].src = `../ImagenesIdiomas/${idioma}.png`;
    switch (idioma) {
    case 'español':
        titulo.textContent= 'Actividades';

        subtitulo1.textContent= 'Inicio';
        subtitulo2.textContent=  'Actividades';
        subtitulo3.textContent= 'Contacto';
        subtitulo4.textContent=  'Expositores';
        subtitulo5.textContent= 'Preguntas Frecuentes';
        subtitulo6.textContent= 'Registro';

        pregunta1.innerHTML= '<b>10:00 AM | Ceremonia de Inauguración:</b>  <img src="/ImagenesGenerales/ceremonia-de-apertura.png" alt="">';
        pregunta2.innerHTML='<b>11:00 AM | Conferencia Magistral: “El Futuro de la Inteligencia Artificial”</b> <img src="/ImagenesGenerales/conferencia-en-linea.png" alt=""> ';
        pregunta3.innerHTML='<b>1:00 PM | Taller: Robótica para Principiantes</b> <img src="/ImagenesGenerales/brazo-robotico.png" alt=""> ';
        pregunta4.innerHTML= '<b>3:00 PM | Zona de Startups</b> <img src="/ImagenesGenerales/exhibicion.png" alt="">';
        pregunta5.innerHTML='<b>5:00 PM | Show de Drones</b> <img src="/ImagenesGenerales/zumbido.png" alt="">';
        pregunta6.innerHTML= '<b>9:00 AM | Panel: “Ciberseguridad en la Nueva Era”</b> <img src="/ImagenesGenerales/seguridad-tecnologica.png" alt="">';
        pregunta7.innerHTML='<b>11:00 AM | Hackathon 24 horas</b>  <img src="/ImagenesGenerales/desarrollador-de-software.png" alt=""> ';
        pregunta8.innerHTML='<b>2:00 PM | Taller: Impresión 3D Avanzada</b> <img src="/ImagenesGenerales/impresora-3d.png" alt=""> ';
        pregunta9.innerHTML= '<b>4:00 PM | Demostraciones de Realidad Aumentada</b> <img src="/ImagenesGenerales/lentes.png" alt="">';
        pregunta10.innerHTML='<b>10:00 AM | Concurso: Battle of the Bots</b>  <img src="/ImagenesGenerales/robots-y-humanos.png" alt="">';
        pregunta11.innerHTML= '<b>12:00 PM | Networking Brunch</b> <img src="/ImagenesGenerales/profesor.png" alt=""> ';
        pregunta12.innerHTML='<b>2:00 PM | Charla: “Tecnología Sostenible y Futuro Verde</b> <img src="/ImagenesGenerales/conferencia-en-linea.png" alt="">';
        pregunta13.innerHTML='<b>4:00 PM | Premiación del Hackathon y Clausura</b> <img src="/ImagenesGenerales/premio.png" alt="">';

        texto1.textContent= 'Apertura oficial con invitados especiales y corte de listón.';
        texto2.textContent= 'Ponente: Dra. Sofía Méndez, CEO de NeuraTech.';
        texto3.textContent= 'Crea tu primer robot funcional. Cupo limitado.';
        texto4.textContent= 'Exhibición de proyectos innovadores de jóvenes emprendedores.';
        texto5.textContent= 'Coreografía aérea con luces y música en el patio central.';
        texto6.textContent= 'Expertos de compañías líderes debaten retos y soluciones.';
        texto7.textContent= 'Comienza la competencia de desarrollo de software y apps.';
        texto8.textContent= 'Aprende técnicas profesionales de modelado y prototipado.';
        texto9.textContent= 'Vive experiencias inmersivas con las últimas tecnologías AR/VR.';
        texto10.textContent= 'Competencia de robots autónomos. ¡Apoya a tu favorito!'; 
        texto11.textContent= 'Espacio de conexión para profesionales, estudiantes e inversionistas.';
        texto12.textContent= 'Cómo la tecnología puede cambiar el medio ambiente.';
        texto13.textContent= 'Entrega de premios y cierre oficial de Expotech 2025.';
        texto14.textContent= 'Zona de videojuegos y simuladores VR <img src="/ImagenesGenerales/jugando-videojuegos.png" alt="">';
        texto15.innerHTML= 'Área de realidad aumentada <img src="/ImagenesGenerales/lentes.png" alt="">';
        texto16.innerHTML= 'Stands interactivos de universidades y empresas tecnológicas  <img src="/ImagenesGenerales/graduacion.png" alt="">';
        texto17.innerHTML= 'Food trucks tecnológicos: ¡Prueba helados impresos en 3D! <img src="/ImagenesGenerales/food-truck.png" alt="">';

        parrafo1.textContent= 'Calendario de Actividades';
        parrafo2.textContent='Otras Actividades Permanentes';
        parrafo3.textContent='Día 1 – 12 de junio 2025 ';
        parrafo4.textContent= 'Día 2 – 13 de junio 2025 ';
        parrafo5.textContent= 'Día 3 – 14 de junio 2025';
       break;

       case 'ingles':
        titulo.textContent = 'Activities';
    
        subtitulo1.textContent = 'Home';
        subtitulo2.textContent = 'Activities';
        subtitulo3.textContent = 'Contact';
        subtitulo4.textContent = 'Exhibitors';
        subtitulo5.textContent = 'FAQ';
        subtitulo6.textContent = 'Registration';
    
        pregunta1.innerHTML= '<b>10:00 AM | Opening Ceremony:</b>  <img src="/ImagenesGenerales/ceremonia-de-apertura.png" alt="">';
        pregunta2.innerHTML= '<b>11:00 AM | Keynote: “The Future of Artificial Intelligence”</b> <img src="/ImagenesGenerales/conferencia-en-linea.png" alt="">';
        pregunta3.innerHTML= '<b>1:00 PM | Workshop: Robotics for Beginners</b> <img src="/ImagenesGenerales/brazo-robotico.png" alt="">';
        pregunta4.innerHTML= '<b>3:00 PM | Startup Zone</b> <img src="/ImagenesGenerales/exhibicion.png" alt="">';
        pregunta5.innerHTML= '<b>5:00 PM | Drone Show</b> <img src="/ImagenesGenerales/zumbido.png" alt="">';
        pregunta6.innerHTML= '<b>9:00 AM | Panel: “Cybersecurity in the New Era”</b> <img src="/ImagenesGenerales/seguridad-tecnologica.png" alt="">';
        pregunta7.innerHTML= '<b>11:00 AM | 24-Hour Hackathon</b>  <img src="/ImagenesGenerales/desarrollador-de-software.png" alt="">';
        pregunta8.innerHTML= '<b>2:00 PM | Workshop: Advanced 3D Printing</b> <img src="/ImagenesGenerales/impresora-3d.png" alt="">';
        pregunta9.innerHTML= '<b>4:00 PM | Augmented Reality Demonstrations</b> <img src="/ImagenesGenerales/lentes.png" alt="">';
        pregunta10.innerHTML= '<b>10:00 AM | Contest: Battle of the Bots</b>  <img src="/ImagenesGenerales/robots-y-humanos.png" alt="">';
        pregunta11.innerHTML= '<b>12:00 PM | Networking Brunch</b> <img src="/ImagenesGenerales/profesor.png" alt="">';
        pregunta12.innerHTML= '<b>2:00 PM | Talk: “Sustainable Technology and a Green Future”</b> <img src="/ImagenesGenerales/conferencia-en-linea.png" alt="">';
        pregunta13.innerHTML= '<b>4:00 PM | Hackathon Awards and Closing Ceremony</b> <img src="/ImagenesGenerales/premio.png" alt="">';
        
    
        texto1.textContent = 'Official opening with special guests and ribbon cutting.';
        texto2.textContent = 'Speaker: Dr. Sofia Méndez, CEO of NeuraTech.';
        texto3.textContent = 'Create your first functional robot. Limited seats.';
        texto4.textContent = 'Exhibition of innovative projects by young entrepreneurs.';
        texto5.textContent = 'Aerial choreography with lights and music at the central courtyard.';
        texto6.textContent = 'Experts from leading companies debate challenges and solutions.';
        texto7.textContent = 'The software and app development competition begins.';
        texto8.textContent = 'Learn professional modeling and prototyping techniques.';
        texto9.textContent = 'Experience immersive AR/VR technologies.';
        texto10.textContent = 'Autonomous robot competition. Support your favorite!';
        texto11.textContent = 'Networking space for professionals, students, and investors.';
        texto12.textContent = 'How technology can impact the environment.';
        texto13.textContent = 'Award ceremony and official closing of Expotech 2025.';
        texto14.innerHTML = 'Video games and VR simulator zone <img src="/ImagenesGenerales/jugando-videojuegos.png" alt="">';
        texto15.innerHTML = 'Augmented Reality Area <img src="/ImagenesGenerales/lentes.png" alt="">';
        texto16.innerHTML = 'Interactive stands from universities and tech companies  <img src="/ImagenesGenerales/graduacion.png" alt="">';
        texto17.innerHTML = 'Tech food trucks: Try 3D printed ice cream! <img src="/ImagenesGenerales/food-truck.png" alt="">';
    
        parrafo1.textContent = 'Activity Schedule';
        parrafo2.textContent = 'Other Permanent Activities';
        parrafo3.textContent = 'Day 1 – June 12, 2025';
        parrafo4.textContent = 'Day 2 – June 13, 2025';
        parrafo5.textContent = 'Day 3 – June 14, 2025';
    break;
    
  
    case 'frances':
        titulo.textContent = 'Activités';
    
        subtitulo1.textContent = 'Accueil';
        subtitulo2.textContent = 'Activités';
        subtitulo3.textContent = 'Contact';
        subtitulo4.textContent = 'Exposants';
        subtitulo5.textContent = 'FAQ';
        subtitulo6.textContent = 'Inscription';
    
        pregunta1.innerHTML= '<b>10:00 AM | Cérémonie d\'ouverture :</b>  <img src="/ImagenesGenerales/ceremonia-de-apertura.png" alt="">';
pregunta2.innerHTML= '<b>11:00 AM | Conférence principale : “L\'avenir de l\'intelligence artificielle”</b> <img src="/ImagenesGenerales/conferencia-en-linea.png" alt="">';
pregunta3.innerHTML= '<b>1:00 PM | Atelier : Robotique pour débutants</b> <img src="/ImagenesGenerales/brazo-robotico.png" alt="">';
pregunta4.innerHTML= '<b>3:00 PM | Zone des startups</b> <img src="/ImagenesGenerales/exhibicion.png" alt="">';
pregunta5.innerHTML= '<b>5:00 PM | Spectacle de drones</b> <img src="/ImagenesGenerales/zumbido.png" alt="">';
pregunta6.innerHTML= '<b>9:00 AM | Panel : “Cybersécurité dans la nouvelle ère”</b> <img src="/ImagenesGenerales/seguridad-tecnologica.png" alt="">';
pregunta7.innerHTML= '<b>11:00 AM | Hackathon de 24 heures</b>  <img src="/ImagenesGenerales/desarrollador-de-software.png" alt="">';
pregunta8.innerHTML= '<b>2:00 PM | Atelier : Impression 3D avancée</b> <img src="/ImagenesGenerales/impresora-3d.png" alt="">';
pregunta9.innerHTML= '<b>4:00 PM | Démonstrations de réalité augmentée</b> <img src="/ImagenesGenerales/lentes.png" alt="">';
pregunta10.innerHTML= '<b>10:00 AM | Concours : Battle of the Bots</b>  <img src="/ImagenesGenerales/robots-y-humanos.png" alt="">';
pregunta11.innerHTML= '<b>12:00 PM | Brunch de réseautage</b> <img src="/ImagenesGenerales/profesor.png" alt="">';
pregunta12.innerHTML= '<b>2:00 PM | Conférence : “Technologie durable et avenir vert”</b> <img src="/ImagenesGenerales/conferencia-en-linea.png" alt="">';
pregunta13.innerHTML= '<b>4:00 PM | Remise des prix du hackathon et cérémonie de clôture</b> <img src="/ImagenesGenerales/premio.png" alt="">';

    
        texto1.textContent = 'Ouverture officielle avec des invités spéciaux et coupe du ruban.';
        texto2.textContent = 'Intervenante : Dr. Sofia Méndez, PDG de NeuraTech.';
        texto3.textContent = 'Créez votre premier robot fonctionnel. Places limitées.';
        texto4.textContent = 'Exposition de projets innovants par de jeunes entrepreneurs.';
        texto5.textContent = 'Chorégraphie aérienne avec lumières et musique dans la cour centrale.';
        texto6.textContent = 'Experts de grandes entreprises débattent des défis et solutions.';
        texto7.textContent = 'Début de la compétition de développement de logiciels et applications.';
        texto8.textContent = 'Apprenez des techniques professionnelles de modélisation et de prototypage.';
        texto9.textContent = 'Vivez des expériences immersives avec les dernières technologies AR/VR.';
        texto10.textContent = 'Compétition de robots autonomes. Soutenez votre favori !';
        texto11.textContent = 'Espace de réseautage pour professionnels, étudiants et investisseurs.';
        texto12.textContent = 'Comment la technologie peut impacter l\'environnement.';
        texto13.textContent = 'Cérémonie de remise des prix et clôture officielle de l\'Expotech 2025.';
        texto14.innerHTML= 'Zone de jeux vidéo et de simulateurs VR <img src="/ImagenesGenerales/jugando-videojuegos.png" alt=""> ';
        texto15.innerHTML = 'Zone de réalité augmentée <img src="/ImagenesGenerales/lentes.png" alt="">';
        texto16.innerHTML = 'Stands interactifs des universités et entreprises technologiques  <img src="/ImagenesGenerales/graduacion.png" alt="">';
        texto17.innerHTML = 'Food trucks technologiques : goûtez aux glaces imprimées en 3D ! <img src="/ImagenesGenerales/food-truck.png" alt="">';
    
        parrafo1.textContent = 'Programme des Activités';
        parrafo2.textContent = 'Autres Activités Permanentes';
        parrafo3.textContent = 'Jour 1 – 12 juin 2025';
        parrafo4.textContent = 'Jour 2 – 13 juin 2025';
        parrafo5.textContent = 'Jour 3 – 14 juin 2025'; 
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