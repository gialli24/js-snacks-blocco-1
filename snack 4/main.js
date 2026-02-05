let n_values = 6;

const  oddValues = [];

for (let i = 0; i < n_values; i++) {
    const user_val = Number(prompt(`Inserisci il ${i+1}° su ${n_values} numero`));

    if (user_val % 2 != 0) {
        oddValues.push(user_val);
    }
}
 
console.log(oddValues);