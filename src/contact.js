import { addFooter } from "./footer.js";

function loadContact() {
    const page3Container = document.createElement("div");
    page3Container.className = "page3-container";

    const contactText = document.createElement("div");
    contactText.className = "contact-text";

    const paragraph1 = document.createElement("p");
    paragraph1.className = "contact-paragraph";
    paragraph1.innerHTML = "Herenstraat 33, 2313 AE Leiden<br>012-3456789 - guiseppe@restaurant.com";

    const contactButton1 = document.createElement("button");
    contactButton1.className = "contact-button";
    contactButton1.textContent = "Book a table";

    const paragraph2 = document.createElement("p");
    paragraph2.className = "contact-paragraph";
    paragraph2.innerHTML = "Open Tuesday to Sunday from<br>5:00 PM to 10:00 PM."

    // Add Google Maps iframe
  const iframe = document.createElement("iframe");
  iframe.className = "iframe";
  iframe.src ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.0154488644694!2d4.4866484121160255!3d52.15222876327625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c68b34451e51%3A0xb778833386f8ad6e!2sPizzeria%20Giuseppe!5e0!3m2!1sen!2snl!4v1737478595297!5m2!1sen!2snl";
  iframe.allowFullscreen = true;
  iframe.loading = "lazy";

  document.querySelector("#content").appendChild(page3Container);
  
  page3Container.appendChild(contactText);
  contactText.append(iframe, paragraph1, paragraph2, contactButton1);
 
  addFooter();
}

export { loadContact };