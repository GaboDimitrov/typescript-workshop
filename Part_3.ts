interface UserInterface {
    age: number
    getName(): string
    getEmail(): string
}

// Task 1. Create User class that implements userInterface
// Params: name, email, age
const newUser = new User()

newUser.age // user.age
newUser.name // Error
newUser.getName() // user.name
newUser.name // Error
newUser.getEmail() // user.email

// Task 2
// Create Member class, which extends User class
// Make User constructor protected
// Params: id, name, email, age
const newMember = new Member()

newMember.id // member.id

newMember.getName() // user.name
newMember.name // Error
newMember.getEmail() // user.email