function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // สมัครสมาชิกสำเร็จ
            const user = userCredential.user;
            console.log('Signup successful:', user);
            // ทำต่อไปตามที่คุณต้องการ
        })
        .catch((error) => {
            // เกิดข้อผิดพลาด
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Signup error:', errorMessage);
        });
}
