
window.onload=inicio;
let usuario= {
    dni:"20942599V",
    nom:"Adam Thor Bellver Riera",
    email:"adamthor@gmail.com"

};
function inicio(){
pedirDatos();
}
function pedirDatos(){




}
function ValidarDatos(usuario){
let errores=[];
if(usuario.nom.slipt("").length !==2){
    errores.push("el nombre del cliente tiene que tener 2 palabras");
}
if (!/^\d{8}[a-zA-Z]$/.test(usuario.dni)){
       errores.push("el dni ha de tenir 8 números i una lletra al final");
}
}
