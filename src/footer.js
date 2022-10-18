export default function footer() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const githubLink = document.createElement("a");
    githubLink.setAttribute("href", "https://github.com/dev-fa");
    githubLink.setAttribute("target", "_blank");
    githubLink.textContent = "💻 dev-fa"
    githubLink.classList.add("footer-text")

    const footerText = document.createElement("span");
    footerText.textContent = "Made by ";
    footerText.classList.add("footer-text");

    footer.appendChild(footerText);
    footer.appendChild(githubLink);

    return footer;
}