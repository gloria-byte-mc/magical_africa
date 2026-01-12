
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDiLg6P5650fOfcS8Wq5J3-x9qkgKFrc4Y",
    authDomain: "magicalafrica-e7287.firebaseapp.com",
    projectId: "magicalafrica-e7287",
    storageBucket: "magicalafrica-e7287.firebasestorage.app",
    messagingSenderId: "941072590474",
    appId: "1:941072590474:web:8b7683d28111c850676f73"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  document.querySelector('.sign-in').addEventListener('click', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('Password').value;

    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      alert('Signed in successfully!');
      window.location.href = 'index.html'; // Change to your homepage/dashboard
      
    } catch (error) {
      console.error('Error:', error);
      
      if (error.code === 'auth/user-not-found') {
        alert('No account found with this email');
      } else if (error.code === 'auth/wrong-password') {
        alert('Incorrect password');
      } else if (error.code === 'auth/invalid-email') {
        alert('Please enter a valid email');
      } else if (error.code === 'auth/invalid-credential') {
        alert('Invalid email or password');
      } else {
        alert('Error: ' + error.message);
      }
    }
  });
