const first_input = Number(prompt("Inserisci un primo numero"));
const second_input = Number(prompt("Inserisci un secondo numero"));

console.log('n : ' + first_input , 'm : ' + second_input);


if (first_input < second_input) {
    console.log(`Il numero maggiore è : ${second_input}`);
} else if (first_input > second_input) {
    console.log(`Il numero maggiore è : ${first_input}`);
} else {
    console.log("I numeri sono uguali");
}