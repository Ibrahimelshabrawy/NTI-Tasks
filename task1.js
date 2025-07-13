let name = prompt("Please Enter Your Name");
let birthYear = prompt("Please Enter Your Birth Date");
let checkStudent = confirm("Are you a student ?");

let currentYear = new Date().getFullYear();
let age = currentYear - parseInt(birthYear);

let category;
if (checkStudent == true) {
  if (age >= 60) {
    category = "Senior.";
  } else if (age >= 18 && age < 59) {
    category = "Adult.";
  } else if (age > 13 && age <= 17) {
    category = "Teen.";
  } else {
    category = "Kid.";
  }

  let message = "Don't forget to study hard!";
  // 1- Console
  console.log(`Hello ${name}, you are ${age} years old.
Category: ${category}
${message}`);

  // 2- Alert
  window.alert(`Hello ${name}, you are ${age} years old.
Category: ${category}
${message}`);

  // 3- DOM
  let finalMessage = `Hello ${name}, you are ${age} years old.
Category: ${category}
${message}`;
  document.getElementById("result").innerText = finalMessage;
}
