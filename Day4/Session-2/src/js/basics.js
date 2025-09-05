let n = 10;
console.log(n);//output:10
console.log(typeof(n));//number

let a = 20;
let b = 10;
let c = a + b;
let str4 ="hello";
console.log(c);//30
console.log(c+a);//50
console.log(a+str4);//20hello

let numbers = [1,2,3,4,5,6,7];
console.log(numbers);//output:1,2,3,4,5,6,7
console.log(numbers[numbers.length - 1]); //Output :7

//String
   //String concatination
let str1= "Think";
let str2 ="bridge";
let str3 = str1 + str2;
console.log(str3); //output:Thinkbridge

console.log(str3.length);//output:11
console.log(str3[5]);//output:b
console.log(str3.charAt(8));//Output:d
console.log(str3.toLocaleLowerCase());//Output:thinkbridge
console.log(str3.toLocaleUpperCase());//Output:THINKBRIDGE

//Split String into Array 
let word = str3.split(" ");
console.log(word); //Output:[ 'Thinkbridge' ]

//Array 

   //creating arrays
   let skills =["HTML","CSS","Js","SQL"];
   let nums=[1,2,3,4];
 
   console.log(skills[3]);//Output:SQL
   console.log(skills.length);//Output:4
   skills.push("Java"); // push element in array adds to end 
   console.log(skills);//Output:[ 'HTML', 'CSS', 'Js', 'SQL', 'Java' ]
  skills.unshift("Coding");//adds to start
  console.log(skills);//Output:[ 'Coding', 'HTML', 'CSS', 'Js', 'SQL', 'Java' ]
    
  //Remove Elements from Array 
     // to remove last element 
  skills.pop();
  console.log(skills);//Output:[ 'Coding', 'HTML', 'CSS', 'Js', 'SQL' ]

  // to remove First element from array
  skills.shift();
  console.log(skills);//Output:[ 'HTML', 'CSS', 'Js', 'SQL' ]

  //to find index
  console.log(skills.indexOf("CSS"));//Output:1

  // To check Presence 
  console.log(skills.includes("python"));//Output:false

  //joining Array to String 
  console.log(skills.join(", "));//Outout:HTML, CSS, Js, SQL

  //Loops

  for(let i = 0; i < 5; i++){
    console.log(i);  //Output:0,1,2,3,4
  }

  // print even numbers from 2 to 20 
  for(let i = 2; i <= 10 ; i += 2){
    console.log(i);//Output:2,4,6,8,10
  }

  // if& break
   for(let i =1; i < 10; i++){
    if(i == 5)
        break;
    console.log(i);//Output:1234
   }

   // to skip 
   for(let i = 1; i <= 5; i++){
    if(i == 3) 
        continue;
    console.log(i);//Output:1245
   }
  // Nested for loop
   for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// Loop with decrement
for (let i = 5; i > 0; i--) {
  console.log(i); // 5 4 3 2 1
}

// Conditionals

//Simple if statement
let age = 20;
if (age >= 18) {
  console.log("You are an adult");
}
// Output: You are an adult

//If-else statement
let score = 75;
if (score >= 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}
// Output: Pass

//If-else if-else chain
let rating = 4;
if (rating <= 2) {
  console.log("Bad rating");
} else if (rating >= 4) {
  console.log("Good rating!");
} else {
  console.log("Average rating");
}
// Output: Good rating!

// Multiple else if conditions
let day = "Tuesday";
if (day === "Monday") {
  console.log("Start of work week");
} else if (day === "Friday") {
  console.log("End of work week");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Weekend!");
} else {
  console.log("Midweek day");
}
// Output depends on the value of day

// Nested if statements
let num = 15;
if (num > 0) {
  if (num % 2 === 0) {
    console.log("Positive even number");
  } else {
    console.log("Positive odd number");
  }
} else {
  console.log("Non-positive number");
}
// Output: Positive odd number

//Using logical operators
let temp = 30;
if (temp > 0 && temp < 35) {
  console.log("Pleasant weather");
} else {
  console.log("Extreme weather");
}
// Output: Pleasant weather
