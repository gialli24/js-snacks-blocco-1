const first_input = prompt("Inserisci una prima parola");
const second_input = prompt("Inserisci una seconda parola");

if (first_input.length > second_input.length) {
    console.log(second_input, first_input);
} else if (first_input.length < second_input.length) {
    console.log(first_input, second_input);
} else {
    console.log("Le parole hanno stessa lunghezza");
}