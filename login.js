function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // เข้าสู่ระบบสำเร็จ
            const user = userCredential.user;
            console.log('Login successful:', user);
            // ทำต่อไปตามที่คุณต้องการ
        })
        .catch((error) => {
            // เกิดข้อผิดพลาด
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Login error:', errorMessage);
        });
}
