const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'banana'];

console.log(frutas);

console.log(frutas.includes('maçã'));

console.log(frutas.filter(fruta));

console.log(frutas.filter((fruta) => fruta.includes('maçã')));

function fruta(frutas) {
     return frutas.includes("maçã");
}
