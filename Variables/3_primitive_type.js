//1. string
let fname = "Bronco";
let lname = "CPP";
let fullName = `${fname} + ${lname}`;
console.log(typeof fname);

//2. number
let evenNumber = 10;
let pi = 3.14;
console.log(typeof evenNumber);

//3. boolean
let hasTicket = true;
let passExam = false;
console.log(typeof passExam);

//4. undefined
let index;
console.log(typeof index);

//5. null
let idx = null;
console.log(typeof idx);

//----- Object ------
let userCustomizeChoice = "customized username"
let cppCourse = {
    name: 'CS 2250',
    'hours': 3,
    semester: 2025,
    'school name': "Cal Poly Pomona",
    [userCustomizeChoice]: "User name",
}
// access object's key's value
console.log(cppCourse.name);
console.log(cppCourse['hours']);
console.log(cppCourse["school name"]);
console.log(cppCourse[userCustomizeChoice]);

cppCourse.name = 'Web Development';
cppCourse["school name"] = "CPP";

//adding new key-value pair
cppCourse['location'] = "Pomona, CA";
cppCourse['LOCATION'] = "CA, USA";
console.log(cppCourse);


//delete a key-value pair
delete cppCourse['LOCATION'];
console.log(cppCourse);




//6. symbol
const secretKey = Symbol();

//