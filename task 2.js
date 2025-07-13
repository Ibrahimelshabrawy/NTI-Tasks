let name = prompt("Please Enter Your Name");
let age = prompt("Please Enter Your Age");
let yearsOfExperience = prompt("Please Enter Your Years Of Experience");
let selfRate = prompt("Please Enter Your self-rating from 1-10");
let salary = prompt("Please Enter Your Salary"); // عملته عشان اعرف احسب البونص

let jobCategoray;
if (yearsOfExperience <= 2 && yearsOfExperience >= 0) {
  jobCategoray = "Junior";
} else if (yearsOfExperience > 2 && yearsOfExperience <= 5) {
  jobCategoray = "Mid-Level";
} else if (yearsOfExperience > 5 && yearsOfExperience < 10) {
  jobCategoray = "Senior";
} else {
  jobCategoray = "Expert";
}

let performance;
switch (
  true // فبالتالي لازم نستخدم الشرط ب ترو دائما و اول حالة من الحالات اللي تحت دي هتطلع ب ترو هتتقارن بالترو اللي جوا القوس هنا ف هتتنفذ  if  السويتش مبتقبلش مقارنات زي) {
) {
  case selfRate >= 9:
    performance = "Excellent";
    break;
  case selfRate == 7 || selfRate == 8:
    performance = "Good";
    break;
  case selfRate == 5 || selfRate == 6:
    performance = "Average";
    break;
  case selfRate < 5:
    performance = "Needs Improvement";
    break;
}

let bouns, finalSalray;
switch (true) {
  case yearsOfExperience <= 2 && yearsOfExperience >= 0:
    bouns = +salary * 0.1;
    parseInt((finalSalray = Number(bouns) + Number(salary)));
    break;
  case yearsOfExperience <= 5 && yearsOfExperience >= 3:
    bouns = +salary * 0.15;
    parseInt((finalSalray = Number(bouns) + Number(salary)));
    break;
  case yearsOfExperience > 5:
    bouns = +salary * 0.2;
    parseInt((finalSalray = Number(bouns) + Number(salary)));
    break;
} // هنا كنت بجرب كل طرق التحويل بس

let currentHour = new Date().getHours();
let shift;
if (currentHour >= 9 && currentHour < 18) {
  shift = "Day Shift";
} else {
  shift = "Night Shift";
}

console.log(`Hello ${name}
     Your Age : ${age}
     Your Years of experience = ${yearsOfExperience}
     Your Self-rating = ${selfRate}
     Your Category : ${jobCategoray}
     Your Performance : ${performance}
     Your bouns = ${bouns}
     Your Final_Salary = ${finalSalray}
     Your Shift : ${shift}`);

alert(`Hello ${name}
     Your Age : ${age}
     Your Years of experience = ${yearsOfExperience}
     Your Self-rating = ${selfRate}
     Your Category : ${jobCategoray}
     Your Performance : ${performance}
     Your bouns = ${bouns}
     Your Final_Salary = ${finalSalray}
     Your Shift : ${shift}`);

let DOM = `Hello ${name}
     Your Age : ${age}
     Your Years of experience = ${yearsOfExperience}
     Your Self-rating = ${selfRate}
     Your Category : ${jobCategoray}
     Your Performance : ${performance}
     Your bouns = ${bouns}
     Your Final_Salary = ${finalSalray}
     Your Shift : ${shift}`;

let finalMessageInDOM = (document.getElementById("result").innerText = DOM);
