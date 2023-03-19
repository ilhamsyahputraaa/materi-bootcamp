// sequencial

// function sequentialSearch(arr, data){
//     for (let i = 0; i< arr.length; i++){ //ini pengulangan untuk mengeluarkan semua data
//         console.log(arr[i] + " " + data); // ini untuk pemunculan
//         if (arr[i] == data) { // ini untuk pengecekan
//             return true;
//         }
//     }
//     return false;
// }


// let num = 27;
// let nums = [20,21,90,46,25,12];

// sequentialSearch (nums, num) ? console.log(num + " is in the array.")
//             : console.log(num + "is not in the array.")




//=====================================================

// binary search
let binarySearch = function (arr, x) {


    let start = 0, end = arr.length-1;


    while (start <= end){

        console.log("start", start);
        console.log("end", end);


        // Find the mid index / median
        let mid = Math.floor((start + end)/2);
        console.log('Median Index : ', mid);
        console.log('Median Value : ', arr[mid]);
        console.log("condition If : ", arr[mid] === x);
        console.log("condition Else If : ", arr[mid] < x);
        console.log("------------------------------------\n");


        // If element is present at mid, return True
        if (arr[mid] === x) return true;


        // Else look in left or right half accordingly
        else if (arr[mid] < x)
             start = mid + 1;
        else
             end = mid - 1;
    }
    return false;
}

let arr = [1,3,7,8,9];
let num = 0;

// Ternary Operator
binarySearch(arr,num) ? console.log("Element found!")
                : console.log("Element not found!");
