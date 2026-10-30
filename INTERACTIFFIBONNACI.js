let n = 10;

let a = 0;
let b = 1;

if (n === 0) {

    console.log(0);

} else {

    for (let i = 2; i <= n; i++) {

        let suivant = a + b;

        a = b;
        b = suivant;

    }

    console.log("Fibonacci de rang", n, "=", b);
}