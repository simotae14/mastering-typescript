const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  console.log("SUBMITTED!");
}

form.addEventListener("submit", handleSubmit);