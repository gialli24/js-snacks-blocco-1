const n = parseInt(prompt("Inserisci un primo numero"));
const m = parseInt(prompt("Inserisci un secondo numero"));

console.log('n : ' + n , 'm : ' + m);


if (n < m) {
    console.log(`Il numero maggiore è : ${m}`);
} else if (n > m) {
    console.log(`Il numero maggiore è : ${n}`);
} else {
    console.log("I numeri sono uguali");
}