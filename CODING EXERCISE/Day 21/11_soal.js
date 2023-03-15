// Soal: Hitunglah jumlah masing masing karakter yang terdapat pada kata berikut
// karakter yang berupa huruf kapital maupun huruf kecil dihitung sama
// Contoh:
// Dibimbing di| karakter  contoh  d:2, i: 4 dst..... 
// Software  | karakter  contoh   s:1, e: 1 dst.....
// Frontend  | karakter  contoh  f:1, r: 1 dst.....

// Expected Output:
// { d: 2, i: 4, b: 2, m: 1, n: 1, g: 1, ' ': 1 }
// { s: 1, o: 1, f: 1, t: 1, w: 1, a: 1, r: 1, e: 1 }
// { f: 1, r: 1, o: 1, n: 2, t: 1, e: 1, d: 1 }

// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pada baris kode yang dirasa penting
// Gunakan Object/Array dan juga perulangan
// Jawaban:
function charCount(word) {
    let kataLower = word.toLowerCase(); // pertama-tama ubah dulu parameter menjadi lowercase

    let a = kataLower.split(""); //buat variable a yang isinya array yang dibuat dengan metode split
    var obj = {}; //buat object kosong

    a.forEach(function(s){ // mengiterasi setiap karakter pada array a dengan perulangan forEach, 
    obj[s] = (obj[s] || 0) + 1; //memperbarui nilai obj dgn +1 setiap kali karakter yang sama munccul dalam string. obj[s] adalah properti objek dgn key 's'
  });
  return obj; //mengembalikan objek yang berisi jumlah kemunculan setiap karakter dalam string
}


console.log(charCount("Dibimbing di"))
console.log(charCount("Software"))
console.log(charCount("Frontend"))
