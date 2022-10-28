class Courses {
  constructor(courseId, courseInstructor, courseName, courseTime, coursePrice) {
    this.courseId = courseId;
    this.courseInstructor = courseInstructor;
    this.courseName = courseName;
    this.courseTime = courseTime;
    this.coursePrice = coursePrice;
  }
  //Registration
  register() {
    console.log("Kursa kayıt olundu.");
  }

  showCourses() {
    console.log(this);
  }
  showCourses() {
    console.log("Courses :  ", this);
  }
}

//Courses
const course1 = new Courses(1, "Engin Demirog", "C# + ANGULAR", 2, 0);
const course2 = new Courses(2, "Engin Demirog", ".NET", 2, 0);
const course3 = new Courses(3, "Engin Demirog", "JAVA", 2, 0);
const course4 = new Courses(4, "Engin Demirog", "JavaScript", 2, 0);
const course5 = new Courses(
  5,
  "Engin Demirog",
  "Programlamaya Giriş için Temel Kurs",
  2,
  0
);
const course6 = new Courses(6, "Engin Demirog", "JAVA + REACT", 2, 0);

// Create Course
function createCourse(
  courseId,
  courseInstructor,
  courseName,
  courseTime,
  coursePrice
) {
  this.courseId = courseId;
  this.courseInstructor = courseInstructor;
  this.courseName = courseName;
  this.courseTime = courseTime;
  this.coursePrice = coursePrice;
}

createCourse.prototype.showCourses = function () {
  // console.log(this);
};
createCourse.prototype.showCourses = function () {
  // console.log("tanit2", this);
};

//Student
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// Add Student
function addStudent(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

//Instructor Class
class Instructor {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

//Category Class
class Category {
  constructor(courseType) {
    this.courseType = courseType;
  }
}

let instructor = {
  firstName: "Engin",
  lastName: "Demirog",
};
