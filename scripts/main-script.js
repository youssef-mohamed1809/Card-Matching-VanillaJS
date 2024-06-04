function start_game() {
    var getSelectedValue = document.querySelector(
      'input[name="difficulty"]:checked'
    );
    num = getSelectedValue.getAttribute("value");
    sessionStorage.setItem("difficulty", num);
    window.location = "./card-matching.html";
  }