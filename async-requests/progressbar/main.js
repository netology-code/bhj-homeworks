document.getElementById("file").onchange = function() {
  const fileDesc = document.querySelector(".input__wrapper-desc");
  let fileName = this.value.split("\\");
  fileName = fileName[fileName.length - 1];
  fileDesc.textContent = fileName;
};
