$(window).ready(function() {
  var bugRe = /\/projects\/(\d+)(-([\w]+))?\/tickets\/(\d+)/;
  $("a[href^=\"http://hackasaurus.lighthouseapp.com/\"]").each(function() {
    var match = $(this).attr("href").match(bugRe);

    if (match && !$(this).text()) {
      var project = match[3];
      var label = (project ? project + "\u00a0" : "") + "#" + match[4];
      $(this).addClass("bug").text(label);
    }
  });
});
