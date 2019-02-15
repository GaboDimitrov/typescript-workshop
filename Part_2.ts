 // Task 1. 
// Create tsconfig file (tsc --init). By default the file will be created on strict mode 
// Fix the problems
 function countLines(text?: string[]): number {
    let count: number;
    for (const line of text) {
        if (line.length !== 0) {
           count = count + 1;
        }
    }
    return count;
}
 
let a = countLines(['one', 'two', '', 'three'])
let b = countLines(["hello", null, "world"])
let c = countLines()

// Task 2.
type Shape = 
    { kind: 'circle', radius: number} |
    { kind: 'rectangle', width: number, heigth: number} |
    { kind: 'square', size: number}

function getArea(shape: Shape) {
    switch (shape.kind) {
        case 'circle': 
            return Math.PI * shape.radius **2
        case 'rectangle':
            return shape.width * shape.heigth
        case 'square': 
            return shape.size ** 2
    }
    shape
    throw new Error('Invalid shape')
}

const shape: Shape = {kind: 'circle', radius: 10}
const area = getArea(shape)