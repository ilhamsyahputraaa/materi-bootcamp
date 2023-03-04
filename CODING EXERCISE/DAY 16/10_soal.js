// Soal:
// Terdapat suatu kumpulan string yang yang susunan kalimat nya terbalik
// Tugas teman teman adalah mengubah kalimat tersebut menjadi kalimat yang benar

// "drow olleh"  menjadi "Hello word."
// "eko atad" menjadi menjadi "Data oke."
// "gnitset tinu" menjadi "Unit testing."

// Tidak boleh langsung print expected output

// Expected Output:

// Hello word. true
// Data oke. true
// Unit testing. true

// NOTE : Berikan comment penjelasan pada baris kdoe yang menurut anda penting
// gunakan perulangan/kode lain dan array untuk menampung kata


// Jawaban:
function unitTest(input, output) {
    console.log(output, input === output)
}


function reverse(str) {
    let kata = ""; // membuat string kosong
    for (let i = str.length - 1; i >= 0; i--) { //membuat loop decrement agar memulai loop di array index paling akhir
        kata += str[i];
    }

    //setelah dilakukan reverse, buat variable baru dengan menconvert huruf pertama menjadi uppercase dan menambahkan titik di belakang string.
    const newStr = `${kata[0].toUpperCase()}${kata.slice(1)}${"."}`;
    return newStr; //mengembalikan hasil yang sudah direverse, diconvert hurup awal dengan uppercase, dan ditambah titik di akhir
}

//soalnya menjebak wkwkw okedeh
//Ilhamsyah putra - front end batch 12

unitTest(reverse("drow olleh"), "Hello word.")
unitTest(reverse("eko atad"), "Data oke.")
unitTest(reverse("gnitset tinu"), "Unit testing.")