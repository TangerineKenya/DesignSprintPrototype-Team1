$('document').ready(function() {

  $('.mdl-button').click(function(ev) {
    $(ev.currentTarget).addClass('mdl-button--colored')
  })

  $('.audio-button').click(function(ev) {
    $('.audio-overlay').show()
  })
  $('.audio-overlay').click(function(ev) {
    $('.audio-overlay').hide()
  })

  $('.camera-button').click(function(ev) {
    $('.camera-overlay').show()
  })
  $('.camera-overlay').click(function(ev) {
    $('.camera-overlay').hide()
  })



  $('.video-button').click(function(ev) {
    $('.video-overlay').show()
  })
  $('.video-overlay').click(function(ev) {
    $('.video-overlay').hide()
  })

  $('.bookmark-button').click(function(ev) {
    alert('You have marked this time')
  })
})
