/* 
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

*/

const bike = [
    {
        name: 'Ktm',
        weight: 7.7
    },
    {
        name: 'Canyon Grail',
        weight: 8.6
    },
    {
        name: 'Van Rysel',
        weight: 9
    },
    {
        name: 'Factor',
        weight: 9.2
    }
];

const elementBikeWeight = document.getElementById('bike');
console.log(bike[0].name);
console.log(bike[0].weight);

//Ricerca peso più basso;
let weightMin = bike[0].weight;
for (let i = 0; i < bike.length; i++) {

    if (bike[i].weight <= weightMin) {
        weightMin = bike[i].weight;
        elementBikeWeight.innerText = `La bicicletta con il minor peso è la ${bike[i].weight} e pesa: ${weightMin} kg`
        console.log(weightMin);
    }
}

