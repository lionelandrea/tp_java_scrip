let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let arrayCopy = [];


for (let i = array.length - 1; i >= 0; i--) {
    arrayCopy.push(array[i]);
}

console.log("Tableau original :", array);
console.log("Tableau inversé :", arrayCopy);