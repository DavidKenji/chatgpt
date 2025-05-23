document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "✅ Message sent! I'll get back to you soon.";
  this.reset();
});
