// 1. function declaration
function saySomething(name="CSS"){
    return `1 love ${name}`;

}

console.log(saySomething("HTML"));
console.log(saySomething());

// 2. functions expression
const total = function calculate(num1, num2){
    return num1 + num2;
}

console.log(total(10, 40));

