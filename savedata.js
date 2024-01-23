// ในไฟล์ firebase-config.js
import 'firebase/database';

function saveData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // ระบุ path ที่ต้องการบันทึกข้อมูล
    const databaseRef = firebase.database().ref('users');

    // สร้างข้อมูลที่ต้องการบันทึก
    const userData = {
        name: name,
        email: email
    };

    // ทำการบันทึกข้อมูล
    databaseRef.push(userData)
        .then(() => {
            console.log('Data saved successfully');
            // ทำตามที่คุณต้องการหลังจากบันทึกข้อมูล
        })
        .catch((error) => {
            console.error('Error saving data:', error);
        });
}
