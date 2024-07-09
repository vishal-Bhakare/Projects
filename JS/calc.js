let string = "";
let buttons = document.querySelectorAll(".btnInp");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (element) => {
    if (element.target.innerHTML === "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (element.target.innerHTML === "RESET") {
      string = "";
      document.querySelector("input").value = string;
    } else if (element.target.innerHTML === "DEL") {

       console.log(string)
      string = string.substring(0, string.length - 1);
      document.querySelector("input").value = string;
    } else {
      string = string + element.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

