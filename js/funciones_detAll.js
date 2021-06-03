addEventListener('load', getAll(5), false);


function getAll(num) {
    for (let i = 0; i < 7; i++) {
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
                for (let index = 1; index < 7; index++) {

                    $('#nombre' + index).html(data.name);
                    $('#especie' + index).html(data.species);
                    $('#sexo' + index).html(data.gender);
                    $('#origen' + index).html(data.origin.name);
                    $('#imagen' + index).html(data.image);
                    num++;
                }
            },
            error: function(error) {
                console.log(error);
            }
        });

    }


}