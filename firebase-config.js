// 1. Memanggil mesin utama Firebase dari server Google
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

// 2. Data konfigurasi proyek Roster Sekolah Anda
// Tambahkan kata 'export' di depan const agar bisa dibaca oleh index.html
export const firebaseConfig = {
  apiKey: "AIzaSyAu8st2VRsNFyzC8UR8TDq8821y4_TVHVk",
  authDomain: "roster-sekolah-sd.firebaseapp.com",
  projectId: "roster-sekolah-sd",
  storageBucket: "roster-sekolah-sd.firebasestorage.app",
  messagingSenderId: "819380185646",
  appId: "1:819380185646:web:39ae854591ca40f0498dbf"
};

// 3. Menyalakan Firebase dan membagikannya dengan nama 'app'
// Ini digunakan oleh login.html, input_jadwal.html, dan kelola_data.html
export const app = initializeApp(firebaseConfig);
