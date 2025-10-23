const array = [[100,2],[3,4]]

const flatArray = array.reduce((acc, curr) => {

    for(let value of curr){
        acc.push(value);
    }
    return acc;
}, []);

console.log(flatArray);


const groupStudentsByAge = students.reduce( (acc, student) => {
    if(acc[student.age]){
        acc[student.age].push(student);
    } else{
        acc[student.age] = [student];
    }
    return acc;
}, {})