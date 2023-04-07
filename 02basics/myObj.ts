

// const User = {
//   name: "John",
//   email: "john@gmail.com",
//   isActive: true
// }

// function createUser({name: string, isPaid: boolean}){};

// //^below: is a weird "error" of js/ts, but theres a better way to do it
// let newUser = {name: "Olu", isPaid: false, email: "h@h.com"};

// createUser(newUser);

// // function createCourse():{}{
// //   return {name: "react", price: 1000};
// // }

// function createCourse():{name: string, price: number}{
//   return {name: "react", price: 1000};
// }
//^below: can help to pass only the required properties
type User = {
  name: string;
  email: string;
  isActive: boolean;
}



function createUser(user: User): User{
  return {name: "", email: "", isActive: true}
};

createUser({name:"", email:"", isActive: true});

export {}