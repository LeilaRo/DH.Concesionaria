// El primer auto es un Ford Fiesta Azul
//del 2019, con 200 kilómetros, cuyo precio es 150000, disponible en 12 cuotas, con la patente  que no está vendido.
// El segundo auto es un Toyota Corolla Blanco, 
//del 2019, 0 kilómetros, cuyo precio es 100000, disponible en 14 cuotas, con la patente JJK116 que no está vendido.

let autos = [{
    marca: "Ford",
    modelo: "Fiesta",
    color: "Azul",
    anio: 2019,
    km: 99,
    precio: 150000,
    patente: "APL123",
    cuotas: 12,
    vendido: false
},
{
    marca: "Toyota",
    modelo: "Corolla",
    color: "Blanco",
    km: 500,
    anio: 2019,
    precio: 100000,
    patente: "JJK116",
    cuotas: 14,
    vendido: true
}
]
module.exports = autos;

console.log(autos[0].patente)