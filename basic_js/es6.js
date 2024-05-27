const numbers = [8, 9, 5, 10]
const student = {
    name: 'shakil',
    age: 23,
    movies:['king','abc']
}
// 1. template string
const about = `my name is ${student.name} and age is ${student.age} also like movies ${student.movies[1]}`
console.log(about);

// 2. arrow function
const getfiftyfive = () => 55
console.log(getfiftyfive());
const addsixtyfive = num => num + 65
const input = addsixtyfive(35)
console.log(input);
const isEven = x => x % 2 == 0;
const evenOdd = isEven(35)
if (evenOdd) {
    console.log("35 is even");
}
else {
    console.log("35 is odd");
}

const addThree = (x, y, z) => x + y + z;

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum
}

// spread operator
const newNumbers = [...numbers]
const currentNumber=[...numbers,100]
numbers.push(90)
numbers.push(90)
numbers.push(90)
numbers.push(90)
console.log(numbers);
console.log(newNumbers);
console.log(currentNumber);