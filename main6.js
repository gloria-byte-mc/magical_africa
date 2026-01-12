
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
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
    const accountAvatar = document.querySelector('.account-avatar');
    const accountName = document.querySelector('.account-details h4');
    const accountEmail = document.querySelector('.account-email');
    const signInLink = document.getElementById('contact-us');
    const userIcon = document.getElementById('user-icon');
    const accountDropdown = document.querySelector('.account-dropdown');

    if (user) {
      // User is signed in - get their data
      const userDoc = await getDoc(doc(db, "users", user.uid));
      
      let initials = "";
      let fullName = "";
      let email = user.email || "";
      
      if (userDoc.exists()) {
        const data = userDoc.data();
        const firstName = data.firstName || "";
        const lastName = data.lastName || "";
        
        initials = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
        fullName = `${firstName} ${lastName}`;
      } else if (user.displayName) {
        // Fallback to Google display name
        const names = user.displayName.split(' ');
        initials = names[0].charAt(0).toUpperCase();
        if (names[1]) {
          initials += names[1].charAt(0).toUpperCase();
        }
        fullName = user.displayName;
      }

      // Update UI elements
      accountIcon.textContent = initials;
      accountIcon.style.display = "flex";
      accountAvatar.textContent = initials;
      accountName.textContent = fullName;
      accountEmail.textContent = email;
      
      // Hide sign in link and user icon
      signInLink.style.display = "none";
      if (userIcon) userIcon.parentElement.style.display = "none";

    } else {
      // User is signed out
      accountIcon.style.display = "none";
      accountDropdown.style.display = "none";
      signInLink.style.display = "block";
      if (userIcon) userIcon.parentElement.style.display = "block";
    }
  });

  // Logout functionality
  document.querySelector('.logout-option').addEventListener('click', async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
      alert('Error logging out');
    }
  });
