function showForm(type) {
  const formSection = document.getElementById("form-section");
  const formTitle = document.getElementById("form-title");

  formTitle.textContent = type === "lost" ? "Report Lost Item" : "Report Found Item";
  formSection.classList.remove("hidden");
  document.getElementById("confirmation").classList.add("hidden");
}

// Handle form submission dynamically
document.getElementById("item-form").addEventListener("submit", function (e) {
  e.preventDefault();
  this.reset();
  document.getElementById("confirmation").classList.remove("hidden");
});
