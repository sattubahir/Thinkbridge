//Object Practice

// 1. Create an object
const student = {
  name: "Satyajit",
  age: 22,
  course: "JavaScript",
  isActive: true
};

// 2. Access properties
console.log("Student name:", student.name);      // dot notation
console.log("Student age:", student["age"]);     // bracket notation

// 3. Add a new property
student.grade = "A";
console.log("Updated student:", student);

// 4. Loop through properties (for...in)
console.log("Looping with for...in:");
for (let key in student) {
  console.log(key, ":", student[key]);
}

// 5. Object.keys & Object.values
console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student));

// 6. Nested Object Example
const classroom = {
  subject: "Web Development",
  teacher: { name: "Mr.Charan", experience: 10 },
  students: ["Shripad", "Pruthvi", "Satyajit"]
};

console.log("Teacher name:", classroom.teacher.name);
console.log("Students:", classroom.students.join(", "));

// 7. Iterating over nested array
console.log("Listing students:");
classroom.students.forEach((s, i) => {
  console.log(`Student ${i + 1}: ${s}`);
});
