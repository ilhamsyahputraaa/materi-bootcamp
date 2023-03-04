// Soal:
// Seorang front-end dev  diminta untuk membuat logic yang dapat merapikan sebuah random String 
// Setiap kata memiliki huruf Capital pada awal hurufnya.
// Contoh  "SeLamAT PAGi semua halOo" menjadi "Selamat Pagi Semua Haloo"
// "HaRI iNi adALAh HarI LibUR " menjadi "Hari Ini Adalah Hari Libur"
// Bantulah front-end tersebut
/* 
Expected Output:
Selamat Pagi Semua Haloo
Hari Ini Adalah Hari Libur
*/
// berikan comment penjelasan pada baris kode yang dianggap penting
// Tidak boleh langsung print expected output

// Jawaban: 

function wordFormatter(word){

    let wordLower = word.toLowerCase(); //meng-convert semua karakter dalam string menjadi lowercase

    const arr = wordLower.split(" "); //memisahkan setiap kata dari string menjadi sebuah array

    for (var i = 0; i < arr.length; i++) { // menggunakan for loop 
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); //mengubah karakter pertama kata dalam array menjadi kapital

    }

    let str2 = arr.join(" "); //menggabungkan kembali kata per kata menjadi sebuah string baru

    return str2;   //menampilkana tau mengembalikan kata2 yang sudah digabungkan

}

console.log(wordFormatter("SeLamAT PAGi semua halOo"));
console.log(wordFormatter("HaRI iNi adALAh HarI LibUR"));