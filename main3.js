
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
  import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

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
  const db = getFirestore(app);

  document.querySelector('.create-account').addEventListener('click', async (e) => {
    e.preventDefault();
    
    const tribe = document.getElementById('tribes-s').value;
    const firstName = document.querySelector('.firstnameInput').value.trim();
    const lastName = document.querySelector('.secondnameInput').value.trim();
    const email = document.querySelector('.emailInput').value.trim();
    const password = document.querySelector('.password3').value;
    const country = document.querySelector('.countryInpt').value.trim();

    if (!firstName || !lastName || !email || !password || !country) {
      alert('Please fill in all required fields');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        tribe: tribe,
        firstName: firstName,
        lastName: lastName,
        email: email,
        country: country,
        authProvider: "email",
        createdAt: new Date().toISOString()
      });

      alert('Account created successfully!');
      window.location.href = 'index.html'; // Change to your redirect page
      
    } catch (error) {
      console.error('Error:', error);
      
      if (error.code === 'auth/email-already-in-use') {
        alert('This email is already registered');
      } else if (error.code === 'auth/invalid-email') {
        alert('Please enter a valid email address');
      } else {
        alert('Error: ' + error.message);
      }
    }
  });
