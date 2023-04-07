function addTwo(num: number): number {
  return num + 2;
  
  //^ above is a number, below is a string
  //^ we can make it stricter by adding : number after the closing parenthesis of an argument.-

  // return "hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

const signUpUser = (
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) => {};

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myValue = addTwo(5);
getUpper("hello");

signUpUser("Olu", "olutakinyemi@gmail.com", "123456", true);

loginUser("O", "h@gmail.com");

export {};
