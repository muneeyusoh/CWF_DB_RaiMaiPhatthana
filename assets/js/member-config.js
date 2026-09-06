// =========================================================
// ⚙️ member-config.js: ตั้งค่า Firebase สำหรับฝั่งสมาชิก (Fixed)
// =========================================================
const firebaseConfig = { 
    apiKey: "AIzaSyBs1G5k31100g6PeVvU5nUyz0QDB21jHpI", 
    authDomain: "smartwelf-f7d81.firebaseapp.com", 
    projectId: "smartwelf-f7d81", 
    storageBucket: "smartwelf-f7d81.firebasestorage.app", 
    messagingSenderId: "114126831149", 
    appId: "1:114126831149:web:66ea766f6c558b159442a4" 
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// 🌟 สิ่งที่ขาดไป: กำหนด LIFF ID ให้ฝั่งสมาชิก 🌟
const LIFF_ID = "2011183541-zDAQXVLM"; 

// ตัวแปรที่ใช้ร่วมกันในฝั่งสมาชิก
let cachedUserData = null;
let fundSettings = { inZoneVillages: [], centers: [], annualFee: 365, fundName: "กองทุนสวัสดิการชุมชน" };

// 🌟 สิ่งที่ขาดไป: ฟังก์ชันควบคุมหน้าจอโหลดดิ้ง 🌟
function showLoader(show, text="กำลังประมวลผล...") { 
    const loader = document.getElementById('systemLoading');
    if(loader) {
        if(show) { 
            const txt = document.getElementById('systemLoadingText');
            if(txt) txt.innerText = text;
            loader.style.display = 'flex'; 
        } else { 
            loader.style.display = 'none'; 
        }
    }
}
