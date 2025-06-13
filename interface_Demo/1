type user = {
  username: string
}

interface IEmployee extends user{
  age: number;
  salary: number;
  gender: string;
  getDetails(username: string, salary: number, age: number, gender: string): string;
}

const user: IEmployee  = {
  username: "KRANTI",
  age: 20,
  salary: 25000,
  gender: "Male",
  getDetails:(username: string, salary: number, age: number, gender: string): string => {
    return username+age+salary+gender
  }
}

console.log(user)
