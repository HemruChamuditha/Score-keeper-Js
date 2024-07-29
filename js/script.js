const dropDownValue = document.querySelector(".drop-down-btn-value");
const dropDownMenu = document.querySelector(".dropdown-menu");
var maxValue;
dropDownMenu.addEventListener("click", function (e) {
    const value = e.target;
    dropDownValue.innerText = value.innerHTML;
    maxValue = value.innerText;
  
});
