/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  // console.log all students with marks over 50 using the `.map` function.
  arr
    .filter(student => student.marks > 50)
    .map(student => console.log(`Name: ${student.name}, Marks: ${student.marks}`));
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  //console.log all the students who have marks over 50 using the `.forEach` function.
  arr.forEach(student => {
    if (student.marks > 50) {
      console.log(`Name: ${student.name}, Marks: ${student.marks}`);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  // In this function, create another student object and append it to the array.
  // For example, push this in the array - `{id:4,name:"susan",age:"20",marks:45}` 
  //and then console.log it.

  // Create a new student object
  const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };

  // Append the new student object to the array
  arr.push(newStudent);

  // Log the newly added student object
  console.log("Newly added student:", newStudent);

}

function removeFailedStudent() {
  //Write your code here, just console.log
  //In this function, remove the student who has failed, i.e. with less than 50 marks.
  // console.log the changed array.

  // Filter out students who have failed (marks less than 50)
  arr = arr.filter(student => student.marks >= 50);

  // Log the changed array
  console.log("Updated array after removing failed students:", arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  //Create another array with 3 student objects similar to the one in the given array 
  //but with different ids and all other parameters.

  // Create another array with 3 student objects
  const newStudents = [
    { id: 5, name: "durga", age: "27", marks: 90 },
    { id: 6, name: "prasad", age: "28", marks: 75 },
    { id: 7, name: "durga prasad", age: "28", marks: 80 }
  ];

  // Concatenate the arrays using the spread operator
  const concatenatedArray = [...arr, ...newStudents];

  // Log the concatenated array
  console.log("Concatenated array:", concatenatedArray);
}
