"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMITTED!");
}
form.addEventListener("submit", handleSubmit);
