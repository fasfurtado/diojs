function somanumeros(arr) {
   return arr.reduce(function (prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev + current;
    }, 0);
}

const arr = [1, 2];

console.log(somanumeros(arr));

const lista = [
 {
     name: 'sabao em po',
     preco: 30
 },
 {
    name: 'cereal',
    preco: 12 
 },
 {
     name: 'toalha',
     preco: 30
 },
];


console.log('Lista : ', lista);

const saldoDisponivel = 100;

console.log(calculaSaldo(saldoDisponivel, lista));

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada ', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel); 
        return prev - current;
    }
