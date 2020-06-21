// chapter #21
// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name

// var Fname = prompt("enter first name")
// var Lname = prompt("enter last name")
// document.write(Fname + ' ' + Lname)

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// var a = prompt("enter your favrite mobile")
// document.write(a.length)

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser 

// var ages = [pakistan];


// function myFunction() {
//    ages.findIndex(n);
// }
// myFunction()

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('Hello World', 'i'));


// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. 

// var str = "Hyderabad";
// var res = str.replace("Hyder", "Islam");
// document.write(str + ' ' + "afte change"+ "<br>")
// document.write(res)

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.

// var message = ("Ali and Sami are best friends They play cricket and football together.");
// document.write(message.replace("and" , "&"))

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var num1 = 472;
// var num2 = '472';
// if (num1 === num2) {
//     document.write("number");
// } else {
//     document.write("string");
// }

// 10. Write a program that takes user input. Convert and show the input in capital letters.

// var a = prompt("enter a word in lowercase")
// document.write("you enter " + a + "<br>")
// document.write("In uppercase" + ' ' +  a.toUpperCase())


// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
 
// var a = prompt("enter user name")
// if(a === "@" || "!" || "." || "," ){
//     alert("invalid")

// }else{
//     alert(a)
// }

// 15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// var a = prompt("Enter password")
// function(password) {
//     var lowerCaseLetters = /[a-z]/g;
//     if(a.match(lowerCaseLetters)) { 
//       a.remove("invalid");
//       a.add("valid");
//     } else {
//       a.remove("valid");
//       a.add("invalid");
//   }
//   var upperCaseLetters = /[A-Z]/g;
//   if(a.match(upperCaseLetters)) { 
//     a.remove("invalid");
//     a.add("valid");
//   } else {
//     a.remove("valid");
//     a.add("invalid");
//   }
//   var numbers = /[0-9]/g;
//   if(a.match(numbers)) { 
//     a.remove("invalid");
//     a.add("valid");
//   } else {
//     a.remove("valid");
//     a.add("invalid");
//   }
//   if(a.length >= 8) {
//     a.remove("invalid");
//     a.add("valid");
//   } else {
//     a.remove("valid");
//     a.add("invalid");
//   }
//   function(password)

// 16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.
// var str = '“University of Karachi”'
// var array = str.split(" ",1);
// document.write(array);

// Write a program to display the last character of a user input.
// var i = prompt("enter a word")
// var str
// if(i == i.length() - 1){
//     alert(str.CharAt(i))
// }
// if (i.charAt(i) == ' ') { 
//     alert(i.charAt(i - 1) 
//                      + " "
//                      + i.charAt(i + 1)); 
// }

// chapter #26
// 1. Write a program that takes a positive integer from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number

// var a = prompt("enter a +ve number")
// document.write("Number:" + ' ' + a + "<br>")
// document.write("round off value:" + ' '  + Math.round(a) + "<br>")
// document.write("floor value:" + ' '  + Math.floor(a) + "<br>")
// document.write("ceil value:" + ' '  + Math.ceil(a) + "<br>")

// 2. Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number
// var a = prompt("enter a -ve number")
// document.write("Number:" + ' ' + a + "<br>")
// document.write("round off value:" + ' '  + Math.round(a) + "<br>")
// document.write("floor value:" + ' '  + Math.floor(a) + "<br>")
// document.write("ceil value:" + ' '  + Math.ceil(a) + "<br>")

// 3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// var a = prompt("Enter a number to find its absolute value")
// document.write("Absloute value of" + ' ' + a +' ' + "is" + ' ' + Math.abs(a))

// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.
// var a = prompt("enter a number")
// document.write(Math.floor( Math.random() * 6 ))

// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

// var heads = 0
// var tails = 0

// function toss(){

//     if(Math.random() >  0.5){
//     alert("heads")
// }else {
//     alert("tails")
// }
// }

// toss();

// 6. Write a program that shows a random number between 1 and 100 in your browser. 

// var r = Math.floor(Math.random() * 100) + 1;
// document.write("the number between 1 to 100 is :" + r)

// var a = prompt("enter your weight in kg")
// document.write("The weight of user is" + ' ' + a)

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 

// var r = Math.floor(Math.random() * 10) + 1
// var a = prompt("enter a number between 1 to 10")
// if(a === r){
//     alert("you win")
    
// }else{
//     alert("you lose")

// }

// chapter 31 to 34

//  1. Write a program that displays current date and time in your browser

// var d = new Date();
// document.write(d)

// 2. Write a program that alerts the current month in words. For example December.

// var d = new Date() 
// var n = d.getMonth();
// if(n === 1){
//     alert("january")
// }else if(n === 2){
//     alert("february")
// }else if(n === 3){
//     alert("march")
// }else if(n === 4){
//     alert("april")
// }else if(n === 5){
//     alert("may")
// }else if(n === 6){
//     alert("june")
// }else{
//     alert("fail")
// }

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date(dateString);
var dayName = days[d.getDay()];
alert(dayName)