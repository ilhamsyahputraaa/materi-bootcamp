
let numbers1 = [3,5,6,8,9];
let numbers2 = [1,3,5,7];

let theMiddle1 = Math.floor((numbers1.length-1) / 2); 
let value1 = numbers1[theMiddle1];

let theMiddle2 = Math.floor((numbers2.length-1) / 2); 
let value2 = numbers2[theMiddle2];

console.log("Array : [" + numbers1 + "] the middle value is " + value1);
console.log("Array : [" + numbers2 + "] the middle value is " + value2);

// berikut hasil saya searching caranya dan dapet di stackoverflow. intinya dari caranya adalah 
// length dari arraynya dibagi 2, lalu hasil pembagiannya itu adalah index dari value yang berada di tengah array tersebut (CMIIW)

//pake static method Math.floor() untuk membulatkan angka koma dibelakang bilangan bulat menjadi 0 

// tapi masalahnya ada di array yang memiliki length genap (numbers2). diaa bakal milih angka yang beda dari expected output
// jadi solusi dari stackoverflow itu length dari array dikurangi 1, baru dibagi 2. 
// lalu  pake static method Math.floor() untuk membulatkan kebawah alias menghilangkan koma dari hasil pembagian length array 
// untuk length ganjil (numbers1) akan aman, dan array numbers2 juga sesuai expected output.
// mohon bimbingannya kalau ada keliru. sambil memahami, terima kasih banyak ka fiqri
