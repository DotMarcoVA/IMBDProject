let bigArray = [];
let auxArray = [1, 2, 3];
let auxArray2 = [4, 5, 6];
let auxArray3 = [7, 8, 9];

let lastArray = auxArray.concat(auxArray2, auxArray3);

bigArray = lastArray;
/* for (let index = 0; index < 10; index++) {
    bigArray.concat(auxArray);
} */

console.log(bigArray);
