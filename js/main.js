// find a tag with an ID of test-button and when it's clicked, do this
$('#test-button').click(function() {
	// find and divs and add Hello World to it
	$('#test1').append('Hello World')
	// test this function
	console.log('Hey this function was run!, Sweet!')
	// Hide id of goodbye
	$('#goodbye').hide()
	// Show id of more-content
	$('#more-content').show()
	// Toggle between id super-element display state
	$('#super-element').toggle()
})

// fadeIn(), fadeOut(), fadeToggle() / slideUp(), slideDown(), slideToggle()

// When my document is fully loaded, do this
$(document).ready(function() {
	// anytime my id of sweet-effects-button is clicked, do this
	$('#sweet-effects-button').click(function() {
		// get the sweet-effects-div and slide toggle over 1000s
		$('#sweet-effects-div').slideToggle(1000)
		// add a class of add-a-class to br tags
		$('div').toggleClass('add-a-class')
	})
	// anytime my id of sweet-effects-button is double cliked, do this
	$('#sweet-effects-button').dblclick(function() {
		$('#sweet-effects-div').prepend('This is my statements')
	})
	// anytime my id of sweet-effects-button is entered, do this
	$('#sweet-effects-div').mouseenter(function() {
		console.log('you entered this element, GoodJob!!')
	})
	// anytime my id of sweet-effects-button is exited with the mouse, do this
	$('#sweet-effects-div').mouseleave(function() {
		console.log('you leave this element, GoodJob!!')
	})
	// anytime my id of sweet-effects-button is hovered over, do this
	$('#sweet-effects-div').hover(function() {
		console.log('you hovered on this element, Sweet!!')
	})
})



