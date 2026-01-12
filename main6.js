
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
  import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

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

  onAuthStateChanged(auth, async (user) => {
    const accountIcon = document.querySelector('.Account-icon');
    const signInLink = document.getElementById('contact-us');
    const userIcon = document.getElementById('user-icon');

    if (user) {
      // User is signed in - get their data from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      
      let initials = "";
      
      if (userDoc.exists()) {
        const data = userDoc.data();
        const firstInitial = data.firstName ? data.firstName.charAt(0).toUpperCase() : "";
        const lastInitial = data.lastName ? data.lastName.charAt(0).toUpperCase() : "";
        initials = firstInitial + lastInitial;
      } else if (user.displayName) {
        // Fallback to Google display name
        const names = user.displayName.split(' ');
        initials = names[0].charAt(0).toUpperCase();
        if (names[1]) {
          initials += names[1].charAt(0).toUpperCase();
        }
      }

      // Show initials, hide sign in link and user icon
      accountIcon.textContent = initials;
      accountIcon.style.display = "flex";
      signInLink.style.display = "none";
      if (userIcon) userIcon.style.display = "none";

    } else {
      // User is signed out
      accountIcon.style.display = "none";
      signInLink.style.display = "block";
      if (userIcon) userIcon.style.display = "block";
    }
  });