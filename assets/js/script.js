/*Al clickear cualquiera de los dos botones remover la solicitud de amistas */
/*Al apretar cualquiera de los dos, el boton de solicitudes disminuya*/
/*Al apretar el boton aceptar your conections aumentede numero*/

var personaUno = document.querySelector(".infoSolicitudes .uno" );
var personaDos = document.querySelector(".infoSolicitudes .dos" );

var botonSolicitudes = document.querySelector(".boton1 button");
var botonAmistades = document.querySelector(".boton2 button");

function solicitudAmistad (element) {
    if(element == 11){
        personaUno.remove();
        botonSolicitudes.innerHTML--;
        botonAmistades.innerHTML++;
    }
    else if(element ==12){
        personaUno.remove();
        botonSolicitudes.innerHTML--;
    }
    else if(element ==21){
        personaDos.remove();
        botonSolicitudes.innerHTML--;
        botonAmistades.innerHTML++;
    }
    else {
        personaDos.remove();
        botonSolicitudes.innerHTML--;
    }
}

/*Al editar el perfil, se cambie el nombre de manera automatica O que sea por input */
    var nombrePerfil = document.querySelector(".gris h2");

function editarPerfil(){
    console.log(nombrePerfil);
    nombrePerfil.innerHTML = "Carolina Orellana";
}