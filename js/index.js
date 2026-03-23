window.onload = inicio;

let usuario = [
   { dni: "20932570V",nom: "Adam Thor",email: "adabelrie@alu.edu.gva.es"},
   { dni: "20985594A",nom: "Ingrid De Haros",email: "ingrideharos19@gmail.com"},
   { dni: "20936878R",nom: "Víctor García",email: "vgvman271@gmail.com"}
]
function inicio() {
    Pedirdatos();
    ValidarDatos(usuario);
}

function Pedirdatos() {
    usuario.dni = prompt("Introduce el DNI del cliente:");
    usuario.nom = prompt("Introduce el nombre y apellido del cliente:");
    usuario.email = prompt("Introduce el email del cliente:");
}

function ValidarDatos(usuario) {
    let errores = [];

    // Validar nombre (mínimo 2 palabras)
    if (usuario.nom.trim().split(" ").length < 2) {
        errores.push("El nombre debe tener al menos 2 palabras.");
    }

    // Validar DNI (8 dígitos + 1 letra)
    if (!/^\d{8}[a-zA-Z]$/.test(usuario.dni)) {
        errores.push("El DNI debe tener 8 números + 1 letra.");
    }

    if (errores.length > 0) {
        alert(errores.join("\n"));
    } else {
        // Formatear y mostrar datos correctos
        let nombreFormateado = usuario.nom.split(" ")
            .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
            .join(" ");
        
        let dniFormateado = usuario.dni.slice(0, 8) + usuario.dni.slice(8).toUpperCase();
        
        alert(
            "DNI: " + dniFormateado + "\n" +
            "Nombre: " + nombreFormateado + "\n" +
            "Email: " + usuario.email
        );
    }
}