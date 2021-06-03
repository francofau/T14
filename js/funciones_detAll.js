addEventListener('load', getAll(5), false);

function getAll(num) {
    $.ajax({
        url: "https://rickandmortyapi.com/api/character/" + num,
        method: 'GET',
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',

        success: function(data) {
            console.log(data.name);
            console.log(data.species);
            console.log(data.gender);
            console.log(data.origin.name);
            console.log(data.image);
        },
        error: function(error) {
            console.log(error);
        }
    });
}

function setValues(num) {
    $('#nombre' + num).html(data.name);
    // $('#nombre' + num).html(data)
    // $('#nombre' + num).html(data)
    //$('#nombre' + num).html(data)
    //$('#nombre' + num).html(data)
}

setValues(1);