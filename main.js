var currentBoxNumber = 0;
$("#username").keypress(function (event) {
  if (event.keyCode == 13) {
    textboxes = $("input.username");
    currentBoxNumber = textboxes.index(event.target);
    if (textboxes[currentBoxNumber + 1] != null) {
      nextBox = textboxes[currentBoxNumber + 1];
      nextBox.focus();
      nextBox.select();
      event.preventDefault();
      return false;
    }
  }
});
