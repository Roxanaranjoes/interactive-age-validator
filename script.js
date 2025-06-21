// script.js

// Show the preloader for 5 seconds on page load
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.classList.add('fade-out');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600); // Wait for fade-out animation to finish
  }, 2000); // Duration of preloader
});

// Main interaction function: collects and validates user name and age
function startInteraction() {
  const maxAttempts = 3; // Maximum number of retries allowed
  let attempts = 0;
  let name = "";
  let age = "";

  while (attempts < maxAttempts) {
    name = prompt("Please enter your name:");
    if (!name || name.trim() === "") {
      alert("Name cannot be empty.");
      attempts++;
      continue;
    }

    age = prompt(`Hi ${name}, please enter your age:`);

    if (!age || age.trim() === "") {
      alert("Age cannot be empty.");
      attempts++;
      continue;
    }

    const numericAge = Number(age);
    if (isNaN(numericAge)) {
      alert("Please enter a valid numeric age.");
      console.error("Error: Age must be a number.");
      attempts++;
      continue;
    }

    // Input is valid: display personalized message
    const consoleMessage = document.getElementById("consoleMessage");
    let message = "";

    if (numericAge < 18) {
      message = `👋 Hello ${name}, you are underage. Keep learning and enjoying coding!`;
    } else {
      message = `🚀 Hello ${name}, you are an adult. Get ready for amazing opportunities in the world of programming!`;
    }

    alert(message);
    console.log(message);
    consoleMessage.textContent = message;
    return; // End function once valid input is processed
  }

  // Too many invalid attempts: show final warning
  alert("⚠️ Too many invalid attempts. Please refresh the page to try again.");
  console.error("User exceeded the maximum number of input attempts.");
}

// Activate the interaction once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('startButton');
  if (button) {
    button.addEventListener('click', startInteraction);
  }
});


