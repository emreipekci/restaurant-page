
function addFooter() {
    const contentDiv = document.querySelector("#content");
    const footer = document.createElement("footer");
    footer.textContent = "© Emre Ipekci 2025";

    contentDiv.appendChild(footer);
}

export { addFooter };