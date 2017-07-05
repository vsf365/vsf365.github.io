name = "varun"
database = firebase.database()
users = database.ref()
referencex = database.ref("Varun/x")
referencey = database.ref("Varun/y")


function mouseMoved(event){
    referencex.set(event.clientX)
    referencey.set(event.clientY)
}
function userAdded(){
    var name = 1;
    

    user.ref.on('value', function(update) {})
    
}
users.on('child_added', userAdded)

document.addEventListener('mousemove', mouseMoved)
