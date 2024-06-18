// let uno ="3";
// let dos = uno;
// console.log(dos);

// let = alert("Bienvenidos a mi pagina web!");

// let user = prompt("¿Cual es tu nombre?");
// console.log(user);
// alert("Tu nombre es : "+user);

// let edadUser = prompt("Coloca tu edad: ");
// console.log(edadUser);
// alert("Tu nombre y edad es: " + user + ", " + edadUser);

// let nombre ="Melina";
// let edad= 26;
// let cumpleaños="30-01-1998";
// let ciudad="cipolletti";
// let ocupacion="estudiante";
// let pasatiempos="gimnasio";

// console.log("Hola! mi nombre es: "+nombre+"tengo "+edad+" años, mi cumpleaños es en la fecha "+cumpleaños+". Actualmente vivo en"+ciudad+" y mi ocupación es "+ocupacion+", en mis tiempos libres voy al "+pasatiempos);

// let panaderia = "factura", carniseria= "picada", supermercado="leche";

// let textoUsuario = prompt("ingresa un texto breve: ");
// let respuesta = textoUsuario.length;
// console.log("El texto ingresado tiene " + respuesta +" caracteres. ");
// let edad = prompt("ingrese su edad: ");
// //convertir la edad a numero
// edad = parseInt(edad);
// let dias = edad * 365;
// console.log("Tu edad representa aproximadamente " + dias + " días. ");

// let num1;
// let num2;
// let resultado;
// let pregunta = prompt("Ingrese un número: ");
// num1 = parseInt(pregunta);
// let preguntaDos = prompt("Ingrese otro número: ");
// num2 = parseInt(preguntaDos);
// resultado = num1+num2;
// console.log("La suma de los dos números es: "+ resultado);

// let edad = 26;
// let edadMaxima = 99;
// let snackFavorito = "papitas";
// let snackPorDia = 2;

// let añosPorVivir = edadMaxima-edad;
// let snackFaltantes = añosPorVivir * 365;
// alert("Necesitarás " + snackFaltantes +" snacks para que te alcancen hasta los "+ edad + " años");

// let precioPapitas = 355;
// let gastoFinal = precioPapitas*snackFaltantes;
// console.log("El total de dinero que gastaras en snacks es: "+ gastoFinal +"$");

let dias = 4;
let presumuestoMaximo = 300000;
let comida = 3; 
let totalComida = comida*dias;
let presupuestoTotal = presumuestoMaximo/totalComida;
alert("Podés gastar "+ presupuestoTotal +" $ aproximadamente en cada comida para que te alcance la plata durante los " + dias + " días de viaje")
