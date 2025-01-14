document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  if (window.location.hash) {
    history.replaceState(null, null, " ");
  }

  const body = document.body;

  function createNav() {
    console.log("Creating navigation");
    const navElement = document.createElement("nav");
    navElement.setAttribute("role", "navigation");

    const logo = document.createElement("a");
    logo.href = "#";
    logo.className = "logo";
    const logoSpan = document.createElement("span");
    logoSpan.textContent = "Portfolio";
    logo.appendChild(logoSpan);
    logo.setAttribute("aria-label", "Homepage");
    navElement.appendChild(logo);

    const ul = document.createElement("ul");
    ul.className = "links";

    const links = ["Hjem", "Ferdigheter", "Prosjekter", "Om meg"];
    const ids = ["home", "skill", "project", "about"];
    links.forEach((link, index) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `#${ids[index]}`;
      a.textContent = link;
      a.setAttribute("role", "menuitem");
      li.appendChild(a);
      ul.appendChild(li);
    });
    navElement.appendChild(ul);

    const menuIcon = document.createElement("i");
    menuIcon.className = "bx bx-menu-alt-right";
    menuIcon.id = "menu";
    menuIcon.setAttribute("aria-label", "Menu");
    navElement.appendChild(menuIcon);

    const contactBtn = document.createElement("a");
    contactBtn.href = "#contact";
    contactBtn.className = "btn";
    contactBtn.textContent = "Kontakt Meg";
    contactBtn.setAttribute("role", "button");
    navElement.appendChild(contactBtn);

    body.appendChild(navElement);

    // Add event listener for the menu after it has been created
    const menu = document.querySelector("#menu");
    const nav = document.querySelector(".links");

    menu.addEventListener("click", () => {
      menu.classList.toggle("bx-x");
      nav.classList.toggle("active");
    });

    // Add scroll event listener for sticky header
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navElement.classList.add("scrolled");
      } else {
        navElement.classList.remove("scrolled");
      }
    });
  }

  function createSection(id, content) {
    console.log("Creating section:", id);
    const section = document.createElement("section");
    section.id = id;
    section.setAttribute("role", "region");
    section.setAttribute("aria-labelledby", `${id}-header`);

    content.forEach((element) => {
      section.appendChild(element);
    });

    body.appendChild(section);
  }

  function fetchJoke(p) {
    fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist,explicit")
      .then((response) => response.json())
      .then((data) => {
        if (data.type === "single") {
          p.textContent = data.joke;
        } else {
          p.textContent = `${data.setup} - ${data.delivery}`;
        }
      })
      .catch((error) => {
        p.textContent = "Kunne ikke laste inn en vits.";
        console.error("Error fetching joke:", error);
      });
  }

  function createHomeSection() {
    createSection("home", [
      (() => {
        const img = document.createElement("img");
        img.src = "./pics/pic-ole-1.jpg";
        img.alt = "Ole Mathias";
        img.dataset.src = "./pics/pic-ole-1.jpg";
        img.classList.add("lazy");
        return img;
      })(),
      (() => {
        const div = document.createElement("div");
        div.className = "info-box";
        const h1 = document.createElement("h1");
        h1.id = "home-header";
        const h1Span = document.createElement("span");
        h1Span.textContent = "Ole Mathias Brænde";
        h1.appendChild(h1Span);
        const h3 = document.createElement("h3");
        const h3Span = document.createElement("span");
        h3Span.textContent = "Jr. Frontend | IT-Dev";
        h3.appendChild(h3Span);
        const p = document.createElement("p");
        p.textContent = "Laster inn en vits...";
        div.appendChild(h1);
        div.appendChild(h3);
        div.appendChild(p);
        fetchJoke(p);
        return div;
      })(),
      (() => {
        const div = document.createElement("div");
        div.className = "btn-box";
        const btn1 = document.createElement("div");
        btn1.className = "btn";
        btn1.textContent = "Github";
        btn1.addEventListener("click", () => {
          window.open("https://github.com/OleM-Kodehode4", "_blank");
        });
        const btn2 = document.createElement("div");
        btn2.className = "btn";
        btn2.textContent = "Kontakt meg";
        btn2.addEventListener("click", () =>
          document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
        );
        div.appendChild(btn1);
        div.appendChild(btn2);
        return div;
      })(),
    ]);
  }

  function createSkillSection() {
    createSection("skill", [
      (() => {
        const div = document.createElement("div");
        div.className = "skill-box";
        const skillInfo = document.createElement("div");
        skillInfo.className = "skill-info";
        const h2 = document.createElement("h1");
        const h2Span = document.createElement("span");
        const h2Icon = document.createElement("i");
        h2Icon.className = "bx bx-code-alt";
        h2Span.appendChild(h2Icon);
        h2Span.appendChild(document.createTextNode("Skills"));
        h2.appendChild(h2Span);
        const skillsDiv = document.createElement("div");
        skillsDiv.className = "skills";
        const ul1 = document.createElement("ul");
        ["HTML", "CSS", "JavaScript"].forEach((skill) => {
          const li = document.createElement("li");
          const span = document.createElement("span");
          const icon = document.createElement("i");
          icon.className = `bx bxl-${skill.toLowerCase()}`;
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
        div.appendChild(skillInfo);
        div.appendChild(h2);
        div.appendChild(skillsDiv);

        return div;
      })(),
      (() => {
        const img = document.createElement("img");
        img.src = "./pics/pic-ole-2.jpg";
        img.alt = "Ole Mathias";
        img.dataset.src = "./pics/pic-ole-2.jpg";
        img.classList.add("lazy");
        return img;
      })(),
    ]);
  }

  function createProjectSection() {
    createSection("project", [
      (() => {
        const h1 = document.createElement("h1");
        h1.id = "project-header";
        h1.className = "header";
        const h1Span = document.createElement("span");
        h1Span.textContent = "Prosjekter";
        h1.appendChild(h1Span);
        return h1;
      })(),
      (() => {
        const div = document.createElement("div");
        div.className = "project-container";
        const projects = [
          {
            title: "Prosjekt-1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis at nulla voluptate nesciunt exercitationem pariatur sunt.",
            img: "./pics/web-design.jpg",
            link: "https://olem-kodehode4.github.io/React-menu-app/",
          },
          {
            title: "Prosjekt-2",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis at nulla voluptate nesciunt exercitationem pariatur sunt.",
            img: "./pics/web-dev.jpg",
            link: "https://olem-kodehode4.github.io/juleoppgave/",
          },
          {
            title: "Prosjekt-3",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis at nulla voluptate nesciunt exercitationem pariatur sunt.",
            img: "./pics/web-dev.jpg",
          },
        ];
        projects.forEach((project) => {
          const box = document.createElement("div");
          box.className = "box";
          const h1 = document.createElement("h1");
          const h1Span = document.createElement("span");
          h1Span.textContent = project.title;
          h1.appendChild(h1Span);
          const p = document.createElement("p");
          p.textContent = project.desc;
          const img = document.createElement("img");
          img.src = project.img;
          img.alt = project.title;
          img.dataset.src = project.img;
          img.classList.add("lazy");
          const btn2 = document.createElement("button");
          btn2.className = "btn2";
          btn2.textContent = "Vis prosjekt";
          btn2.addEventListener("click", () => {
            const modal = document.getElementById("projectModal");
            const iframe = document.getElementById("projectFrame");
            iframe.src = project.link;
            modal.style.display = "block";
          });
          box.appendChild(h1);
          box.appendChild(p);
          box.appendChild(img);
          box.appendChild(btn2);
          div.appendChild(box);
        });
        return div;
      })(),
    ]);
  }

  function createAboutSection() {
    createSection("about", [
      (() => {
        const h1 = document.createElement("h1");
        h1.id = "about-header";
        h1.className = "header";
        const h1Span = document.createElement("span");
        h1Span.textContent = "Om meg";
        h1.appendChild(h1Span);
        return h1;
      })(),
      (() => {
        const div = document.createElement("div");
        div.className = "about-container";
        const abouts = [
          {
            title: "",
            desc: [
              "Hei, jeg heter Ole Brænde, en engasjert og nysgjerrig utvikler som brenner for å skape løsninger som gir verdi. Med interesse for hele spekteret av utvikling er jeg alltid motivert til å lære mer og ta i bruk nye verktøy og teknologier.",
              "Det som driver meg, er muligheten til å løse problemer gjennom effektiv kode og innovative løsninger. Jeg er detaljorientert, samtidig som jeg har et sterkt fokus på brukervennlighet og ytelse. Ved å holde meg oppdatert på moderne teknologi, sørger jeg for å levere løsninger som er både robuste og fremtidsrettede.",
              "Jeg trives i team der jeg kan samarbeide tett med andre utviklere, dele kunnskap og kontinuerlig forbedre både meg selv og prosjektene jeg jobber med. Enten det handler om frontend, backend eller noe midt imellom, er jeg klar til å ta utfordringen og bidra.",
            ],
          },
        ];
        abouts.forEach((about) => {
          const box = document.createElement("div");
          box.className = "box";
          const h1 = document.createElement("h1");
          const h1Span = document.createElement("span");
          h1Span.textContent = about.title;
          h1.appendChild(h1Span);
          box.appendChild(h1);
          about.desc.forEach((paragraph) => {
            const p = document.createElement("p");
            p.textContent = paragraph;
            box.appendChild(p);
          });
          div.appendChild(box);
        });
        return div;
      })(),
    ]);
  }

  function createFooter() {
    const footer = document.createElement("contact");
    footer.id = "contact";
    const colLeft = document.createElement("div");
    colLeft.className = "col-left";
    const colBox1 = document.createElement("div");
    colBox1.className = "col-box";
    const mapIcon = document.createElement("i");
    mapIcon.className = "bx bx-map";
    const mapSpan = document.createElement("span");
    mapSpan.textContent = "Oljegata 69, 6969, Volda";
    colBox1.appendChild(mapIcon);
    colBox1.appendChild(mapSpan);
    const colBox2 = document.createElement("div");
    colBox2.className = "col-box";
    const phoneIcon = document.createElement("i");
    phoneIcon.className = "bx bx-phone";
    const phoneSpan = document.createElement("span");
    phoneSpan.textContent = "+47 123 45 678";
    colBox2.appendChild(phoneIcon);
    colBox2.appendChild(phoneSpan);
    const colBox3 = document.createElement("div");
    colBox3.className = "col-box";
    const envelopeIcon = document.createElement("i");
    envelopeIcon.className = "bx bx-envelope";
    const envelopeSpan = document.createElement("span");
    envelopeSpan.textContent = "example@69mail.com";
    colBox3.appendChild(envelopeIcon);
    colBox3.appendChild(envelopeSpan);
    colLeft.appendChild(colBox1);
    colLeft.appendChild(colBox2);
    colLeft.appendChild(colBox3);
    const colRight = document.createElement("div");
    colRight.className = "col-right";
    const colRightSpan = document.createElement("span");
    colRightSpan.textContent = "Om min reise";
    const colRightP = document.createElement("p");
    colRightP.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatem, quod, quae, quos quas quia quibusdam quidem dolorum voluptates, doloremque quae. Quisquam voluptatem, quod, quae, quos quas quia quibusdam quidem dolorum voluptates, doloremque quae.";
    const socialIcons = document.createElement("div");
    socialIcons.className = "social-icons";
    const socialLinks = [
      { icon: "github", url: "https://github.com/OleM-Kodehode4" },
      { icon: "linkedin", url: "https://www.linkedin.com/in/olebrande/" },
      { icon: "discord-alt", url: "https://discord.com/yourprofile" },
    ];
    socialLinks.forEach((social) => {
      const span = document.createElement("span");
      const a = document.createElement("a");
      a.href = social.url;
      a.target = "click";
      const i = document.createElement("i");
      i.className = `bx bxl-${social.icon}`;
      a.appendChild(i);
      span.appendChild(a);
      socialIcons.appendChild(span);
    });
    colRight.appendChild(colRightSpan);
    colRight.appendChild(colRightP);
    colRight.appendChild(socialIcons);
    footer.appendChild(colLeft);
    footer.appendChild(colRight);
    body.appendChild(footer);
  }

  createNav();
  createHomeSection();
  createSkillSection();
  createProjectSection();
  createAboutSection();
  createFooter();

  const lazyImages = document.querySelectorAll("img");
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

  const modal = document.getElementById("projectModal");
  const span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

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

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Add hover effect to project boxes
  document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.transform = "scale(1.05)";
    });
    box.addEventListener("mouseout", () => {
      box.style.transform = "scale(1)";
    });
  });
});
