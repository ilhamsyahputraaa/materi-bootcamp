// Soal:
// berikan spasi di antara kata yang terdapat pada string berikut
//expected output : 
// Selamat Pagi Dunia
// Aku Suka Javascript

// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dirasa penting
// CLUE : gunakan perulangan dan pengkondisian

// Jawaban:
function manipulateString(str) {
    let tambahSpasi=" " //membuat string baru
    let kapitalKah = false; //membuat kondisi

    for (let i = 0; i < str.length; i++){ 
        if (!kapitalKah && str[i] == str.toUpperCase()[i]){ 
            tambahSpasi = tambahSpasi + " ";
            kapitalKah = true;
        }
        else{
            kapitalKah = false;
        }
        tambahSpasi = tambahSpasi + str[i];
}
return tambahSpasi;
}

console.log(manipulateString("SelamatPagiDunia"))
console.log(manipulateString("AkuSukaJavascript"))

