// current-year
const year = document.querySelector("#current-year");
year.innerHTML = `${new Date().getFullYear()}`;

// responsive testing
let input = document.getElementById("input");
let iphone = document.getElementById("iphone");
let galaxy = document.getElementById("galaxy");
let ipad = document.getElementById("ipad");
let mac = document.getElementById("mac");

// iphone x
iphone.addEventListener("click", () => {
  let url = input.value;
  if (url === "") {
    alert("Please Enter url");
  } else {
    // Open a new window with a specific size
    var newWindow = window.open(url, "_blank", "width=375,height=812");
  }
});
// galaxy note
galaxy.addEventListener("click", () => {
  let url = input.value;
  if (url === "") {
    alert("Please Enter url");
  } else {
    // Open a new window with a specific size
    var newWindow = window.open(url, "_blank", "width=412,height=869");
  }
});
// ipad pro
ipad.addEventListener("click", () => {
  let url = input.value;
  if (url === "") {
    alert("Please Enter url");
  } else {
    // Open a new window with a specific size
    var newWindow = window.open(url, "_blank", "width=1024,height=1366");
  }
});
// max osc
mac.addEventListener("click", () => {
  let url = input.value;
  if (url === "") {
    alert("Please Enter url");
  } else {
    // Open a new window with a specific size
    var newWindow = window.open(url, "_blank", "width=1920,height=1080");
  }
});
