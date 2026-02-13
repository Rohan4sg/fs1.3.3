class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, rollNo, course) {
    super(name, age);
    this.rollNo = rollNo;
    this.course = course;
  }

  displayStudent() {
    return `${this.displayInfo()}<br>Roll No: ${this.rollNo}, Course: ${this.course}`;
  }
}

class Teacher extends Person {
  constructor(name, age, empId, subject) {
    super(name, age);
    this.empId = empId;
    this.subject = subject;
  }

  displayTeacher() {
    return `${this.displayInfo()}<br>Employee ID: ${this.empId}, Subject: ${this.subject}`;
  }
}

const student1 = new Student("Rohan", 20, "CS101", "Computer Science");
const teacher1 = new Teacher("Dr. Sharma", 45, "T202", "Data Structures");

document.body.innerHTML += "<h3>Student Details</h3>";
document.body.innerHTML += student1.displayStudent();

document.body.innerHTML += "<h3>Teacher Details</h3>";
document.body.innerHTML += teacher1.displayTeacher();
