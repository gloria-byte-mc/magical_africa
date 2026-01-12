 const password = document.getElementById('Password');
  const togglePassword = document.getElementById('toggle-password');

  togglePassword.addEventListener('click', () => {
    const isHidden = password.type === 'password';

    // Toggle input type
    password.type = isHidden ? 'text' : 'password';

    // Toggle icon
    togglePassword.classList.toggle('fa-eye');
    togglePassword.classList.toggle('fa-eye-slash');

  });


const password2 = document.querySelector('.password3');
const togglePassword2 = document.getElementById('toggle-password2');

togglePassword2.addEventListener('click', () => {
  const isHidden = password2.type === 'password';

  // Toggle input type
  password2.type = isHidden ? 'text' : 'password';

  // Toggle icon
  togglePassword2.classList.toggle('fa-eye');
  togglePassword2.classList.toggle('fa-eye-slash');
});


  const Required1 = document.querySelector('.required1');
  const SignIn = document.querySelector('.sign-in');

  SignIn.addEventListener('click', ()=>{
   const password = document.getElementById('Password');

   if(password.value.trim().length === 0){
    Required1.style.display = 'block';
    password.style.borderColor = '#dc271e'
   } else{
    Required1.style.display = 'none';
   }
  });

  // Hide error while typing
password.addEventListener('input', () => {
  if (password.value.trim().length > 0) {
    Required1.style.display = 'none';
    password.style.borderColor = 'rgb(217, 219, 223)'; 
  }
});


  const Email = document.getElementById('email');
  const Required2 = document.querySelector('.required2');
 
  SignIn.addEventListener('click', ()=>{
    if(Email.value.trim().length === 0){
      Required2.style.display = 'block';
      Email.style.borderColor = '#dc271e'
    } else{
      Required2.style.display = 'none';
    }
  });

    // Hide error while typing
Email.addEventListener('input', () => {
  if (Email.value.trim().length > 0) {
    Required2.style.display = 'none';
    Email.style.borderColor = 'rgb(217, 219, 223)'; 
  }
});


  const SignUp = document.querySelector('.sign-up-btn');
  const SignInForm = document.querySelector('.sign-in-form');
  const SignUpForm = document.querySelector('.sign-up-form');

  SignUp.addEventListener('click', ()=>{
    SignInForm.style.display = 'none'
    SignUpForm.style.display = 'flex'
  });





// for validation of the sign-up form
const CreateAccount = document.querySelector('.create-account');

const firstnameInput = document.querySelector('.firstnameInput');
const secondnameInput = document.querySelector('.secondnameInput');
const emailInput = document.querySelector('.emailInput');
const passwordInput = document.querySelector('.password3');
const countryInput = document.querySelector('.countryInpt');
const Side1 = document.querySelector('.side1');
const Side2 = document.querySelector('.side2');

const Required3 = document.querySelector('.required3');
const Required4 = document.querySelector('.required4');
const Required5 = document.querySelector('.required5');
const Required6 = document.querySelector('.required6');
const Required7 = document.querySelector('.required7');

// Function to check a single input
function checkInput(input, error) {
  if (input.value.trim().length === 0) {
    error.style.display = 'block';
    input.style.borderColor = '#dc271e'; // red border
  } else {
    error.style.display = 'none';
    input.style.borderColor = '#d9dbdf'; // reset border
  }
}

// On click of Create Account
CreateAccount.addEventListener('click', (e) => {
  e.preventDefault(); // prevent form submission

  checkInput(firstnameInput, Required3);
  checkInput(secondnameInput, Required4);
  checkInput(emailInput, Required5);
  checkInput(passwordInput, Required6);
  checkInput(countryInput, Required7);
});

// Hide error when typing
firstnameInput.addEventListener('input', () => checkInput(firstnameInput, Required3));
secondnameInput.addEventListener('input', () => checkInput(secondnameInput, Required4));
emailInput.addEventListener('input', () => checkInput(emailInput, Required5));
passwordInput.addEventListener('input', () => checkInput(passwordInput, Required6));
countryInput.addEventListener('input', () => checkInput(countryInput, Required7));

  

//To back to the sign in form
const Back = document.getElementById('back');
Back.addEventListener('click', ()=>{
 const SignUpForm = document.querySelector('.sign-up-form');
   const SignInForm = document.querySelector('.sign-in-form');
 SignUpForm.style.display = 'none'
  SignInForm.style.display = 'flex'
});

//For closing the sin-in form
const closeIcon = document.getElementById('close-icon');


closeIcon.addEventListener('click', (e) => {
  e.preventDefault();
  authOverlay.classList.remove('active');
});


const Icon = document.querySelector('.Account-icon');
const authOverlay = document.getElementById("authOverlay");

Icon.addEventListener('click', (e)=>{
  e.preventDefault();
  authOverlay.classList.add('active')
 
  document.body.style.overflow = "hidden";
});

authOverlay.addEventListener("click", (e) => {
 
  if (e.target === authOverlay) {
    authOverlay.classList.remove("active");
  }
  document.body.style.overflow = "auto";
});
