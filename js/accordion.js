
function setUpAccordion() {
  let acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      let elts = document.getElementsByClassName("accordion");

      this.classList.toggle("accordion-active");

      for(let j = 0; j < elts.length; j++){
        if (elts[j] === this) {
          continue;
        }
        let otherPanel = elts[j].nextElementSibling;
        if (otherPanel.style.display === "block") {
          otherPanel.style.display = "";
          elts[j].classList.remove("accordion-active");
        }
      }

      let panel = this.nextElementSibling;
      if (panel.style.display === "") {
          panel.style.display = "block";
      } else {
          panel.style.display = "";
      }
    });
  }
}

window.onload = setUpAccordion();
