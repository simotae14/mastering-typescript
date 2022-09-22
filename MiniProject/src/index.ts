const btn = document.getElementById("btn")!;

btn.addEventListener("click", function() {
  alert("CLICKED!!!");
})

let mystery: unknown = "Hello World!!!";

const numChars = (mystery as string).length