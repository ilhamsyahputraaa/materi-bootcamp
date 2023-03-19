// Soal:
// Seorang frontend developer diminta untuk membuat fitur like posting pada suatu web artikel
// API untuk mendapatkan list likes dari suatu artikel mereturn data berbentuk array string.

// Contoh response:
// {
//     id:"HJKdsJbjbj124",
//     status:"200",
//     likes:["Jacob", "Alex"]  
//     createAt: "Monday 27 Sept 2021"    
// }

// Ada pun expected output secara data adalah
// []                                -->  menampilkan "no one like this"
// ["Peter"]                         -->  menampilkan  "Peter like this"
// ["Jacob", "Alex"]                 -->  menampilkan "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  menampilkan "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  menampilkan  "Alex, Jacob and 2 others like this"

// Buatlah function yang menghasilkan/mereturn output sesuai dengan expected output
// Tidak boleh langsung print expected output

// Expected Output :
// no one likes this
// Peter likes this
// Jacob and Alex like this
// Max, John and Mark like this
// Alex, Jacob and 2 others like this

// NOTE : berikan comment penjelasan pada baris kode yang menurut anda penting


// Jawaban:
function likes(names) { // Membuat fungsi 
    return [ //mengembalikan hasil
            'no one likes this', //jawaban pertama jika tidak ada yang menyukai
            `${names[0]} likes this`, // jawaban kedua jika 1 orang menyukai (array index ke 0)
            `${names[0]} and ${names[1]} like this`, //jawaban ketiga jika 2 orang menyukai (array index ke 0 & 1)
            `${names[0]}, ${names[1]} and ${names[2]} like this`, //jawaban keempat jika 3 orang menyukai (array index ke 0,1,2)
            `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
        ] //jawaban jika lebih dari 3 orang menyukai (array index ke 0,1 dan seluruh panjang array dikurang 2 untuk menunjukan sisa orang lain yang ikut menyukai)
        [Math.min(4, names.length)];


}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));