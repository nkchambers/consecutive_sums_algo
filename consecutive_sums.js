// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are included in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsecutiveSums(arr, k) {
    results = [];
    for(let i=0; i<arr.length; i++) {
        //At start of outer loop we reset sum and temp
        console.log("Beginning of new loop, array resets")
        let sum = 0;
        let temp = [];

        // will j always start at [1] ?
        for(let j=i; j<arr.length; j++){
            console.log("arr[j]"+arr[j])
            sum+=arr[j];
            console.log("sum"+sum)
            temp.push(arr[j]);
            console.log("our temporary array is",temp)
            if(sum==k){
                results.push(temp);
                console.log("We just added the array")
                console.log("Here is the results array", results)
                if (sum+arr[j+1]==k){
                    continue;
                }else{
                break;
                }
            }else if(sum<k){
                continue;
            }else if(sum>k){
                break;
            }
        }
    } return results;
}

console.log(findConsecutiveSums([2,5,3,6,7,0,0,23,11], 16));