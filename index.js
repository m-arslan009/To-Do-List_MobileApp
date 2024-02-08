import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MSG_SENDER_ID,
    appId: process.env.APP_ID
};

const app = initializeApp(firebaseConfig)
console.log(app);

const inputField = document.getElementById("input-field");
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", function() {
    let inputValue = inputField.value;
    console.log(inputValue);
})