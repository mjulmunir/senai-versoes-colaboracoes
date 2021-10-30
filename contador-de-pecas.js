// Declaração de variáveis
var readlineSync = require('readline-sync');

var piece1 = 0;
var piece2 = 0;

const main_menu = '\n\nEscolha uma opcao\n\n'+
                  '0 - Encerrar o programa\n'+
                  '1 - Acrescentar peca\n'+
                  '2 - Mostrar quantidade de pecas\n'+
                  ' >  ';

const piece_menu = '\nAcrescentar peca 1 ou 2?\n'+
                   ' >  ';

// Repetição que permite interação do usuário e retorno de informações
do {
    var main_menu_option = parseInt(readlineSync.question(main_menu));

    switch (main_menu_option) {
        case 0:
            console.log('\n\nVoce escolheu encerrar o programa... :(\n\n');

            return 0;
        case 1:
            var piece_menu_option = parseInt(readlineSync.question(piece_menu));

            switch (piece_menu_option) {
                case 1:
                    piece1++;

                    break;
                case 2:
                    piece2++;

                    break;
                default:
                    console.log('\n\nPeca invalida');
            }

            break;
        case 2:
            console.log(`\nTotal de pecas do tipo 1: ${piece1}.\n`+
                        `Total de pecas do tipo 2: ${piece2}.\n`+
                        `Total de pecas: ${piece1 + piece2}.`);

            break;
        default:
            console.log('Opcao invalida!');
    }

    console.log();
}while (true)
