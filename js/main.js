$(document).ready(function () {

  $('.ctn-play').click(function () {
    var $body = $('body'),
        $audio = $('.audio')[0]
     $body.toggleClass('active');

    if ($audio.paused === false) {
      $audio.pause();
      clearInterval(intervals);
    } else {
      $audio.play();
      pulsing();
      intervals = setInterval(function() {pulsing()}, 3000);
    }


    function pulsing() {
      $('.spin').addClass('sound');

      setTimeout(function() {
        $('.spin').removeClass('sound');
      }, 1000);
    }
  });
});
