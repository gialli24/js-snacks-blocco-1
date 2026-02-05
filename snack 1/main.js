const n = prompt("Inserisci un primo numero");
const m = prompt("Inserisci un secondo numero");

console.log('n : ' + n , 'm : ' + m);


if (n < m) {
    console.log(`Il numero maggiore è : ${n}`);
} else if (n > m) {
    console.log(`Il numero maggiore è : ${m}`);
} else {
    console.log("I numeri sono uguali");
}