// data types

// code runner

// strings
// numbers
// booleans

// ES5 ECMAScript 5

// ES6

// let
// const

// var myVar = 'my string' 
// var myNum = 10
// var myBool = true

// mutable variable
// let myString = 'hello world'

// immutable
// const string2 = 'hello again'

// data structures

// arrays
let arr = [3,'string',false,true,201]

const [item1,item2, ...restOfItems] = arr




console.log(item1,item2)

restOfItems.new = 'new field'

console.log('everything else:',restOfItems)
console.log(arr)

// objects

const obj = {
    name:'person',
    city:'somewhere',
    dev:true,
    languages:['python','java','javascript']
}

const {name,city,dev,languages} = obj



// console.log(name,city)




// destructuring


// obj.name = 'different person'

// obj.newField = "here's a new field"

// console.log(obj)



// console.log(obj.languages[1])
// console.log(obj['name'])

// function myFunction(a,b){
//     console.log(a*b)
// }

// myFunction(2,10)
// myFunction(3,8)

// ES6 Arrow Functions

// implicit return
const myArrowFunction = (a,b) => {
    console.log(a*b)
    return a*b
}

myArrowFunction(3,100)





