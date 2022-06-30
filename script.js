
const form = document.querySelector("form");


// function validateInput(){
//  if(firstName.value.trim()===""){
//   const parent=firstName.parentElement;
//   const messageElement=parent.querySelector("small");
//   messageElement.style.visibility="visible";
//   messageElement.innerText="First Name cannot be empty"
//  }else{
//   const parent=firstName.parentElement;
//   const messageElement=parent.querySelector("small");
//   messageElement.style.visibility="hidden";
//   messageElement.innerText=""
//  }
// }
// document.querySelector("button")
// .addEventListener("click",(event)=>{
//   event.preventDefault();
//   validateInput();
// }); 

form.addEventListener("submit", (e) => {
  e.preventDefault();

  setErr();
});
// function checkInputs() {
//   //get the values from the inputs
//   const firstNameValue = firstName.value.trim();
//   const lastNameValue = lastName.value.trim();
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();

//  if (firstNameValue === "") {
//     setErr(firstName, "First Name cannot be empty");
//  }else{
//     setSuccessFor(firstName);
//  }
// }
// function setErrorFor(input, message) {
//   const formControl = getElementById("ft"); //.form-control
//   const small = formControl.querySelector("small")

//   //add error message inside small tag
//   formControl.addClass("error");
//   small.innerText = message;
//   //add error class
//   formControl.className = "form-control error";
  
// }
// function setSuccessFor(input){
//   const formControl = input.parentElement; 
//   formControl.className = "form-control success";
// }

function setErr() {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (firstName.value == "") {
    firstName.parentElement.classList.add("error");
    firstName.parentElement.classList.remove("success");
  } else {
    firstName.parentElement.classList.remove("error");
    firstName.parentElement.classList.add("success");
  }

  if (lastName.value == "") {
    lastName.parentElement.classList.add("error");
    lastName.parentElement.classList.remove("success");
  }  else {
    lastName.parentElement.classList.remove("error");
    lastName.parentElement.classList.add("success");
  }

  if (email.value == "" || email.value.i) {
    email.placeholder = "email@example/com";
    email.classList.add("emailError");
    email.parentElement.classList.add("error");
    email.parentElement.classList.remove("success");
  } else {
    email.parentElement.classList.remove("error");
    email.parentElement.classList.add("success");
  }

  if (password.value == "") {
    password.parentElement.classList.add("error");
    password.parentElement.classList.remove("success");
  } else {
    password.parentElement.classList.remove("error");
    password.parentElement.classList.add("success");
  }

  if (firstName.value && lastName.value && email.value && password.value != "") {
    setSuccessFor();
  }
  
}
function setSuccessFor(){;
  const formControl= document.getElementById("ft")
  formControl.classList.add("success")
}