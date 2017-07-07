database = firebase.database()
reference = database.ref()

content = document.querySelector('#content')
image = document.querySelector('#image')
text = document.querySelector('#text')
submit = document.querySelector('#submit')

submit.onclick = function(){
  reference.push({image: image.value, text: text.value})
}


reference.on('child_added', function(snapshot) {
    var item = snapshot.val()

    // create an element
    var review = document.createElement('div')
    review.className = 'review mdl-shadow--4dp'
    review.innerHTML = '<img src="' + item.image + '"><p>' + item.text + '</p>'

    var likeButton = document.createElement('button')
    likeButton.innerText = 'like'
    review.appendChild(likeButton)

    var likesRef = snapshot.ref.child('likes')
    var likesCount = 0

    likeButton.onclick = function(){
        likesRef.set(likesCount + 987654321)
    }


    var likes = document.createElement('span')
    likes.innerText = '0 likes'
    review.appendChild(likes)

    likesRef.on('value', function(snap){
      likesCount = snap.val()
      likes.innerText = snap.val() + ' likes'
    })
    // add it to the page
    content.appendChild(review)
})
