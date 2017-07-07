// VARIABLE SCHTUFF

input = document.querySelector('input')
messages = document.querySelector('#messages')
// Virtual connection to the databse.
database = firebase.database()

// Get a virtual
reference = database.ref()


// FUNCTION SCcchHTUFFFF
// Function submits to the reference whatever is in the input.

function sendMessage(){
      reference.push("Varun: " + input.value)
      input.value = ""
}

function recieveMessage(message){
    m =  message.val()
    messages.innerHTML = "<p>" + m + "</p>" + messages.innerHTML
}

function keyPressed(event){
    if (event.which == 13) {
        sendMessage()
    }
}


input.addEventListener('keyup', keyPressed)
reference.on('child_added', recieveMessage)
