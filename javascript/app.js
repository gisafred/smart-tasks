let student ={
    name:"Gisa",
    age:19,
    class:"Y3D"
};

// 2. Display Student Info

console.log("Student Info: ");
console.log(student);

// 3. Access properties

console.log("Name", student.name);
console.log("Class:", student.class);

// 4. Add a new property

student.address = "rwanda";
console.log("After adding a new property:", student);

//5. Updatin a property

student.age = 20;
console.log("After updating: ",student);

// 6. Deleting a property

delete student.class;
console.log("After deleting: ", student);

// 7. looping over all properties

console.log("All properties");

for (let key in student){
    console.log(key + " : " +student[key] );
    
}

// 8. Storing multiple student 

let students = [];

students.push(student);
students.push({name:"Ruth",age:12 ,address:"TZ"});

//9. all students

console.log("All students", students);








