// NEW; complete code runs here only

// var name = prompt("what is your name?")
// if (name.length != 0) {
//   document.write("Hello " + name);
// }
// else
//   document.write("feeling shy?");


// NEW: code is complete here, ans is  5.25
// var grades = [2, 5, 6, 8];

// var sum = 0;
// if (grades.length > 0) {
//   for (index = 0; index < grades.length; index++) {
//     sum += grades[index];
//   }
//   document.write(sum / grades.length);
// }
// else
//   document.write("Empty");


// NEW; ANOTHER EXAMPLE THAT COVERS FOR UNREAL ENTRIES
// var grades = [2, 5, , , 9, 6, , 8];

// var sum = 0;
// var count = 0;
// if (grades.length > 0) {
//   for (index = 0; index < grades.length; index++) {
//     if (grades[index] != undefined) {
//       sum += grades[index];
//       count = count + 1;
//     }
//   }
//   document.write(sum / count);
// }
// else
//   document.write("Empty");


// NEW: multiple and nested if statements
// var name = prompt("what is your name?")
// if (name.length != 0) {
//   if (name == "Chibuike")
//     document.write("what a beautiful name");
//   else
//     document.write("Hello " + name);
// }

// else
//   document.write("feeling shy?");



// NEW: java for form and validation of email address. REF WK4 HTML
// function check() {
//   var email1 = document.getElementById('email_addr');
//   var email2 = document.getElementById('email_repeat');
//   if (email1.value != email2.value) {
//     alert("The emails must match");
//     return false;
//   }

// }

// NEW: Java for form with required for a checkbox.  REF WK4.HTML
function nicknameFunction() {
  if (document.getElementById('yesNick').checked) {
    document.getElementById('nick').style.display = "inline";
    document.getElementById('nickname').setAttribute('required', true);
  }
  else {
    document.getElementById('nickname').removeAttribute('required');
    document.getElementById('nick').style.display = "none";
  }
}
