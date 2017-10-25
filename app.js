$(document).ready(function() {

  var reliable = $('.reliable');
  var highlighted = $('.highlight')
  highlighted.addClass('hide');
  reliable.removeClass('hide')

  wordLoop();

  function wordLoop() {
    setTimeout(function() {
      highlighted.addClass('hide');
      $('.reliable').removeClass('hide');
    }, 1000);
    setTimeout(function() {
      highlighted.addClass('hide');
      $('.dependable').removeClass('hide');
    }, 2000);
    setTimeout(function() {
      highlighted.addClass('hide');
      $('.affordable').removeClass('hide');
    }, 3000);
    setTimeout(function() {
      highlighted.addClass('hide');
      $('.professional').removeClass('hide');
      setTimeout(function() {
        wordLoop();
      }, 0)
    }, 4000);
  }




});
