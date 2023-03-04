
// Soal:
// Hilangkan Karakter Berulang yang terdapat pada String
// Clue : menggunakan perulangan
// Tidak boleh langsung print expected output

/*
Expected Output:
[ 'A', 'B', 'C', 'D', 'F', 'G' ]
[ 'R', 'O', 'A', 'Q', 'P' ]
*/


function removeDuplicates(str) {
    const result = []; 
    for (let i of str) { 
      let noRepeat = true;
  
      for (let j of result) { 
        if (i === j) { 
          noRepeat = false;
          break;
        }
      }
  

      if (noRepeat) { 
        result.push(i); 
      }
    }
  
    return result;
  }
  
  console.log(removeDuplicates("AAAABBBCDFFFDAABBBCG"));
  console.log(removeDuplicates("RRRRROOOAAQPPP"));

