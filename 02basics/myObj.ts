

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


//!-----------------
// //^below: can help to pass only the required properties, we use an Alias
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// }



// function createUser(user: User): User{
//   return {name: "", email: "", isActive: true}
// };

// createUser({name:"", email:"", isActive: true});
//!_________________




//!-----------------
//^below: the readonly keyword makes the property immutable
type User ={
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  //^below: the ? makes the property optional
  creditcardDetails?: number
}

let myUser: User = {
  _id: "123",
  name: "John",
  email: "j@j.com",
  isActive: false,
  
};

//^below: Credit Card

type cardNumber = {
  cardNumber: string
};

type cardDate = {
  cardDate: string
};
//^below: the & is a union type
type cardDetails = cardNumber & cardDate & {
  cvv: number
}; 



myUser.email = "t@t.com";

//^below: will throw an error, because _id is immutable
// myUser._id = "afafads"


//!_________________

export {}