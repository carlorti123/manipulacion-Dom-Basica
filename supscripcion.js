const tipoDeSupscripciones = {
    Free: 'Tienes acceso unicamente a los cursos gratuitos',
    Expert: 'Tienes acceso a casi todos los cursos durante un año',
    ExpertDuo: ' Tienes acceso a todos los cursos, junto a otro estudiante, durante un año'
};

function conseguirTipoDeSupscripcion (supscripcion){
   if(tipoDeSupscripciones[supscripcion]){
    console.log(tipoDeSupscripciones[supscripcion]);
   }

   console.warn('Ese tipo de supscripcion no existe');
}