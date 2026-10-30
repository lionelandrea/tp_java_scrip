let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

console.log("Ordre normal");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log("Ordre inverse");
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

let arrayCopy = [...array];

console.log("Copie du tableau", arrayCopy);