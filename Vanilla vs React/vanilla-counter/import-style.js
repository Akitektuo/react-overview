export default (path) => {
    const newStyleLink = document.createElement("link");
    newStyleLink.rel = "stylesheet";
    newStyleLink.href = path;

    const headElement = document.querySelector("head");
    headElement.appendChild(newStyleLink);
}