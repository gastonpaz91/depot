//barras que se cargan segun scroll
var body = document.body;
var mostrarSoloUnaVez = true;
var element = document.getElementById("cosas");
var efectounavez = true;
//Update DOM on scroll
document.addEventListener("scroll", function() {
    var scrollAmt = window.pageYOffset || document.documentElement.scrollTop //te devuelve distancia de scroll desde el inicio hasta el mouse
    if (scrollAmt > 873 && mostrarSoloUnaVez) {
        mostrarSoloUnaVez = false;
        move();
        moveprac();
        movecom();
    }

    if (scrollAmt > 195 && efectounavez) {
        console.log('rere');
        efectounavez = false;
        element.style.opacity = "1";
    }
});
//funcion barras que se cargan
//barra diseño
function move() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 87) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}

//barra practicidad
function moveprac() {
    var elem = document.getElementById("myBar0");
    var width = 10;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 58) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}
//barra comodidad
function movecom() {
    var elem = document.getElementById("myBar1");
    var width = 10;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 72) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}

function addCart(){
    var cart = document.getElementById("cart")
    cart.innerHTML='$870';
    cart.style.fontWeight='900'
}
//volver al home
function navegar(url) {
    window.open(url, '_self')
}
function fav(mostrarRelleno) {
    var relleno=document.getElementById('favRelleno')
    var vacio=document.getElementById('favVacio')

    if(mostrarRelleno==='si'){
        vacio.style.display = 'none';
        relleno.style.display = 'block';
    }else{
        vacio.style.display = 'block';
        relleno.style.display = 'none';
    }

    }