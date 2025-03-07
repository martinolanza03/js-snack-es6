/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const squads = [
    {
        name: 'Juventus',
        points: 0,
        fouls: 0
    },
    {
        name: 'Milan',
        points: 0,
        fouls: 0
    },
    {
        name: 'Inter',
        points: 0,
        fouls: 0
    },
    {
        name: 'Napoli',
        points: 0,
        fouls: 0
    },
    {
        name: 'Atalanta',
        points: 0,
        fouls: 0
    },
    {
        name: 'Roma',
        points: 0,
        fouls: 0
    }
];

// Funzione numeri random
for (let i = 0; i < squads.length; i++) {
    squads[i].points = (Math.floor((Math.random() * 70) + 1));
    squads[i].fouls = (Math.floor((Math.random() * 90) + 1));
}
console.log(squads)