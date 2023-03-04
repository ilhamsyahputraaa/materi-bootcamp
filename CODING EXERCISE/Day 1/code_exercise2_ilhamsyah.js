Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
  
let array = [31, 9, 54, 11, 43, 6, 67]

console.log(`Max value is: ${array.max()}` +
  `\nMin value is: ${array.min()}`);