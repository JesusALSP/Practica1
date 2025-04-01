// practica 1 ejercicios 4,5,6. Jesus araque 28.440.514

const persona = {
    nombre: "Hugo",
    edad: 30,
    estadoCivil: "soltero",
    evaluarMortalidad: function(virus) {
        if (this.edad < 12) {
            return "Indice de mortalidad alto"
        } else {
            return "Indice de mortalidad bajo"
        }
    }
}

const virus = {
    nombre: "Dracula",
    mutacion: "CR7Mss",
    vectorDeContagio: "murcielago",
    mortalidad: "65%"
}

console.log(`%cPractica 1: ejercicios 4, 5 y 6`, 'font-weight: bold; font-size: 16px; color: black;');

// mostrar por consola los objetos persona y virus



console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Estado Civil: %c${persona.estadoCivil}`, "font-weight: bold;");
console.log("   ")
console.log("Virus:");
console.log(`Nombre: ${virus.nombre}`);
console.log(`Mutación: ${virus.mutacion}`);
console.log(`Vector de Contagio: ${virus.vectorDeContagio}`);
console.log(`Mortalidad: %c${virus.mortalidad}%`, "color: red; font-weight: bold;");

// llamada del metodo 
const resultado = persona.evaluarMortalidad(virus)
console.log(`%cEl paciente ${persona.nombre} tiene un ${resultado} frente al virus ${virus.nombre}.`, 'font-weight: bold; font-size: 16px; color: green;')






