//objeto Moto Jesus araque 28.440.514

const moto = {
 marca: "Honda", 
    modelo: "CB500X" , 
    year: 2023 , 
    peso: 199, 
    veloMax: 175 , 
    rpmMax: 8500
    
}

// para la moto 2

const moto2 = {
 marca: "Yamaha", 
    modelo: "MT-07" , 
    year: 2020 , 
    peso: 184 , 
    veloMax: 210 , 
    rpmMax: 9000 
    
}

console.log(`%cPractica 1: ejercicios 1, 2 y 3`, 'font-weight: bold; font-size: 16px; color: black;');

// impresion de los dos objetos por consola
console.log(moto)
console.log(moto2)

// comparacion y muestra de cual moto es mas rapida 

if (moto.veloMax > moto2.veloMax) {
   console.log(`La moto mas rapida es: ${moto.marca} con veloMax: ${moto.veloMax}.`);
} else {
    console.log(`La moto mas rapida es: ${moto2.marca} con veloMax: ${moto2.veloMax}.`);

}

