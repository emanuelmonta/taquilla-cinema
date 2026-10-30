import { venderBoleto, ingresosTotales } from "./operaciones.js";
import { peliculas } from "./datos.js";

function taquilla(){
    alert("Sistema de taquilla iniciado en el navegador.");
    console.log("Sistema de taquilla iniciado en el navegador.");
    
    let continuar = true;

    while (continuar) {
        let opcion = prompt(
            "🎬 BIENVENIDO A CINE 'LUMIÈRE' 🎬\n\n" +
            "Elige una opción:\n" +
            "1. Vender boletos\n" +
            "2. Ver Ingresos totales\n" +
            "3. Salir"
        );
        switch (opcion) {
            case "1":
                venderBoleto(); 
                break;
            case "2":
                ingresosTotales(); 
                break;
            case "3":
                continuar = false; 
                alert("Gracias por usar el sistema de taquilla. ¡Hasta luego!");
                console.log("Gracias por usar el sistema de taquilla. ¡Hasta luego!");
                break;
            case null: // Si el usuario le da al botón "Cancelar" en el prompt
                continuar = false;
                break;
            default:
                alert("Opción inválida. Por favor, elige una opción válida.");
                console.log("Opción inválida. Por favor, elige una opción válida.");
                break;
        }
    }
}

taquilla();