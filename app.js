$(function() {
  // YOUR CODE HERE
  // Ex. 1
  $('#toggleButton').on('click', function(){
    $('#myParagraph').toggle()
  })

  // Ex 2.
  $('#colorButton').on('click', function(){
    $('#colorDiv').css('background-color','yellow')
  })

  // Ex 3
  $('#addClassButton').on('click', function(){
    $('#classDiv').addClass('newClass')
  })
  $('#removeClassButton').on('click', function(){
    $('#classDiv').removeClass('newClass')
  })

  // Ex. 4
  $('#fadeInButton').on('click', function(){
    $('#fadeDiv').fadeIn()
  })
  $('#fadeOutButton').on('click', function(){
    $('#fadeDiv').fadeOut()
  })

  // Ex. 5
  $('#slideUpButton').on('click', function(){
    $('#slideDiv').slideUp()
  })
  $('#slideDownButton').on('click', function(){
    $('#slideDiv').slideDown()
  })
})
