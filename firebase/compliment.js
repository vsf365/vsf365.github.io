database = firebase.database()

// Create a reference to this url
reference = database.ref()

function sendMessage(){
  reference.set(input.value)
  input.value = ""
}

function onMessage(message){
    h1.innerText = message.val()
}

h1 = document.querySelector("h1")
input = document.querySelector("input")
button = document.querySelector("button")


// Wire the button to the function.
button.onclick = sendMessage

// Wire the reference to a certain function.

reference.on("value", onMessage)
