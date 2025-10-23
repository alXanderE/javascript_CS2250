//1 add items to the end of the array using push()
const numbers = [3, 4, 5, 7, 6];
console.log(numbers);
numbers.push(10);
console.log(numbers);
numbers.push(11, 12);
console.log(numbers);

// 2 add itmes to the beginning of the array using inshift()
numbers.unshift(1);
console.log(numbers);
numbers.unshift(-1, 0)
console.log(numbers);

numbers.splice(3, 0, -10, -20);
console.log(numbers);

//console.log(numbers(2,6));
const anotherNumbers = numbers.slice();
console.log(numbers);
console.log(anotherNumbers);

const arr1 = [[1], [2]];
const arr2 = arr1.slice();
console.log(arr1);
console.log(arr2);

arr2[0].push(100);
console.log(arr1);
console.log(arr2);


