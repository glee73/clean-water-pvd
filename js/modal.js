
let argsList = [["explainer", "explainer-link", "exit-explainer"],
           ["presentation", "presentation-link", "exit-presentation"],
           ["newark", "newark-link", "exit-newark"],
           ["case-study", "case-study-link", "exit-case-study"], ["loan", "loan-link", "exit-loan"]];

argsList.map(x => setUpModal(x));

function setUpModal([m, b, s]) {

  let modal = document.getElementById(m);
  let btn = document.getElementById(b);
  let span = document.getElementById(s);
  console.log(span);

  btn.onclick = function() {
  modal.style.display = "block";
  }

  span.onclick = function() {
  modal.style.display = "none";
  }

    window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
  }
}
