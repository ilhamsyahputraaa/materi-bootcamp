// Soal:
// You've arrived at a carnival and head straight for the duck shooting tent. Why wouldn't you?
// You will be given a set amount of ammo, and an aim rating of between 1 and 0. No your aim is not always perfect 
// Anyway your task is to calculate how many successful shots you will be able to make given the available ammo and your aim score,
// then return a string representing the pool of ducks, with those ducks shot marked with 'X' and those that survived left unchanged. 

// You will always shoot left to right.

// Example of start and end duck string with two successful shots:
// Current duck condition : |~~~~~22~2~~~~~|
// Then you'll do the shot twice with aim = 1 (perfect aim)..
// Result of the ducks after the shot : |~~~~~XX~2~~~~~|
// With perfect aim, the ducks exactly down by 2 because we only have 2 ammo

// Example of start and end duck string with two shots with aim value 0.5 :
// Current duck condition : |~~~~~22~2~~~~~|
// Then you'll do the shot twice with aim = 0.5 ..
// Result of the ducks after the shot : |~~~~~X2~2~~~~~|
// With aim value 0.5, the ducks only down by 1

// All inputs will be correct type and never empty

// aim 
// 4 * 0.64 = 2,...
// 9 * 0.22 = 1,8...
// 6 * 0.4 =  2,4

// Program Example :
// 1. input : duckShoot(4, 0.64, '|~~2~~~22~2~~22~2~~~~2~~~|')
//    output : '|~~X~~~X2~2~~22~2~~~~2~~~|'
// 2. input : duckShoot(9, 0.22, '|~~~~~~~2~2~~~|')
//    output : '|~~~~~~~X~2~~~|'
// 3. input : duckShoot(6, 0.4, '|~~~~~22~2~~~~~|')
//    output : '|~~~~~XX~2~~~~~|'

// Expected Output
// |~~X~~~X2~2~~22~2~~~~2~~~|
// |~~~~~~~X~2~~~|
// |~~~~~XX~2~~~~~|

// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pada baris kode yang dirasa penting
// CLUE : hasil perkalian dibulatkan ke bawah, manfaatkan perulangan

// Jawaban:
function duckShoot(ammo, aim, ducks) {
    let ducksArray = ducks.split('');
    let successfulShots = 0;
    for (let i = 0; i < ducksArray.length; i++) {
      if (ducksArray[i] === '2' && Math.random() < aim && successfulShots < ammo) {
        ducksArray[i] = 'X';
        successfulShots++;
      }
    }
    return ducksArray.join('');
  }
  

console.log(duckShoot(4, 0.64, '|~~2~~~22~2~~22~2~~~~2~~~|'));
console.log(duckShoot(9, 0.22, '|~~~~~~~2~2~~~|')); 
console.log(duckShoot(6, 0.4, '|~~~~~22~2~~~~~|')); 

