import { studentsList } from "./students.js";

studentsList.map((value)=>{
    let studentDetils= `Student Name and Roll is: ${value.firstName} ${value.lastName}, ${value.roll}`
    console.log(studentDetils);
})
