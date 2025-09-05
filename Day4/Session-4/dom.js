// Select elements
const form = document.getElementById("jobForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const positionField = document.getElementById("position");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

// Listen for submit event
form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload

  // Get values
  const name = nameField.value;
  const email = emailField.value;
  const phone = phoneField.value;
  const position = positionField.value;

  // Update DOM with result
  resultText.innerText = `Thank you, ${name}! 
  Your application for "${position}" has been submitted. 
  We will contact you at ${email} / ${phone}.`;

  // Show result box
  resultBox.style.display = "block";

  // Add success class effect
  resultBox.style.background = "#eafaf1";
  resultBox.style.border = "2px solid #27ae60";

  // Reset form
  form.reset();
});

// Extra DOM event example: highlight input on focus
[nameField, emailField, phoneField].forEach(input => {
  input.addEventListener("focus", () => {
    input.style.border = "2px solid #2980b9";
  });
  input.addEventListener("blur", () => {
    input.style.border = "1px solid #ccc";
  });
});
