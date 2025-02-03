document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "React Router Project",
      desc: "Et prosjekt som viser hvordan React Router fungerer.",
      img: "./pics/react-router-project.jpg",
      link: "https://olebraende.github.io/react-router-project/",
    },
    {
      title: "Juleoppgave",
      desc: "En interaktiv adventskalender laget med HTML, CSS og JavaScript.",
      img: "./pics/juleoppgave.jpg",
      link: "https://olem-kodehode4.github.io/juleoppgave/",
    },
  ];

  const grid = document.querySelector(".projects-grid");

  projects.forEach(({ title, desc, img, link }) => {
    const box = document.createElement("div");
    box.className = "box";

    const projectTitle = document.createElement("h2");
    projectTitle.textContent = title;

    const projectDesc = document.createElement("p");
    projectDesc.textContent = desc;

    const projectImg = document.createElement("img");
    projectImg.src = img;
    projectImg.alt = title;
    projectImg.style.width = "100%";
    projectImg.style.borderRadius = "0.5em";

    const githubLink = document.createElement("a");
    githubLink.href = link;
    githubLink.target = "_blank";
    githubLink.className = "github-btn";
    githubLink.setAttribute("aria-label", "Se live demo på GitHub");

    const githubIcon = document.createElement("i");
    githubIcon.className = "bx bxl-github"; // GitHub-ikon fra Boxicons
    githubIcon.style.fontSize = "2em";

    githubLink.appendChild(githubIcon);

    // Legg til elementer i boksen
    box.appendChild(projectTitle);
    box.appendChild(projectDesc);
    box.appendChild(projectImg);
    box.appendChild(githubLink); // **GitHub-knappen**

    // Legg boksen i grid
    grid.appendChild(box);
  });
});
