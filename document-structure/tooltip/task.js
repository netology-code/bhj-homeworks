document.addEventListener("click", function(e) {
    if (e.target.classList.contains("tooltip_link")) {
      e.target.classList.add("tooltip_active");
      const tooltip = e.target.getAttribute("title");
      document.querySelector(".tooltip").innerHTML = tooltip;
      document.querySelector(".tooltip").style.visibility = "visible";
    }
  });