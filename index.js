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

// way to get values from database
onValue(booksInDB, function(snapshot){
    let bookArr = Object.values(snapshot.val())
    for(let i = 0; i < bookArr.length; i++) {
        let currentBook = bookArr[i];
        console.log(currentBook)
    }
    // console.log(bookArr)
});

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(shoppingListInDB, inputValue)
    clearInputField();
    pushUserInputValToScreen(inputValue);
})

function clearInputField(val) {
    inputFieldEl.value = ""
}

function pushUserInputValToScreen(val) {
    shoppingListEl.innerHTML += `<li>${val}</li>`;
}