// Soal:
// Count The Vowels
//hitung jumlah huruf vokal pada string
// expected output : 
// 9
// 6

let vowels = ['a','i','u','e','o'] // vokal

// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dirasa penting
// CLUE : Gunakan perulangan dan pengkondisian

// Jawaban:
function countVowels (str, vowels) {

    let jumlah = 0; //Inisialisasi count

    
    for(let huruf of str){  //menggunakan for loop untuk mengiterasi 'huruf' pada setiap karakter pada si string(str)
        if (vowels.includes(huruf)){ //kalau si huruf termasuk dalam salah satu data di array vowels
            jumlah++; //maka jumlahnya di increments, alias akan terus bertambah selama kondisi ifnya true
        }
    }
    return jumlah;
};

console.log(countVowels("Selamat Pagi Duniaa!!", vowels))
console.log(countVowels("aku suka ngoding", vowels))

