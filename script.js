class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, rollNo, course) {
    super(name, age); 
    this.rollNo = rollNo;
    this.course = course;
  }

  displayStudent() {
    this.displayInfo();
    console.log(`Roll No: ${this.rollNo}, Course: ${this.course}`);
  }
}

class Teacher extends Person {
  constructor(name, age, empId, subject) {
    super(name, age); 
    this.empId = empId;
    this.subject = subject;
  }

  displayTeacher() {
    this.displayInfo();
    console.log(`Employee ID: ${this.empId}, Subject: ${this.subject}`);
  }
}

const student1 = new Student("Rohan", 20, "CS101", "Computer Science");
const teacher1 = new Teacher("Dr. Sharma", 45, "T202", "Data Structures");

console.log("Student Details:");
student1.displayStudent();

console.log("\nTeacher Details:");
teacher1.displayTeacher();
