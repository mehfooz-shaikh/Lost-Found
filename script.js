function showForm(type) {
  const formSection = document.getElementById("form-section");
  const formTitle = document.getElementById("form-title");

  formTitle.textContent = type === "lost" ? "Report Lost Item" : "Report Found Item";
  formSection.classList.remove("hidden");
}
