// Soal:
// Cek Apakah pasangan kata berikut adalah anagram atau bukan
// contoh:
// listen --- silent// true
// The Eyes ---- They See// true
// sun --- moon// false

// expected output berdasarkan soal:
// true
// true 
// false
// Tidak boleh langsung print expected output
// Note : Berikan comment penjelasan pada baris kode yang dirasa penting

// Jawaban:
// write your code here


function isAnagram(str1, str2) {
    // Karena terdapat string yang terdiri dari 2 kata dan terdapat lower dan uppercase,
    // maka langkah poertama harus diubah seluruh string menjadi lowercase & menghapus spasi

    // Menghapus semua spasi dan mengubah huruf menjadi huruf kecil
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();
    
    // Memeriksa panjang kedua string
    // kalau sama, maka akan dilanjutkan ke fungsi selanjutnya
    if (str1.length !== str2.length) {
      return false;
    }
    
    // Mengonversi string ke array karakter dan mengurutkannya
    let arr1 = str1.split('').sort();
    let arr2 = str2.split('').sort();
    
    // Memeriksa apakah kedua array sama
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    
    return true;
  }

// Output
console.log(isAnagram("listen","silent")) 
console.log(isAnagram("The Eyes","They See")) 
console.log(isAnagram("sun","moon")) 

