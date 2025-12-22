const avengers = [
    'Iron Man',
    'Black Widow',
    'Hulk',
    'Captain America',
    'Thor'
];

let text = `ada ${avengers.length} anggota Avengers`;
console.log(text);

let hasThor = avengers.includes('Thor');
console.log(hasThor);

console.log(avengers[0]);
