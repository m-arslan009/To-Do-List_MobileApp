import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js"
import { getDatabase, ref, push, onValue , remove} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js"

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
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearShoppingListEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToShoppingListEl(currentItem)
        }    
    } else {
        shoppingListEl.innerHTML = "No items here... yet"
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

function appendValToScreen(item) {
    // shoppingListEl.innerHTML += `<li>${val}</li>`;

    let itemID = item[0];
    let itemValue = item[1];
    let newEl = document.createElement("li");

    newEl.textContent = itemValue;
    console.log(itemID)
    shoppingListEl.append(newEl)

    newEl.addEventListener("click", function(){
        console.log(itemID)
        let exactLocation = ref(database, `shoppingList/${itemID}`);
        remove(exactLocation);
    })
}