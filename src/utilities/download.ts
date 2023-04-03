export function downloadCV() {
  const CV = require("../assets/files/CV.pdf");
  fetch(CV)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "CV.pdf"); // Rename the downloaded file if necessary
      document.body.appendChild(link);
      link.click();
      link.remove();
    })
    .catch((error) => {
      console.error("Error downloading CV: ", error);
    });
}
