let usernames = [
    'yandy',
    'dimas',
    'mita'
];

let favoriteFoods = [
    'nasi goreng',
    'sate',
    'bakso'
];

let text = `Ada total ${usernames.length} username`;
console.log(text);

let newUsername = 'adi';
let isTaken = usernames.includes(newUsername);

if (isTaken) {
    console.log('username sudah digunakan');
} else {
    console.log('username tersedia');
}

console.log(`Makanan favoritku yang kedua adalah ${favoriteFoods[1]}`);
