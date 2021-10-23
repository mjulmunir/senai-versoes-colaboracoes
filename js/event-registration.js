function randInt(number) {
    return Math.round(Math.random() * number);
}

function dateToMiliSeconds(day, month, year) {
    const miliSeconds = 24 * 60 * 60 * 1000;

    return (day + month * 30 + year * 12 * 30) * miliSeconds;
}

function miliSecondsToDate(miliSeconds) {
    const year = Math.floor(miliSeconds / (12 * 30 * 24 * 60 * 60 * 1000));

    const monthRef = miliSeconds % (12 * 30 * 24 * 60 * 60 * 1000);
    const month = Math.floor(monthRef / (30 * 24 * 60 * 60 * 1000));

    const dayRef = monthRef % (30 * 24 * 60 * 60 * 1000);
    const day = Math.floor(dayRef / (24 * 60 * 60 * 1000));

    return `${day}-${month}-${year}`
}

const currentDate = new Date();

const date = {
    day: currentDate.getDate(),
    month: currentDate.getMonth(),
    year: currentDate.getFullYear()
};

const events = {
    event1: {
        eventDate: dateToMiliSeconds(date.day, date.month, date.year) * 1.0001,
        eventParticipants: 99
    },
    event2: {
        eventDate: dateToMiliSeconds(date.day, date.month, date.year) * .9999,
        eventParticipants: 98
    },
    event3: {
        eventDate: dateToMiliSeconds(date.day, date.month, date.year) * 1.0001,
        eventParticipants: 98
    }
};

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Bem vindo ao sistema de cadastro!\n\nPor favor, insira seu nome: ', (name) => {
    rl.question(`\n${name}, insira o nome do evento que deseja participar: `, (event_name) => {
        if (events[event_name] && events[event_name].eventDate >= dateToMiliSeconds(date.day, date.month, date.year)) {
            rl.question('Insira sua idade: ', (age) => {
                if (age >= 18) {
                    events[event_name].eventParticipants += 1;

                    if (events[event_name].eventParticipants < 100) {
                        console.log(`${name}, seu cadastro foi realizado com sucesso.`);
                        console.log(`Data do evento: ${miliSecondsToDate(events[event_name].eventDate)}`)
                        console.log(`Número de participantes: ${events[event_name].eventParticipants}`)

                        rl.close();
                    } else {
                        console.log('A quantidade limite de participantes foi excedida, seu cadastro não será realizado.');

                        rl.close();
                    }
                } else {
                    console.log(`${name}, a idade mínima necessária é 18 anos, seu cadastro não será realizado.`);
                    rl.close();
                }
            });
        } else {
            console.log('O evento selecionado não é válido, o cadastro não será realizado.');

            rl.close();
        }
    });
});