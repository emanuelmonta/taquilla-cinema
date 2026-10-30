import { venderBoleto, ingresoTotales } from "./operaciones.js";
import { peliculas } from "./datos.js";

function taquilla(){
    alert("Sistema de taquilla iniciado en el navegador.")
    console.log("Sistema de taquilla iniciado en el navegador.")
    
    let continuar = true;

    while (continuar) {
        let opcion = prompt(
            "🎬 BIENVENIDO A CINE 'LUMIÈRE' 🎬\n\n" +
            "Elige una opción:\n" +
            "1. Vender boletos\n" +
            "2. Ver arqueo de caja (Ingresos totales)\n" +
            "3. Salir"
        );
    }
}

taquilla()