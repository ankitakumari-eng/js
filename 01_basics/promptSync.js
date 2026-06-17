const prompt = require("prompt-sync")();

const m = Number(prompt("Enter The Size Of Array : "));

const Students = new Array(m);

for (let i = 0; i < m; i++) {
    Students[i] = String(prompt(`Enter The Element At ${i} Index : `));
}

console.log("\nElements of Array:");

for (let i = 0; i < m; i++) {
    console.log(`The Array Is : ${Students[i]}`);
}