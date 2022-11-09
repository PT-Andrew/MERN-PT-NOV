let arr = [1,427,86,84,900,3,456,2]

// Binary search is O(Logn) because it takes exactly half of n computations to arrive at the answer
// Binary Search only works on a sorted array.

let newArr = arr.sort((a,b)=>a-b)

const binarySearch = (arr,num) => {
    let start = 0
    let end = arr.length - 1

    while(start < end){
        let mid = Math.floor(start + end / 2)
        if(arr[mid] == num){
            return true
        } else if(arr[mid] < num){
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return false
}

console.log(binarySearch(newArr,83))

const recursiveBinarySearch = (arr,num,start,end) => {
    // base case
    if(start > end)return false

    let mid = Math.floor((start + end) / 2)

    if(arr[mid] === num) return true

    if(arr[mid] < num){
        return recursiveBinarySearch(arr,num,mid + 1, end)
    } else {
        return recursiveBinarySearch(arr,num,start,mid - 1)
    }
    return false
}

console.log(recursiveBinarySearch(newArr,84,0,newArr.length-1))