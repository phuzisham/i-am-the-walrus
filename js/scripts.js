$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle(800);
    $("#walrus-hidden").fadeToggle(800);
  });

  $('#blue').click(function() {
    $('body').removeClass();
    $('body').addClass('blue');
  });

  $('#normal').click(function() {
    $('body').removeClass();
    //$('body').addClass('blue');
  });
});
