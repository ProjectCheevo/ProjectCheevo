document.addEventListener("DOMContentLoaded", function () {
  // Load the navbar
  fetch("nav.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load navbar: " + response.statusText);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch((error) => {
      console.error(error);
    });

  // Load the footer
  fetch("footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load footer: " + response.statusText);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => {
      console.error(error);
    });
});
