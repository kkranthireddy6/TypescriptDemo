type Course = {
  coursename: string
}

interface IStudent {
  name: string;
  age: number;
  salary: number;
  getStudentDetails(): string;
}

const student: IStudent = {
  name: "kranti",
  age: 20,
  salary: 25400,
  getStudentDetails: function(): string  {
    return `${this.name}  ${this.age} ${this.salary}`
  } 
}
console.log(student.getStudentDetails())

