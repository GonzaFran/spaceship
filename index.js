// botones //

var start = document.getElementById ("start");
window.addEventListener ('load', function (event) { iniciarCanvas ();});

function iniciarCanvas () {
    var contexto = document.getElementById ("my_canvas").getContext ("2d");
    var backgroundImage = new Image();
    var naveImage = new Image();
    backgroundImage.src = "imagenes/background-canvas.jpg";
    naveImage.src = "imagenes/nave.png";

    var contextH = contexto.canvas.height;
    var contextW = contexto.canvas.width;

// Insertar imagen de nave y fondo //

function launcher () {
    this.y = 300,
    this.x = contextW*.5 - 25,
    this.width = 100,
    this.height = 100,
    this.direccion,
    this.bg = "white",

    this.render = function () {
        if(this.direccion === 'left'){
            this.x-=1;
        } else if(this.direccion === 'right'){
            this.x+=1;
        }else if(this.direccion === "downArrow"){
            this.y+=1;
        }else if(this.direccion === "upArrow"){
            this.y-=1;
        }


        contexto.fillStyle = this.bg;
        contexto.drawImage (backgroundImage, 5, 5);
        contexto.drawImage (naveImage, this.x, this.y, 80, 70);
    }


}



// animar //
var launcher = new launcher();
function animate() {
    contexto.clearRect(0, 0, contextW, contextH);
    launcher.render();
}

var animacion = setInterval(animate, 6);

//Eventos de movimiento para la nave//

document.addEventListener ("keydown", function (event) {
    if(event.keyCode === 65 ) {         
        launcher.direccion = 'left'; 
        if(launcher.x < contextW *.2 - 130) {               
            launcher.x+= 0;
            launcher.direccion = '';
        }
    }
});

document.addEventListener ("keyup", function (event) {
    if(event.keyCode === 65 ) {
            launcher.x+= 0;
            launcher.direccion = '';
        }
    }
);

document.addEventListener ("keydown", function (event) {
    if(event.keyCode === 68 ) {
        launcher.direccion = 'right'; 
        if(launcher.x > contextW - 110) {
            launcher.x-= 0;
            launcher.direccion = '';
        }
    }
});

document.addEventListener ("keyup", function (event) {
    if(event.keyCode === 68 ) {
            launcher.x-= 0;
            launcher.direccion = '';
        }
    }
);

document.addEventListener ("keydown", function (event) {
    var limit = contextH / 2;
    if(event.keyCode === 87 ) {
        launcher.direccion = "upArrow"; 
        if(launcher.y < limit) {
            launcher.y+= 0;
            launcher.direccion = '';
        }
    }
});

document.addEventListener ("keyup", function (event) {
    if(event.keyCode === 87 ) {
            launcher.y-= 0;
            launcher.direccion = '';
        }
    }
);

document.addEventListener ("keydown", function (event) {
    if(event.keyCode === 83 ) {
        launcher.direccion = "downArrow"; 
        if(launcher.y >= 300) {
            launcher.y-= 0;
            launcher.direccion = '';
        }
    }
});

document.addEventListener ("keyup", function (event) {
    if(event.keyCode === 83 ) {
            launcher.y+= 0;
            launcher.direccion = '';
        }
    }
);


}



