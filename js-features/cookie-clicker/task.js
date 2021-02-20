let image = document.getElementById("cookie");
let count = document.getElementById("clicker__counter")
let number = count.textContent;
numberCount = parseInt(number);
let size = function() {
  image.width = 200;
}
image.onclick = function() {
  image.width = 400;

  setTimeout(size,500);
  numberCount = numberCount + 1;
  count.textContent = numberCount;
};
