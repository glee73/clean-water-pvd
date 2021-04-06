window.onload = () => {
            let fade = document.getElementsByClassName("fade-in")[0];
            let opacity = 0;
            let intervalID = setInterval(function() {

                if (opacity < 1) {
                    opacity = opacity + 0.15
                    fade.style.opacity = opacity;
                } else {
                    clearInterval(intervalID);
                }
            }, 85);
            setAnchorTransitions();
        }

function fadeInOnScroll(part) {
  let opacity = 0;
  let intervalID = setInterval(function() {
    console.log(document.getElementsByClassName("fade-in-on-scroll")[part]);

    let fade = document.getElementsByClassName("fade-in-on-scroll")[part];

      if (opacity < 1) {
          opacity = opacity + 0.15
          fade.style.opacity = opacity;
      } else {
          clearInterval(intervalID);
      }
  }, 165);
}

function setAnchorTransitions() {
  let widget = document.getElementsByClassName("scroll-prompt-container")[0];
  let faqLink = document.getElementById("faq-link");
  let topLink = document.getElementById("top-link");

  widget.onclick = () => {
    fadeInOnScroll(1);
  }

  faqLink.onclick = () => {
    fadeInOnScroll(1);
  }

  topLink.onclick = () => {
    fadeInOnScroll(0);
  }

}
