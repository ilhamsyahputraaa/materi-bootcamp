// Code from Codewars.com

// Soal:
// anda diberikan array yang berisi string
// Anda harus mengurutkannya menurut abjad (case-sensitive, dan berdasarkan karakter ASCII values) dan kemudian mengembalikan nilai pertama.
// The returned value harus berbentuk string, dan terdapat "***" diantara setiap hurufnya.
// anda tidak diperkenankan untuk menghapus atau menambah elemen pada array.

// expected output dari soal adalah
// Test Pass: output is b***i***t***c***o***i***n as expected 
// Test Pass: output is a***r***e as expected

// Tidak boleh langsung print expected output
// NOTE : berikan comment penjelasan pada baris kode yang dirasa penting
// CLUE : gunakan sorting secara manual, gunakan split dan join

function testCase(i, o){
    if(i === o) return `Test Pass: output is ${o} as expected`
    return `Test Failed: ${i} not equall to ${o}` 
}

// Jawaban:  

// fungsi sortstartnya mengambil array string sebagai argumen dan mengembalikan string pertama dalam array setelah diurutkan, setelah itu digabumgkan setiap karakternya dengan (***)
function sortStart(arr) {
  // Mengurutkan array berdasarkan abjad menggunakan bubble sort
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  // Menggabungkan karakter dalam setiap string dengan ***
  let result = arr[0].split('').join('***');
  return result;
}

  
  console.log(testCase(sortStart(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' ))
  console.log(testCase(sortStart(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'))
  