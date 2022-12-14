// attributes -- variables associated with the class instance
// methods -- functions associated with the class instance


class User {
    // constructs all attributes
    constructor(name,email,password){
        this.name = name
        this.email = email
        this.password = password
        // this.skill = 'mern'
    }
    // method to print out attributes
    printOut(){
        console.log(`Hi my name is ${this.name} and my email is ${this.email}`)
    }
}

class Student extends User {
    constructor(name,email,password,stack){
        super(name,email,password)
        this.stack = stack
    }

    printInfo(){
        console.log(`${this.name} is taking the ${this.stack} stack`)
    }
} 

const user1 = new User('Person','email.com','12345')
const student1 = new Student('Student1','student@gmail.com','12345','MERN')

// user1.printOut()
student1.printOut()




