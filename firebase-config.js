const firebaseConfig = {
  apiKey: "AIzaSyAy9Nvu3357kNsOd9EMB-vrw9fqSqMuAQs",
  authDomain: "iiirnstudio-6627b.firebaseapp.com",
  projectId: "iiirnstudio-6627b",
  storageBucket: "iiirnstudio-6627b.appspot.com",
  messagingSenderId: "934458269500",
  appId: "1:934458269500:web:544e288fbc58e958834839"
};

firebase.initializeApp(firebaseConfig);

// ตรวจสอบสถานะผู้ใช้งาน
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // ผู้ใช้งานล็อกอินแล้ว
    console.log('User is logged in:', user);
  } else {
    // ไม่มีผู้ใช้งานล็อคอิน
    console.log('User is not logged in');
    // Redirect or handle as needed
  }
});
