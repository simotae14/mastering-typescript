const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;

btn.addEventListener("click", function() {
  alert(input.value);
  input.value = "";
})

// Type Assertion alternative syntax
const input2 = document.getElementById("todoinput")!;

(<HTMLInputElement>input).value