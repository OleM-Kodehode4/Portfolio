document.addEventListener("DOMContentLoaded", () => {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  if (window.location.hash) {
    history.replaceState(null, null, " ");
  }

  const body = document.body;

  /**
   * Hjelpefunksjon: Oppretter en <section> med gitt id og innhold.
   */
  function createSection(id, contentElements = []) {
    const section = document.createElement("section");
    section.id = id;
    section.setAttribute("role", "region");
    section.setAttribute("aria-labelledby", `${id}-header`);

    contentElements.forEach((element) => {
      section.appendChild(element);
    });

    body.appendChild(section);
  }

  /**
   * Hjelpefunksjon: Henter en vits fra JokeAPI og setter tekst i <p>.
   */
  function fetchJoke(paragraph) {
    fetch(
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist,explicit"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.type === "single") {
          paragraph.textContent = data.joke;
        } else {
          paragraph.textContent = `${data.setup} - ${data.delivery}`;
        }
      })
      .catch((error) => {
        paragraph.textContent = "Kunne ikke laste inn en vits.";
        console.error("Error fetching joke:", error);
      });
  }

  /**
   * Oppretter navigasjonen (header).
   */
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

  /**
   * Oppretter seksjonen #home.
   */
  function createHomeSection() {
    const img = document.createElement("img");
    img.src = "./pics/pic-ole-1.jpg";
    img.alt = "Ole Mathias";
    img.dataset.src = "./pics/pic-ole-1.jpg";
    img.classList.add("lazy");

    const infoBox = document.createElement("div");
    infoBox.className = "info-box";

    const h1 = document.createElement("h1");
    h1.id = "home-header";
    const h1Span = document.createElement("span");
    h1Span.textContent = "Ole Brænde";
    h1.appendChild(h1Span);

    const h3 = document.createElement("h3");
    const h3Span = document.createElement("span");
    h3Span.textContent = "Jr. Frontend | IT-Utvikler";
    // h3.appendChild(h3Span);

    const p = document.createElement("p");
    p.textContent = "Laster inn en vits...";
    fetchJoke(p);

    infoBox.appendChild(h1);
    infoBox.appendChild(h3);
    infoBox.appendChild(p);

    // Knapper
    const btnBox = document.createElement("div");
    btnBox.className = "btn-box";

    const btnGithub = document.createElement("div");
    btnGithub.className = "btn";
    btnGithub.textContent = "Github";
    btnGithub.addEventListener("click", () => {
      window.open("https://github.com/OleM-Kodehode4", "_blank");
    });

    const btnContact = document.createElement("div");
    btnContact.className = "btn";
    btnContact.textContent = "Kontakt meg";
    btnContact.addEventListener("click", () => {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });

    btnBox.appendChild(btnGithub);
    btnBox.appendChild(btnContact);

    createSection("home", [img, infoBox, btnBox]);
  }

  /**
   * Oppretter seksjonen #skill - Ferdigheter.
   */
  function createSkillSection() {
    const skillBox = document.createElement("div");
    skillBox.className = "skill-box";

    const h2 = document.createElement("h2");
    const h2Span = document.createElement("span");
    const h2Icon = document.createElement("i");
    h2Icon.className = "bx bx-code-alt";
    h2Span.appendChild(h2Icon);
    h2Span.appendChild(document.createTextNode("Ferdigheter"));
    h2.appendChild(h2Span);

    const skillsDiv = document.createElement("div");
    skillsDiv.className = "skills";

    const ul1 = document.createElement("ul");
    ["HTML", "CSS", "JavaScript"].forEach((skill) => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      const icon = document.createElement("i");

      if (skill.toLowerCase() === "html") {
        icon.className = "bx bxl-html5";
      } else if (skill.toLowerCase() === "css") {
        icon.className = "bx bxl-css3";
      } else {
        icon.className = `bx bxl-${skill.toLowerCase()}`;
      }

      span.appendChild(icon);
      span.appendChild(document.createTextNode(` ${skill}`));
      li.appendChild(span);
      ul1.appendChild(li);
    });

    const ul2 = document.createElement("ul");
    ["React", "Git", "Figma"].forEach((skill) => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      const icon = document.createElement("i");
      icon.className = `bx bxl-${skill.toLowerCase()}`;

      span.appendChild(icon);
      span.appendChild(document.createTextNode(` ${skill}`));
      li.appendChild(span);
      ul2.appendChild(li);
    });

    skillsDiv.appendChild(ul1);
    skillsDiv.appendChild(ul2);

    skillBox.appendChild(h2);
    skillBox.appendChild(skillsDiv);

    const skillImg = document.createElement("img");
    skillImg.src = "./pics/pic-ole-2.jpg";
    skillImg.alt = "Ole Mathias";
    skillImg.dataset.src = "./pics/pic-ole-2.jpg";
    skillImg.classList.add("lazy");

    createSection("skill", [skillBox, skillImg]);
  }

  /**
   * Oppretter seksjonen #project - Prosjekter.
   */
  function createProjectSection() {
    const section = document.createElement("section");
    section.id = "project";

    // Header med span
    const header = document.createElement("h1");
    const headerSpan = document.createElement("span");
    headerSpan.textContent = "Prosjekter";
    header.appendChild(headerSpan);

    // Prosjektboks
    const box = document.createElement("div");
    box.className = "box";

    const title = document.createElement("h2");
    title.textContent = "React Router Project";

    const description = document.createElement("p");
    description.textContent =
      "Et prosjekt som viser hvordan React Router fungerer.";

    // Prosjektbilde
    const projectImg = document.createElement("img");
    projectImg.src = "./pics/react-router-project.jpg";
    projectImg.alt = "React Router Project";
    projectImg.className = "project-image";

    // GitHub-knapp med ikon
    const githubLink = document.createElement("a");
    githubLink.href = "https://olebraende.github.io/react-router-project/";
    githubLink.target = "_blank";
    githubLink.className = "github-btn";
    githubLink.setAttribute("aria-label", "Se live demo på GitHub");

    const githubIcon = document.createElement("i");
    githubIcon.className = "bx bxl-github";

    const githubText = document.createTextNode(" Se Live Demo på her");

    githubLink.appendChild(githubText);
    githubLink.appendChild(githubIcon);

    // Knapp for å se alle prosjekter
    const allProjectsLink = document.createElement("a");
    allProjectsLink.href = "projects.html";
    allProjectsLink.target = "_blank";
    allProjectsLink.className = "btn";
    allProjectsLink.textContent = "Se alle prosjekter";

    // Sett sammen elementene
    box.appendChild(title);
    box.appendChild(description);
    box.appendChild(projectImg);
    box.appendChild(githubLink);
    box.appendChild(allProjectsLink);

    section.appendChild(header);
    section.appendChild(box);

    // Plasser seksjonen riktig
    const aboutSection = document.getElementById("about");
    document.body.insertBefore(section, aboutSection);
  }

  /**
   * Oppretter seksjonen #about - Om meg.
   */
  function createAboutSection() {
    const header = document.createElement("h1");
    header.id = "about-header";
    header.className = "header";

    const headerSpan = document.createElement("span");
    headerSpan.textContent = "Om meg";
    header.appendChild(headerSpan);

    const aboutContainer = document.createElement("div");
    aboutContainer.className = "about-container";

    const abouts = [
      {
        title: "",
        desc: [
          "Hei, jeg heter Ole Brænde, en engasjert og nysgjerrig utvikler som brenner for å skape løsninger som gir verdi. " +
            "Med interesse for hele spekteret av utvikling er jeg alltid motivert til å lære mer og ta i bruk nye verktøy og teknologier.",
          "Det som driver meg, er muligheten til å løse problemer gjennom effektiv kode og innovative løsninger. " +
            "Jeg er detaljorientert, samtidig som jeg har et sterkt fokus på brukervennlighet og ytelse. " +
            "Ved å holde meg oppdatert på moderne teknologi, sørger jeg for å levere løsninger som er både robuste og fremtidsrettede.",
          "Jeg trives i team der jeg kan samarbeide tett med andre utviklere, dele kunnskap og kontinuerlig forbedre både meg selv og prosjektene jeg jobber med. " +
            "Enten det handler om frontend, backend eller noe midt imellom, er jeg klar til å ta utfordringen og bidra.",
        ],
      },
    ];

    abouts.forEach((about) => {
      const box = document.createElement("div");
      box.className = "box";

      // Tittel
      const aboutTitle = document.createElement("h1");
      const aboutTitleSpan = document.createElement("span");
      aboutTitleSpan.textContent = about.title;
      aboutTitle.appendChild(aboutTitleSpan);
      box.appendChild(aboutTitle);

      // Avsnitt
      about.desc.forEach((paragraph) => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        box.appendChild(p);
      });

      aboutContainer.appendChild(box);
    });

    createSection("about", [header, aboutContainer]);
  }

  /**
   * Oppretter en "footer"-aktig seksjon med kontaktinfo.
   */
  function createFooter() {
    const footer = document.createElement("contact");
    footer.id = "contact";

    // Venstre kolonne
    const colLeft = document.createElement("div");
    colLeft.className = "col-left";

    const colBox1 = document.createElement("div");
    colBox1.className = "col-box";
    const mapIcon = document.createElement("i");
    mapIcon.className = "bx bx-copyright";
    const mapSpan = document.createElement("span");
    mapSpan.textContent = "2025 Ole Mathias Brænde";
    colBox1.appendChild(mapIcon);
    colBox1.appendChild(mapSpan);

    // const colBox2 = document.createElement("div");
    // colBox2.className = "col-box";
    // const phoneIcon = document.createElement("i");
    // phoneIcon.className = "bx bx-phone";
    // const phoneSpan = document.createElement("span");
    // phoneSpan.textContent = "+47 123 45 678";
    // colBox2.appendChild(phoneIcon);
    // colBox2.appendChild(phoneSpan);

    // const colBox3 = document.createElement("div");
    // colBox3.className = "col-box";
    // const envelopeIcon = document.createElement("i");
    // envelopeIcon.className = "bx bx-envelope";
    // const envelopeSpan = document.createElement("span");
    // envelopeSpan.textContent = "example@69mail.com";
    // colBox3.appendChild(envelopeIcon);
    // colBox3.appendChild(envelopeSpan);

    colLeft.appendChild(colBox1);
    // colLeft.appendChild(colBox2);
    // colLeft.appendChild(colBox3);

    // Høyre kolonne
    const colRight = document.createElement("div");
    colRight.className = "col-right";

    const colRightSpan = document.createElement("span");
    colRightSpan.textContent = "Om min reise";

    const colRightP = document.createElement("p");
    colRightP.textContent =
      "Jeg startet med frontend-utvikling i september 2024, drevet av en lidenskap for teknologi. " +
      "Siden da har jeg lært moderne webteknologier og bygget flere prosjekter  " +
      "alltid med fokus på brukervennlighet og gode løsninger.";

    const socialIcons = document.createElement("div");
    socialIcons.className = "social-icons";

    const socialLinks = [
      { icon: "github", url: "https://github.com/OleM-Kodehode4" },
      { icon: "linkedin", url: "https://www.linkedin.com/in/olebrande/" },
      { icon: "bx bx-envelope", url: "mailto:olembrande.work@gmail.com" },
    ];

    socialLinks.forEach((social) => {
      const iconSpan = document.createElement("span");
      const a = document.createElement("a");
      a.href = social.url;
      a.target = "click";

      // Github og LinkedIn bruker "bxl-" + navnet, mens "bx bx-envelope" er litt annerledes
      if (social.icon.includes(" ")) {
        // F.eks. "bx bx-envelope"
        a.innerHTML = `<i class="${social.icon}"></i>`;
      } else {
        a.innerHTML = `<i class="bx bxl-${social.icon}"></i>`;
      }

      iconSpan.appendChild(a);
      socialIcons.appendChild(iconSpan);
    });

    colRight.appendChild(colRightSpan);
    colRight.appendChild(colRightP);
    colRight.appendChild(socialIcons);

    footer.appendChild(colLeft);
    footer.appendChild(colRight);
    body.appendChild(footer);
  }

  // Kall funksjonene for å bygge hele siden
  createNav();
  createHomeSection();
  createSkillSection();
  createProjectSection();
  createAboutSection();
  createFooter();

  /**
   * Lazy-loading av bilder (IntersectionObserver).
   */
  const lazyImages = document.querySelectorAll("img.lazy");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => {
    imageObserver.observe(img);
  });

  /**
   * Fokus-styling (WCAG).
   */
  document.querySelectorAll("a, button").forEach((element) => {
    element.addEventListener("focus", () => {
      element.style.outline = "2px solid var(--linear-gradient)";
      element.style.outlineOffset = "2px";
    });
    element.addEventListener("blur", () => {
      element.style.outline = "none";
      element.style.outlineOffset = "0";
    });
  });

  /**
   * Modal for prosjekter.
   */
  const modal = document.getElementById("projectModal");
  const closeModalBtn = document.getElementsByClassName("close")[0];

  closeModalBtn.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  /**
   * Tilbake til toppen-knapp.
   */
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  /**
   * Myk scrolling for interne lenker (#anker).
   */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSelector = this.getAttribute("href");
      const target = document.querySelector(targetSelector);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /**
   * Enkel hover-effekt på .box-elementer.
   */
  document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.transform = "scale(1.05)";
    });
    box.addEventListener("mouseout", () => {
      box.style.transform = "scale(1)";
    });
  });
});
