// Soal: 
// Seorang Coder diminta untuk mensolve suatu baris deret bilangan  
// deret bilangan tersebut adalah 0,1,1,2,3,5,8,13,21,......
// dari pola yang ada buatlah fungsi yang dapat menampilkan deret bilangan hingga 20 bilangan
// clue: menggunakan perulangan

/*
Expected Output
0
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181
6765
*/

// Tidak boleh langsung print expected output
// berikan comment penjelasan pada baris kode yang dianggap penting

// Jawaban:

function fibonacci(n){
    let n1 = 0, n2 = 1, nextTerm; //membuat variable baru dengan menggunakan 0 dan 1 

    console.log('Fibonacci Series:');

    for (let i = 1; i <= n+1; i++) {
    console.log(n1); //menampilkan n1 atau 0 sebagai angka pertama
    nextTerm = n1 + n2; //angka selanjutnya adalah 0+1 alias 1
    n1 = n2; 
    n2 = nextTerm; 
}
}

fibonacci(20) //perulangan akan dilakukan sebanyak 20kali