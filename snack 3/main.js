let n_values = 10;

let sum = 0;
let message = "";

for (let i = 0; i < n_values; i++) {
    const user_val = Number(prompt(`Inserisci il ${i+1}° numero`));

    sum += user_val;
    message += user_val;

    if (i != n_values - 1) {
        message += " + "
    }
}

message += ` = ${sum}`;
console.log(message);
 