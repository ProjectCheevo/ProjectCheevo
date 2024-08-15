// Get references to the HTML elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signUpButton = document.getElementById('signUp');

// Import Firebase modules
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";

// A click event listener to the sign-up button
signUpButton.addEventListener('click', function() {
  // Get the values entered by the user
  const email = emailInput.value;
  const password = passwordInput.value;

  // Use Firebase to create a new user
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successfully created a new user
      const user = userCredential.user;
      console.log('User signed up:', user);
      alert('Account created successfully!');
    })
    .catch((error) => {
      // Handle errors here
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing up:', errorCode, errorMessage);
      alert('Failed to create account: ' + errorMessage);
    });
});
