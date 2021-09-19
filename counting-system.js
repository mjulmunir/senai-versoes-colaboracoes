function randInt(base) {
    return Math.floor(Math.random() * base);
}

let counter_1 = randInt(200);
let counter_2 = randInt(150);

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('Menu\n0 - encerrar\n1 - acrescentar peça\n2 - mostrar quantidade de peças\n\n');
rl.prompt();

rl.on('line', (menuOption) => {
    switch (menuOption) {
        case '0':
            console.log(`Número de pças do tipo 1: ${counter_1}\nNúmero de pças do tipo 2: ${counter_2}`);
            
            rl.close();
            
            break;
        case '1':
            rl.question('Adicionar peça do tipo 1 ou do tipo 2 ?\n\t', (pieceType) => {
                if (pieceType === '1') {
                    counter_1 += 1;
                } else if (pieceType === '2') {
                    counter_2 += 1;
                }

                rl.prompt();
            });

            break;
        case '2':
            console.log(`Número de pças do tipo 1: ${counter_1}\nNúmero de pças do tipo 2: ${counter_2}\n`);

            rl.prompt();

            break;
        default:
            console.log('Opção não disponível');

            break;
    }
}).on('close', () => { process.exit(0); });