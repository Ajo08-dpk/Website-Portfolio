// contact section
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "thank.html";
        } else {
          return response.json().then((data) => {
            if (data.errors) {
              alert(data.errors.map((error) => error.message).join(", "));
            } else {
              alert("There was a problem with the submission.");
            }
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was a problem with the submission.");
      });
  });
});
