const student = {
    name: 'Kayla',
    major: 'Computer Engineering',

    schedule: {
        morning: "CS 2250",
        evening: "CS 3310",
    }

}

// destructured assignments
const {name} = student;
console.log();

console.log(student.schedule.morning);

const {morning} = student.schedule;
console.log(morning)
