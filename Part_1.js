// Task 1. Add types to sumNumbers function. 
// Hint: The function must return number
const sumNumbers = (a, b) => {
    return a + b
}

sumNumbers('JS', 5)

// Task 2. Add types to sortByName function
// Hint: use interface and ES6
 function sortByName(a) {
    var result = a.slice()
        result.sort(function(x, y) {
            return x.name.localCompare(y.name)
        })
    return result
 }

 sortByName(5)