let activeTooltip = null;

document.addEventListener("click", function (e) {
  let target = e.target;
  let tooltip = target.getAttribute("title");
  let position = target.dataset.position;

  if (!target.classList.contains("has-tooltip")) return false;

  if (activeTooltip !== null && activeTooltip.innerText === tooltip) {
    activeTooltip.remove();
    activeTooltip = null;
    e.preventDefault();

    return false;
  } else if (activeTooltip !== null) {
    activeTooltip.remove();
  }

  let tooltipDiv = document.createElement("div");
  tooltipDiv.className = "tooltip";
  tooltipDiv.innerText = tooltip;
  document.body.insertBefore(tooltipDiv, target);
  tooltipDiv.classList.add("tooltip_active");

  let coords = target.getBoundingClientRect();
  let top = coords.top - tooltipDiv.offsetHeight - 5;
  let left = coords.left + (target.offsetWidth - tooltipDiv.offsetWidth) / 2;

  if (position !== undefined) {
    if (position === "right") {
      top = coords.top - 5;
      left = coords.left + target.offsetWidth + 5;

      if (left > window.innerWidth - tooltipDiv.offsetWidth) {
        top = coords.top - tooltipDiv.offsetHeight - 5;
        left = coords.left + (target.offsetWidth - tooltipDiv.offsetWidth) / 2;
      }
    } else if (position === "left") {
      top = coords.top - 5;
      left = coords.left - tooltipDiv.offsetWidth - 5;

      if (left < 0) {
        top = coords.top + tooltipDiv.offsetHeight - 5;
      }
    } else if (position === "bottom") {
      top = coords.top + tooltipDiv.offsetHeight;

      if (top > window.innerHeight - tooltipDiv.offsetHeight) {
        top = coords.top - tooltipDiv.offsetHeight - 5;
      }
    }
  }

  if (top < 0) top = coords.top + tooltipDiv.offsetHeight;
  if (left < 0) left = coords.left;

  tooltipDiv.style.top = top + "px";
  tooltipDiv.style.left = left + "px";

  activeTooltip = document.querySelector(".tooltip");

  e.preventDefault();
});
