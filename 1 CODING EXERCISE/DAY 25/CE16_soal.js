// Soal:
// You live in the city of Cartesia where all roads are laid out in a perfect grid. 
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
// The city provides its citizens with a Walk Generating App on their phones -- 
// everytime you press the button it sends you an array of one-letter strings representing directions to walk 
// (eg. ['n', 's', 'w', 'e']). 
// You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, 
// so create a function that will return true if the walk the app gives you will take you exactly ten minutes 
// (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). 
// It will never give you an empty array (that's not a walk, that's standing still!).

// cartesius 
//             north
//               x
//               |
//               |
//               |
//  west   ------o------y  east
//               |
//               |
//               |
//             south

// Expeceted Output :
// true
// false
// false
// false

// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pada baris kode yang penting
// CLUE : Manfaatkan perulangan dan pengkondisian

// Jawaban:
function isValidWalk(walk) {
    // Set variable untuk melacak posisi pengguna
    // Karena digambarkan dengan diagram kartesius, maka pakai perumpamaan x&Y
    let x = 0;
    let y = 0;
    
    // Looping untuk tracking setiap langkah perblok dengan perumpamaan diagram kartesius
    for (let step of walk) {
      // Mengubah posisi pengguna sesuai dengan langkah yang diambil


      //karena N(north/utara) itu mengarah ke sumbu y positif, maka setiap kali muncul N, maka nilai Y akan di-increment 1
      if (step === 'n') { 
        y++;
      } 
      
      //karena S(South/Selatan) itu mengarah ke sumbu y negatif, maka setiap kali muncul N, maka nilai Y akan di-decrement 1
      else if (step === 's') {
        y--;
      } 
      
      //karena E(East/Timur) itu mengarah ke sumbu X positif, maka setiap kali muncul N, maka nilai X akan di-increment 1
      else if (step === 'e') {
        x++;
      } 
      
      //karena W(West/Barat) itu mengarah ke sumbu X Negatif, maka setiap kali muncul N, maka nilai X akan di-decrement 1
      else if (step === 'w') {
        x--;
      }
    }
    
    // Mengecek apakah walk membawa pengguna kembali ke titik awal
    if (x === 0 && y === 0) {
      // Mengecek apakah walk memerlukan waktu tepat sepuluh menit
      if (walk.length === 10) {
        return true;
      }
    }
    
    // Jika tidak memenuhi kriteria di atas, return false
    return false;
  }
  


console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
console.log(isValidWalk(['w']));
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
