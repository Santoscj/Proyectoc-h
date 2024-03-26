const menu = document.querySelector("#menu")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")


abrir.addEventListener("click", () => {
    menu.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    menu.classList.remove("visible");
})

let nombreApellido = "Carlos Santos ";

let anioActual = 2024;
let anioNacimiento = 1993;
let miEdad = anioActual - anioNacimiento;

console.log(nombreApellido + miEdad);


let nombreUsuario = prompt (" Ingrese su nombre");
  alert(" Bienvenido " + nombreUsuario)

let edad = prompt("Ingrese su edad");

if (edad >=18) {
    alert("Eres mayor de edad. Puedes continuar");
 } else {
    alert("Eres menor de edad. No puedes continuar");
 }

let diaDeLaSemana = Number(prompt("Ingrese un numero para saber a que dia de la semana corresponde"))

switch (diaDeLaSemana) {
case 1:
   alert("Lunes");
break;
case 2:
   alert("Martes");
break;
case 3:
   alert("Miercoles");
break;
case 4:
   alert("Jueves");
break;
case 5:
   alert("Viernes");
break;
case 6:
   alert("Sabado");
break;
case 7:
   alert("Domingo");
break;
default:
   alert("No corresponde a ningun dia de la semana");

}
let actividad = prompt("Quieres conocer las actividades disponibles segun el dia seleccionado? responde si o no para continuar");

if (actividad =="si") {
    alert("Bienvenido a nuestras actividdes del dia");
 } else {
    alert("Gracias Por visitarnos");
 }
 function Actividad (paseo, comida, tiempo) {
   
      this.paseo = paseo;
      this.comida = comida;
      this.tiempo = tiempo;

 }
const lunes = new Actividad("Recorrido por la ciudad", "restaurante Lo mejor de la ciudad", "Cinco horas");
console.log(lunes);
const martes = new Actividad("Playa Agua Clara", "Restaunte de Mar", "cinco horas");
console.log(martes);
const miercoles = new Actividad("Parque Monumetal", "Restaurante Asiatico", "tres horas");
console.log(miercoles)
const jueves = new Actividad("Museo", "Comida Tradicional", "tres horas");
console.log(jueves);
const viernes = new Actividad("Jardin Botanico", "Restaurante Tematico", "tres horas");
console.log(viernes);
const sabado = new Actividad("Salon de Videojuegos", "Comida Rapida", "cuatro horas");
console.log(sabado);
const domingo = new Actividad("Parque de Diversiones", "Comida del parque", "seis horas");
console.log(domingo);

const actividades = [ 
{lunes:"Recorrido por la ciudad"}, 
{martes:"Playa Agua Clara"}, 
{miercoles:"Parque monumental"}, 
{jueves:"Museo"}, 
{viernes:"Jardin botanico,"},
{sabado:"Salon de videojuegos"},
{domingo:"Parque de diversiones"}
]
console.log(actividades);

function despedir(nombreUsuario){
   alert("adios "+ nombreUsuario)
}
despedir(nombreUsuario)
