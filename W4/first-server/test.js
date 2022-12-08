// const num = 5

// console.log(num.toString(2))

// let i=0
// while(i < 100){
//     console.log(i.toString(2))
//     i++
// } 

let A = 64
let B = 20

//  32 16 8 4 2 1
//   1  0 0 0 1 0
    //  0  1 1 1 0 1

a = A.toString(2)
b = ~B.toString(2)

console.log("binary number:",a)

console.log("One's complement:",~a)

