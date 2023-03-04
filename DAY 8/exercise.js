let arr = [28,82,23,32,9,19];
let num = 19;

//1. Check if the number 19 is in the array above

console.log("\n==================\n");

function sequentialSearch(arr, data){
    for (let i = 0; i <arr.length; i++) {
        console.log(arr[i] + " " + data);
        if (arr[i] == data){
            return true;
        }
    }
    return false;

}

sequentialSearch(arr, num)? console.log("\n"+ num + " is in the array")
                           : console.log("\n"+ num + "is not in the array")




console.log("\n==================\n");


//2. sort the array with the bubble sort
function bubleSort (arr){
    for (let i = 0; i<arr.length; i++){

        for (let j = 0; j<(arr.length-i-1); j++){

            if (arr[j]> arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
            
        }
    }
    console.log("Buble Sort-ed = " + arr);
};

bubleSort (arr);

console.log("\n==================\n");