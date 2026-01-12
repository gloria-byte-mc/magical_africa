
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { 
    getAuth, 
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider 
  } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
  import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

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
  const googleProvider = new GoogleAuthProvider();

  // Email/Password Sign In
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
      alert('Signed in successfully!');
      window.location.href = 'dashboard.html';
      
    } catch (error) {
      console.error('Error:', error);
      
      if (error.code === 'auth/user-not-found') {
        alert('No account found with this email');
      } else if (error.code === 'auth/wrong-password') {
        alert('Incorrect password');
      } else if (error.code === 'auth/invalid-credential') {
        alert('Invalid email or password');
      } else {
        alert('Error: ' + error.message);
      }
    }
  });

  // Google Sign In
  document.querySelector('.sign-with-google').addEventListener('click', async (e) => {
    e.preventDefault();

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      
      if (!userDoc.exists()) {
        // First time Google user - save their info
        const names = user.displayName ? user.displayName.split(' ') : ['', ''];
        
        await setDoc(doc(db, "users", user.uid), {
          firstName: names[0] || "",
          lastName: names.slice(1).join(' ') || "",
          email: user.email,
          photoURL: user.photoURL || "",
          authProvider: "google",
          createdAt: new Date().toISOString()
        });
      }

      alert('Signed in with Google successfully!');
      window.location.href = 'index.html';
      
    } catch (error) {
      console.error('Error:', error);
      
      if (error.code === 'auth/popup-closed-by-user') {
        return; // User closed popup, no error needed
      }
      alert('Error: ' + error.message);
    }
  });


