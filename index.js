// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// import {getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js"

// const firebaseConfig = {
//     apiKey: "AIzaSyB-Mnq1-hRI9ugWNXOCpNDUIa4km33yeas",
//   authDomain: "todo-mobileapp-1021b.firebaseapp.com",
//   databaseURL: "https://todo-mobileapp-1021b-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "todo-mobileapp-1021b",
//   storageBucket: "todo-mobileapp-1021b.appspot.com",
//   messagingSenderId: "700108880574",
//   appId: "1:700108880574:web:fbb080e85d7376d83ffcef"
// };

// const app = initializeApp(firebaseConfig)
// const dataBase = getDatabase(app);
// const moviesInDB = ref(dataBase, "Movies")
// console.log(app);

import {initializeApp} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const appSetting = {
    apiKey: "AIzaSyB-Mnq1-hRI9ugWNXOCpNDUIa4km33yeas",
    authDomain: "todo-mobileapp-1021b.firebaseapp.com",
    databaseURL: "https://todo-mobileapp-1021b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-mobileapp-1021b",
    storageBucket: "todo-mobileapp-1021b.appspot.com",
    messagingSenderId: "700108880574",
    appId: "1:700108880574:web:fbb080e85d7376d83ffcef"
};

const app = initializeApp(appSetting);
const dataBase = getDatabase(app);
const shoppinglistDB = ref(dataBase, "ShoppingList");

const inputField = document.getElementById("input-field");
const addBtn = document.getElementById("add-btn");

// addBtn.addEventListener("click", function(event) {
//     console.log(event)
//     // let inputValue = inputField.value;
//     // push(moviesInDB, inputValue)
//     // console.log(`${inputValue} added to database`);
// })

addBtn.addEventListener("click", function() {
    // let inputValue = inputField.value;
    // push(moviesInDB, inputValue)
    // console.log(`${inputValue} added to database`);
    let inputValue = inputField.value
    push(shoppinglistDB, inputValue)
    console.log(`${inputValue} added to database`);
})

const config = {
    url: "https://assignment-course-6359d-default-rtdb.asia-southeast1.firebasedatabase.app/"
}