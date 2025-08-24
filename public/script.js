// public/script.js
document.addEventListener("DOMContentLoaded", () => {
  
  const deleteForms = document.querySelectorAll(".delete-form");

  deleteForms.forEach(form => {
    form.addEventListener("submit", function (e) {
      const confirmed = confirm("Are you sure you want to delete this chat?");
      if (!confirmed) {
        e.preventDefault(); // stop form submission if user clicks Cancel
      }
    });
  });
});
