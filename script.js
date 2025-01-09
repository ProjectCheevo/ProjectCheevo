document.addEventListener("DOMContentLoaded", function () {
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
});
