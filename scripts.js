
$('document').ready(function () {
  setInterval(function () {
    var time = $('.timer').text()
    var seconds = (parseInt((time.split(':'))[2]) + 1).toString()
    if (seconds.length == 1) seconds = '0' + seconds
    $('.timer').text('00:00:' + seconds)
  }, 1000)
  setInterval(function () {
    var time = $('.countdown-timer').text()
    var seconds = (parseInt((time.split(':'))[2]) - 1).toString()
    if (seconds !== '0' || seconds !== 'NaN' || seconds.substr(0, 1) !== '-' ) {
      if (seconds.length == 1) seconds = '0' + seconds
      //debugger
      $('.countdown-timer').text('00:00:' + seconds)
    }
    if (seconds == '0' || seconds.substr(0, 1) == '-' || seconds == 'NaN') {
      $('.countdown-timer').text('Time is up!')
    }

  }, 1000)

  $('.mdl-button').click(function (ev) {
    $(this).toggleClass('mdl-button--colored')
  })

  $('.audio-button').click(function (ev) {
    $('.audio-overlay').show()
  })
  $('.audio-overlay').click(function (ev) {
    $('.audio-overlay').hide()
  })

  $('.camera-button').click(function (ev) {
    startWebCamera();
  })
  $('.camera-overlay').click(function (ev) {
    $('.camera-overlay').hide()
  })



  $('.video-button').click(function (ev) {
    startWebCamera();
  })
  $('.video-overlay').click(function (ev) {
    $('.video-overlay').hide()
  })

  $('.bookmark-button').click(function (ev) {
    // alert('You have marked this time')
    var x = confirm("Enter a   note");
  })

  $('.open-movie-player').click(function (ev) {
    $('.movie-player-overlay').show()
  })
  $('.movie-player-overlay').click(function (ev) {
    $('.movie-player-overlay').hide()
  })

})


function startWebCamera() {
  $('.video-overlay').show()
  var video = document.getElementById('video');
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
      video.src = window.URL.createObjectURL(stream);
      video.play();
    });
  }
}
