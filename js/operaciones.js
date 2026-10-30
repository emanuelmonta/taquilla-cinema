import { peliculas } from "./datos.js";


export function venderBoleto(pelicula, cantidad_boletos){
    pelicula = prompt('Ingrese el nombre de la película: \nSpiderman\n La odisea\n Michael Jackson');
    let encontrada = peliculas.find(p => p.nombre == pelicula)
    cantidad_boletos = parseInt(prompt('Ingrese la cantidad de boletos que desea comprar:'));
    if (encontrada) {
        if (encontrada.capacidad_total >= cantidad_boletos) {
            encontrada.capacidad_total -= cantidad_boletos;
            alert(`Compra exitosa. Boletos restantes: ${encontrada.capacidad_total}`);
            let compra = encontrada.precio_boleta * cantidad_boletos;
            alert(`Total de la compra: $${compra}`);  
            pelicula.boletas_vendidas += cantidadSolicitada;    
            return compra;
        } else {
            alert('No hay suficientes boletos disponibles.');
            return 0;
        }
    } else {
        alert('La película no existe.');
        return 0;
    }
}

export function ingresosTotales(){
    let total = 0
    peliculas.forEach(pelicula => {
        const ingresos = parseInt(pelicula.cantidad_boletos) * pelicula.precio_boleta;
        total += ingresos;
    });
    alert(`Ingreso total: $${total}`);
}

venderBoleto();
ingresosTotales();