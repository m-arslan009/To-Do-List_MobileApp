import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://todo-mobileapp-1021b-default-rtdb.europe-west1.firebasedatabase.app/"
    
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const booksList = ref(database, "books");

let inputVal = document.getElementById("text");
console.log(inputVal);

document.getElementById("btn").addEventListener("click", function() {
    let val = document.getElementById("text").value;
    push(booksList, val);
    document.getElementById("main") += `<li>${val}</li>`
})