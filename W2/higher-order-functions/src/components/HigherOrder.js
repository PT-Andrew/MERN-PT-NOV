// forEach, map, filter, reduce

// for(let i=0;i<arr.length;i++){
//     // string interpolation
//     console.log(`The number at index ${i} is ${arr[i]}`)
// }

// return undefined
// arr.forEach((num,index)=>{
//     console.log(`The number at index ${index} is ${num}`)
// })


// for(let i=0;i<arr.length;i++){
//     arr[i] = arr[i]*2
// }

// return a new copy of the array
const newArr = arr.map((num,index)=> {
    num * 2
})

// console.log(newArr)

// const newArr = []
// for(let i=0;i<arr.length;i++){
//     if(arr[i] % 2 == 0){
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr)

// callback function
const newArr2 = arr.filter((num)=>{
    return num % 2 == 0
})

// console.log(newArr)

// const arr = [123,4,5,2,4]

const newArr3 = arr.reduce((acc,num,index)=>{
    return acc + num
})

// console.log(newArr)













