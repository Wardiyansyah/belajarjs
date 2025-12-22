const num = 4;

if (num < 10) {
    console.log('Satuan');
} else if (num < 100) {
    console.log('Puluhan');
} else if (num < 1000) {
    console.log('Ratusan');
}else {
    console.log(num);
}