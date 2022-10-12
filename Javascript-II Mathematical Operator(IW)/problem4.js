// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

input_userName = "abhishek";
input_passWord = "1996";

store_userName = "abhishek";
store_passWord = "1997";

if (input_userName === store_userName) {
  if (input_passWord === store_passWord) {
    console.log("User Logged In Succesfully");
  } else {
    console.log("Incorrect Password");
  }
} else {
  console.log("Invalid Username")
}