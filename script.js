var nombre1G;
var nombre2G;
var apellido1G;
var apellido2G;
var dniG;
var fechaG;
var ud;
var edadG;
function nombrecompleto(){
    nombre1G= nombre1G + ' '+nombre2G +' '+ apellido1G+' ' + apellido2G
    document.getElementById("nombre1G").value=nombre1G;
}

function ultimoDNI(){
    var longi= dniG.length;
    ud=dniG[longi-1];
    document.getElementById("ud").value=ud;
}

function calcularEdad() {
    var hoy = new Date();
    var nacimiento = new Date(fechaG);
    edadG = hoy.getFullYear() - nacimiento.getFullYear();
    
    if (hoy < new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())) {
      document.getElementById("edadG").value=edadG-1;
    }else{
      document.getElementById("edadG").value=edadG;
    } 
}

function procesarFormulario() {
    dniG = document.getElementById('dni').value;
    nombre1G = document.getElementById('nombre1').value;
    nombre2G = document.getElementById('nombre2').value;
    apellido1G = document.getElementById('apellido1').value;
    apellido2G = document.getElementById('apellido2').value;
    fechaG = document.getElementById('fecha').value;


    nombrecompleto();
    ultimoDNI();
    calcularEdad();
}