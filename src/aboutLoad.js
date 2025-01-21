export function loadAbout() {
    const contentDiv = document.getElementById("content");

    const heading1 = document.createElement("h2");
    heading1.textContent = "Contact us";

    const paragraph1 = document.createElement("p");
    paragraph1.innerHTML = "Herenstraat 33, 2313 AE Leiden<br>012-3456789"

    const heading2 = document.createElement("h2");
    heading2.textContent = "Opening hours";

    const paragraph2 = document.createElement("p");
    paragraph2.innerHTML = "Closed on Monday.<br>Open Tuesday to Sunday from<br>5:00 PM to 10:00 PM."

    // Add Google Maps iframe
  const iframe = document.createElement("iframe");
  iframe.src ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.0154488644694!2d4.4866484121160255!3d52.15222876327625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c68b34451e51%3A0xb778833386f8ad6e!2sPizzeria%20Giuseppe!5e0!3m2!1sen!2snl!4v1737478595297!5m2!1sen!2snl";
  iframe.width = "600";
  iframe.height = "450";
  iframe.style.border = "0";
  iframe.allowFullscreen = true;
  iframe.loading = "lazy";

  contentDiv.appendChild(iframe);
  contentDiv.appendChild(heading1);
  contentDiv.appendChild(paragraph1);
  contentDiv.appendChild(heading2);
  contentDiv.appendChild(paragraph2);
  
}