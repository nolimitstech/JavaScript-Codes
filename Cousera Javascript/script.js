function setDate() {
  document.getElementById('date').innerHTML = Date();
}

function message(msg) {
  document.getElementById('output').innerHTML = msg + "event";
}
message();


// function welcomeMsg() {
//   alert("Welcome to javasript");
// }
// welcomeMsg();


// function welcomeMsg(msg) {
//   alert(msg);
//   var name = prompt("What is your name?");
//   return name;
// }
// welcomeMsg();

// var x = "Hello";
// welcomeMsg(x);
// x = "Goodbye";
// welcomeMsg(x);





/*Name this external file gallery.js*/

function upDate(previewPic) {
  /* In this function you should 
     1) change the url for the background image of the div with the id = "image" 
     to the source file of the preview image
     
     2) Change the text  of the div with the id = "image" 
     to the alt text of the preview image 
     */

}

function unDo() {
  /* In this function you should 
 1) Update the url for the background image of the div with the id = "image" 
 back to the orginal-image.  You can use the css code to see what that original URL was
 
 2) Change the text  of the div with the id = "image" 
 back to the original text.  You can use the html code to see what that original text was
 */

}
// java for closing and opening element. REF HTML with open and close button
function closeMe() {
  // find the element
  x = document.getElementById("demo");
  // option 1: change style attribute directly without css
  x.style.display = "none"
  // option 2: Change the class 
  // x.className = "closed";
}
//  and
function openMe() {
  // find the element
  x = document.getElementById("demo");
  // option 1: change style attribute directly without css
  x.style.display = "block"
  // option 2: Change the class 
  // x.className = "open";
}

// java for watch and slippers images...tutorial for "this"
function displayId(element) {
  console.log(element.id);
}

// REF HTML on mouseover and mouseout
function showProperties(element) {
  // document.getElementById('image').innerHTML = element.alt;
  document.getElementById('image').innerHTML = 'this websit a multi punierfiehrfeihehrie';
}

function Undo(element) {
  document.getElementById('image').innerHTML = 'Hover over an image to display here.';
}

// lecture on arrays REF to arrays.html
var fruits = ["Banana", "Orange", "Apple", "Mango"];

function loadfruits() {
  document.getElementById("fruits").innerHTML = fruits;
}

function myFunction() {
  var fruit = prompt("what is your favourite fruit? ");
  fruits[fruits.length] = fruit;
  document.getElementById("fruits").innerHTML = fruits;
}

// IF example, javascript code only
var name = prompt("what is your name?")
if (name.length != 0) {
  document.write("Hello " + name);
}
