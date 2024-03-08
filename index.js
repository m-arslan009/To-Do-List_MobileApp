import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://todo-mobileapp-1021b-default-rtdb.europe-west1.firebasedatabase.app/"
    
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")
const booksList = ref(database, "books")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-btn")
const shoppingListEl = document.getElementById("shopping-list")
const booksInDB = ref(database, "books");

// way to retrieve data from firebase 
onValue(shoppingListInDB, function(snapshot) {
    let shopList = Object.values(snapshot.val());
    clearScreen();
    for(let i = 0; i < shopList.length; i++) {
        let currentListItem = shopList[i];
        appendValToScreen(currentListItem);
        console.log(currentListItem);
    }
})

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(shoppingListInDB, inputValue)
    clearInputField();
})

function clearInputField(val) {
    inputFieldEl.value = ""
}

function clearScreen() {
    shoppingListEl.innerHTML = "";
}

function appendValToScreen(val) {
    shoppingListEl.innerHTML += `<li>${val}</li>`;
}