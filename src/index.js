const { playSong } = require('./play');
const readline = require('readline');

// Configurar la interfaz readline para entrada/salida interactiva
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showSongs () {
    console.log('Sonidos disponibles:');
    console.log('- Rana: brr, birip, brrah, croac');
    console.log('- Libélula: fiu, plop, pep');
    console.log('- Grillo: cric-cric, trri-trri, bri-bri');
}

async function App() {
    console.log('=== Lago Musical ===');
    showSongs();
    
    let loop = true;
    
    while (loop) {
        const input = await new Promise((resolve) => {
            rl.question('\nIngresa un sonido disponible (o "salir" para terminar):\n> ', resolve);
        });

        const command = input.trim().toLowerCase()
        
        if (command === 'salir') {
            loop = false;
            continue;
        }

        const result = playSong(command);
        if (result.length > 0) {
            console.log('Sonidos restantes:', result.join(', '));
        } else {
            console.log('Sonido ingresado no disponible --> ', command);
        }
    }

    rl.close();
}

// Manejar el cierre del programa
rl.on('close', () => {
    console.log('\n¡Hasta luego!');
    process.exit(0);
});

// Iniciar la aplicación
App();