document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ projects.js er lastet inn!");

  function createNav() {
    console.log("✅ createNav() kjører!");

    const body = document.body;
    const navElement = document.createElement("nav");
    navElement.setAttribute("role", "navigation");

    const logo = document.createElement("a");
    logo.href = "index.html";
    logo.className = "logo";
    logo.setAttribute("aria-label", "Homepage");
    const logoSpan = document.createElement("span");
    logoSpan.textContent = "Portfolio";
    logo.appendChild(logoSpan);

    const ul = document.createElement("ul");
    ul.className = "links";

    const menuItems = [
      { text: "Hjem", href: "index.html" },
      { text: "Ferdigheter", href: "index.html#skill" },
      { text: "Prosjekter", href: "projects.html" },
      { text: "Om meg", href: "index.html#about" },
    ];

    menuItems.forEach(({ text, href }) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = href;
      a.textContent = text;
      a.setAttribute("role", "menuitem");
      li.appendChild(a);
      ul.appendChild(li);
    });

    const menuIcon = document.createElement("i");
    menuIcon.className = "bx bx-menu-alt-right";
    menuIcon.id = "menu";
    menuIcon.setAttribute("aria-label", "Menu");

    const contactBtn = document.createElement("a");
    contactBtn.href = "index.html#contact";
    contactBtn.className = "btn";
    contactBtn.setAttribute("role", "button");
    contactBtn.textContent = "Kontakt Meg";

    navElement.appendChild(logo);
    navElement.appendChild(ul);
    navElement.appendChild(menuIcon);
    navElement.appendChild(contactBtn);
    body.insertBefore(navElement, body.firstChild);

    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("bx-x");
      ul.classList.toggle("active");
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navElement.classList.add("scrolled");
      } else {
        navElement.classList.remove("scrolled");
      }
    });
  }

  function loadProjects() {
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

    if (!grid) {
      console.error("❌ Feil: .projects-grid finnes ikke i HTML!");
      return;
    }

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
      projectImg.className = "project-image";

      const githubLink = document.createElement("a");
      githubLink.href = link;
      githubLink.target = "_blank";
      githubLink.className = "github-btn";
      githubLink.setAttribute("aria-label", "Se live demo på GitHub");

      const githubIcon = document.createElement("i");
      githubIcon.className = "bx bxl-github";
      githubIcon.style.fontSize = "1.5em";

      githubLink.appendChild(githubIcon);
      githubLink.appendChild(document.createTextNode(" Se Live Demo"));

      box.appendChild(projectTitle);
      box.appendChild(projectDesc);
      box.appendChild(projectImg);
      box.appendChild(githubLink);

      grid.appendChild(box);
    });

    console.log("✅ Prosjektene er lastet inn!");
  }
  createNav();
  loadProjects();
  createFooter();
});
