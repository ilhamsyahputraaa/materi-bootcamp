// // case : Age classification

// // if : hanyua untuk satu kondisi saja
// let name = 'Fiqri';
// let age = 20 ;
// if (name === 'Pratama') console.log("My Name is Pratama");

// // if else : hanya untuk 1 kondisi dan 1 untuk set default value / output / jalan terakhir
// if (age <= 10){
//     console.log('Kids');
// } else {
//     console.log ("Adults");
// }

// // Else if : bisa untuk lebih dari dua kondisi, tetapi disarankan tidak lebih dari 4 atau 5 kondisi
// if (age < 10){
//     console.log('Kids');
// } else if (age>= 10 && age<=30){
//     console.log ("Adults");
// } else {
//     console.log("olds");
// }

// // Nested if (if bersarang)
// if (name === ' fiqri'){
//     if (age >= 18) {
//         console.log("This Is Fiqri");
//     } else {
//         console.log ("Fiqri is Older Than it");
//     }
// } else console.log ("Who Am I?");



// // ternary operators
// // voteable case
// let = 'pratama';
// let age = 20;
// let voteableCategory = (age < 18) ? "Too Young" : "Old Enough";
// console.log(voteableCategory);

// // Klasifikasi Nilai
// let ketNilai = '';
// let nilai = 95;

// // Note = pointing atau patokan untuk perbandingan
// switch (true) {
//     case nilai == 100:
//         ketNilai = "A";
//         break;
//     case nilai >= 20 && nilai <= 50:
//         ketNilai = "D";
//         break;
//     default :
//     ketNilai = "unknown";
// }


// // nested ternary 
// switch (nilai) {
//     case 100:
//             ketNilai = "A";
//         break;
//     case 90:
//             ketNilai = "B";
//         break;
//     case 80:
//             ketNilai = "C";
//         break;
//     default:
//             ketNilai = "unknown";
//         break;
// }

// console.log("Nilai = ", ketNilai);


// let day = '';
// console.log("day : ", new Date().getDay());
// switch (10) { // base on expression
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default: // similiar with else
//       day = "Unknown Day";
// }

// console.log("The Day Is : ", day);
