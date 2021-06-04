// ejecutamos la función d erepetir al cargar la página
addEventListener('load', repetir(8), false);

// función que genera las busquedas el número de veces pasado por parámetro
function repetir(veces) {

    // variables para indicar la posición de la busqueda en la api y la posición del div donde lo enviamos
    let busqueda = 616;
    let posicion = 1;

    // lanzamos la busqueda e incrementamos los valores
    for (let index = 1; index < veces + 1; index++) {
        getAll(busqueda, posicion)
        busqueda++;
        posicion++;
    }
}

// función que genera las busquedas en la api 
function getAll(busqueda, posicion) {

    // busqueda del personaje en la posición 'busqueda' pasada por parámetro
    $.ajax({
        url: "https://rickandmortyapi.com/api/character/" + busqueda,
        method: 'GET',
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',

        // enviamos cada respuesta seleccionada de la busqeda a un elemnto por id
        success: function(data) {
            $('#nombre' + posicion).html(data.name);
            $('#especie' + posicion).html('Specie: ' + data.species);
            $('#sexo' + posicion).html('Gender: ' + data.gender);
            $('#origen' + posicion).html('Origin: ' + data.origin.name);
            $('#imagen' + posicion).attr('src', data.image);
        },

        // en caso de no encontrar la busqueda, nos envía un error por consola
        error: function(error) {
            console.log(error);
        }
    });

}