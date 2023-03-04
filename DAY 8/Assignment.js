// Assignment Day 8 - Ilhamsyah Putra


let arr = [10,22,67,75,80,66];
let num = 12;


//========================================================


//1. Check if the number 12 is in the array above
console.log("\n==================\n");
console.log("1. Check if the number 12 is in the array above");

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
                           : console.log("\n"+ num + " is not in the array")





//========================================================


//2. sort the array with the bubble sort
console.log("\n==================\n");
console.log("2. sort the array with the bubble sort");

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




//========================================================



//3. sort the array with the selection sort
console.log("\n==================\n");
console.log("3. sort the array with the selection sort");


function selectionSort(inputArr){
    let n = arr.length;

    for (let i = 0; i<n; i++){ 
        let min = i;

        for(let j = i +1; j<n ; j++){

            // console.log('Min Index :' + min);
            // console.log('i2', i);
            // console.log('Arr J' , inputArr[j]);
            // console.log('Min Value', inputArr[min]);
            // console.log('Value:' , inputArr[j] < inputArr[min]);
            // console.log("==============================\n");

            if (inputArr[j]< inputArr[min]){ 
                min = j;
                // console.log ('Min After Validating :', min);
            }

        }

        // console.log('Min :', min);
        // console.log('Last i : ', i);

        if (min != 1) { 

            // console.log ('Swapping Element Array : ', min , i);
            [inputArr[i], inputArr[min]] = [inputArr[min], inputArr[i]] 
        }

        // console.log(arr);
    }

    return inputArr;
}

console.log(selectionSort(arr));


console.log("\n==================\n");