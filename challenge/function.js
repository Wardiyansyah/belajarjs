function sayName() {
    console.log('Iyan');
}

function logNumberType(num) {
    if (num < 0) {
        console.log('Negatif');
    } else if (num > 0) {
        console.log('Positif');
    } else {
        console.log('Nol');
    }
}

function sum(x, y) {
    let z = x + y;
    console.log(`${x} ditambah ${y} sama dengan ${z}`);
}

sum(1, 3);