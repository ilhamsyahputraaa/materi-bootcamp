// Soal: 
// Pada suatu toko terdapat beberapa kaos kaki
// warna biru dinyatakan dengan 1
// warna hijau dinyatakan dengan 3
// warna hitam dinyatakan dengan 5
// warna merah dinyatakan denga 8
// koleksi kaos kaki pada toko dinyatakan dengan array [1, 1, 3, 3, 5, 5, 5, 5]
// disebut sebagai sepasang kaos kaki apabila kaos kaki tersebut memiliki pasangan
// contoh :
// [1,3,3,3] => pada array ini, ada 1 kaos kaki biru, dan 3 kaos kaki hijau. Maka hasilnya ada sepasang(2) kaos kaki hijau dan masing2 1 kaos kaki biru dan 1 kaos kaki hijau lainnya yang tidak memiliki pasangan

// Expected Output :
// 4
// 2

// Berapa pasang kaos kaki kah yang tersedia?
// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pad baris kode yang dirasa penting
// Clue : Gunakan array, perulangan dan pengkondisian

// Jawaban:
function sockMerchant(word) {
// write your code here
}

function sockMerchant(word) {
    let jumlahPasangan = 0; //inisiasi variable dengan 0
    let hitungWarna = {}; //inisiasi variable dengan objek kosong
    
    // menghitung jumlah kemunculan tiap warna dan menyimpan dalam objek hitungWarna
    for (var i = 0; i < word.length; i++) { //pengecekan kemunculan tiap warna dalam array word
      if (hitungWarna[word[i]] === undefined) {  //jika tidak ditemukan warna yang sama di array index tsb
        hitungWarna[word[i]] = 1; //maka warna tsb akan hanya terhitung 1
      } else {
        hitungWarna[word[i]]++; //jika ditemukan, maka jumlah key object akan diincrement (bertambah 1)
      }
    }
    
    // menghitung jumlah pasang kaos kaki berdasarkan jumlah kemunculan tiap warna
    //jumlah pasangan dihitung dengan jumlah kaoskaki/2 lalu dibulatkan kebawah (karna jika tidak genap tidak akan terhitung sebagai pasangan)
    for (let warna in hitungWarna) {
      let jumlahKaosKaki = hitungWarna[warna];
      let jumlahPasanganWarna = Math.floor(jumlahKaosKaki / 2);
      jumlahPasangan += jumlahPasanganWarna;
    }
    
    return jumlahPasangan;
}
  
console.log(sockMerchant([1, 1, 3, 3, 5, 5, 5, 5]))
console.log(sockMerchant([1, 8, 3, 3, 5, 5, 5]))


