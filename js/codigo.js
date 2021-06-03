//función botones numerales
$("#btn-1").click(function() {
    $('#result-operacion').html($('#result-operacion').html() + 1);
    add(1);
});

$("#btn-2").click(function() {
    $('#result-operacion').html($('#result-operacion').html() + 2);

    add(2);
});

$("#btn-3").click(function() {
    $('#result-operacion').html($('#result-operacion').html() + 3);
    add(3);
});

$("#btn-4").click(function() {
    $('#result-operacion').html($('#result-operacion').html() + 4);
    add(4);
});

$("#btn-5").click(function() {
    $('#result-operacion').html($('#result-operacion').html() + 5);
    add(5);
});

$("#btn-6").click(function() {
    $('#result-operacion').html($('#result-operacion').html() + 6);
    add(6);
});

$("#btn-7").click(function() {
    $('#result-operacion').html($('#result-operacion').html() + 7);
    add(7);
});

$("#btn-8").click(function() {
    $('#result-operacion').html($('#result-operacion').html() + 8);
    add(8);
});

$("#btn-9").click(function() {
    $('#result-operacion').html($('#result-operacion').html() + 9);
    add(9);
});

$("#btn-0").click(function() {
    $('#result-operacion').html($('#result-operacion').html() + 0);
    add(0);
});

//función botones operacionales
$("#suma").click(function() {
    $('#result-operacion').html($('#result-operacion').html() + '+');
    suma();
});

$("#resta").click(function() {
    $('#result-operacion').html($('#result-operacion').html() + '-');
    resta();
});

$("#division").click(function() {
    $('#result-operacion').html($('#result-operacion').html() + '&divide;');
    multiplicar();
});

$("#multiplicacion").click(function() {
    division();
});

$("#fluctua").click(function() {
    fluctua();
});

$("#pi").click(function() {
    pi();
});

$("#e").click(function() {
    euler();
});

$("#c").click(function() {
    C();
});

$("#atras").click(function() {
    barra_ultimo();
});

$("#x-cuadrado").click(function() {
    cuadrado_cubo();
});

$("#1-partido-x").click(function() {
    inversa();
});

$("#barra-x").click(function() {
    XX();
});

$("#exp").click(function() {
    expo();
});

$("#mod").click(function() {
    mod();
});

$("#2-raiz-x").click(function() {
    raiz_cucu();
});

$("#parentesis-1").click(function() {
    parentesis1();
});

$("#parentesis-2").click(function() {
    parentesis2();
});

$("#n").click(function() {
    n();
});

$("#x-elevado-y").click(function() {
    expo_raizde();
});

$("#diez-elevado-x").click(function() {
    elevar10_elevar2();
});

$("#log").click(function() {
    log_logbase();
});

$("#neperiano").click(function() {
    lognat_euler();
});

$("#mas-menos").click(function() {
    negar();
});

$("#punto").click(function() {
    add('.');
});

$("#igual").click(function() {
    igual();
});