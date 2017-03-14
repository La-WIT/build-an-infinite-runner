$(document).ready(function() {
  $('.solution').hide();
  $('.art-code-snippet'),hide();

  $('.toggle-one').click(function() {
    $('.toggle-one').text(function(_, text) {
      return text === 'Show Solution' ? "Hide Solution" : "Show Solution"
    })
    $('.solution-one').toggle(400);
  });

  $('.toggle-two').click(function() {
    $('.toggle-two').text(function(_, text) {
      return text === 'Show Solution' ? "Hide Solution" : "Show Solution"
    })
    $('.solution-two').toggle(400);
  });

  $('.toggle-three').click(function() {
    $('.toggle-three').text(function(_, text) {
      return text === 'Show Solution' ? "Hide Solution" : "Show Solution"
    })
    $('.solution-three').toggle(400);
  });

  $('.red-ninja-toggle').click(function() {
    $('.red-ninja-toggle').text(function(_, text) {
      return text === 'Show Solution' ? "Hide Solution" : "Show Solution"
    })
    $('.solution-three').toggle(400);
  });
});