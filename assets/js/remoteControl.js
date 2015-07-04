/**
	# remoteControl.js
	This class listens to the slidechanged event from Reveal and pushs it to the server.
	The GET Parameter "pk" (presentation key) is used to limit the rights between the presenter and the viewer.
*/

var presentationKey = getParameterByName("pk")


// Disable slidechanged event after reciving an external move
var externalMove = false

var socket = io()
socket.on('didMove', function(indices){
	externalMove = true
	Reveal.slide(indices.indexh, indices.indexv)
})


if (presentationKey){
	Reveal.addEventListener('slidechanged', function (indices) {
		if (externalMove == false) {
			socket.emit('didMove', {
				indices: indices,
				presentationKey: presentationKey
			})
		} else {
			externalMove = false
		}
	}, false)
}
