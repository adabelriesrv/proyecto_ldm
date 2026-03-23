window.onload = inicio;

let usuario = {
    dni: "20942599V",
    nom: "Adam Thor Bellver Riera",
    email: "adamthor@gmail.com"
};

function inicio(){
    Pedirdatos();
    ValidarDatos(usuario);
}

function Pedirdatos(){
    usuario.dni = prompt("Introduce el dni del cliente");
    usuario.nom = prompt("Introduce el nombre del cliente");
    usuario.email = prompt("Introduce el email del cliente");
}

function ValidarDatos(usuario){
    let errores = [];

    if(usuario.nom.trim().split(" ").length < 2){
        errores.push("El nombre del cliente tiene que tener al menos 2 palabras");
    }

    if (!/^\d{8}[a-zA-Z]$/.test(usuario.dni)){
        errores.push("El dni ha de tener 8 números y una letra al final");
    }

    if (errores.length > 0){
        alert(errores.join("\n"));
    } else {
        alert("Datos correctos");
    }
}