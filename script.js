document.addEventListener("DOMContentLoaded", () => {
  try {
    console.log("DOM fully loaded and parsed");

    if (window.location.hash) {
      history.replaceState(null, null, " ");
    }

    try {
      const body = document.body;

      function createNav() {
        try {
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

          const links = [
            "Hjem",
            "Ferdigheter",
            "Prosjekter",
            "Om meg",
            "Kontakt",
          ];
          const ids = ["home", "skill", "project", "about", "contact"];
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
            try {
              menu.classList.toggle("bx-x");
              nav.classList.toggle("active");
            } catch (error) {
              console.error("Error toggling menu:", error);
            }
          });

          // Add scroll event listener for sticky header
          window.addEventListener("scroll", () => {
            try {
              if (window.scrollY > 50) {
                navElement.classList.add("scrolled");
              } else {
                navElement.classList.remove("scrolled");
              }
            } catch (error) {
              console.error("Error handling scroll event:", error);
            }
          });
        } catch (error) {
          console.error("Error creating navigation:", error);
        }
      }

      function createSection(id, content) {
        try {
          console.log("Creating section:", id);
          const section = document.createElement("section");
          section.id = id;
          section.setAttribute("role", "region");
          section.setAttribute("aria-labelledby", `${id}-header`);

          content.forEach((element) => {
            section.appendChild(element);
          });

          body.appendChild(section);
        } catch (error) {
          console.error("Error creating section", id, ":", error);
        }
      }

      createNav();

      createSection("home", [
        (() => {
          const img = document.createElement("img");
          img.src = "./pics/pic-ole-1.jpg";
          img.alt = "Ole Mathias";
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
          h3Span.textContent = "Jr.Frontend";
          h3.appendChild(h3Span);
          const p = document.createElement("p");
          p.textContent =
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, labore!";
          div.appendChild(h1);
          div.appendChild(h3);
          div.appendChild(p);
          return div;
        })(),
        (() => {
          const div = document.createElement("div");
          div.className = "btn-box";
          const btn1 = document.createElement("div");
          btn1.className = "btn";
          btn1.textContent = "Github";
          const btn2 = document.createElement("div");
          btn2.className = "btn";
          btn2.textContent = "Kontakt meg";
          div.appendChild(btn1);
          div.appendChild(btn2);
          return div;
        })(),
      ]);

      createSection("skill", [
        (() => {
          const div = document.createElement("div");
          div.className = "skill-box";
          const skillInfo = document.createElement("div");
          skillInfo.className = "skill-info";
          const h1 = document.createElement("h1");
          h1.id = "skil-header";
          const h1Span = document.createElement("span");
          h1Span.textContent = "(WIP)";
          h1.appendChild(h1Span);
          const p = document.createElement("p");
          p.textContent =
            "Her kommer en quote API, når jeg finner en som fungerer og ikke slutter å fungere når brukeren reloader siden";
          skillInfo.appendChild(h1);
          skillInfo.appendChild(p);
          const h2 = document.createElement("h2");
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
          return img;
        })(),
      ]);

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
              title: "Fakta",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis at nulla voluptate nesciunt exercitationem pariatur sunt.",
            },
            {
              title: "Erfaring og kompetanse",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis at nulla voluptate nesciunt exercitationem pariatur sunt.",
            },
          ];
          abouts.forEach((about) => {
            const box = document.createElement("div");
            box.className = "box";
            const h1 = document.createElement("h1");
            const h1Span = document.createElement("span");
            h1Span.textContent = about.title;
            h1.appendChild(h1Span);
            const p = document.createElement("p");
            p.textContent = about.desc;
            box.appendChild(h1);
            box.appendChild(p);
            div.appendChild(box);
          });
          return div;
        })(),
      ]);

      createSection("contact", [
        (() => {
          const h1 = document.createElement("h1");
          h1.id = "contact-header";
          h1.className = "header";
          const h1Span = document.createElement("span");
          h1Span.textContent = "Kontakt Meg";
          h1.appendChild(h1Span);
          return h1;
        })(),
        (() => {
          const div = document.createElement("div");
          div.className = "contact-info";
          const ul = document.createElement("ul");
          const contacts = [
            { icon: "github", text: "GitHub" },
            { icon: "linkedin", text: "Linkedin" },
          ];
          contacts.forEach((contact) => {
            const li = document.createElement("li");
            const span = document.createElement("span");
            const icon = document.createElement("i");
            icon.className = `bx bxl-${contact.icon}`;
            span.appendChild(icon);
            span.appendChild(document.createTextNode(` ${contact.text}`));
            li.appendChild(span);
            ul.appendChild(li);
          });
          div.appendChild(ul);
          return div;
        })(),
        (() => {
          const div = document.createElement("div");
          div.className = "contact-box";
          const contactInfo = document.createElement("div");
          contactInfo.className = "contact-info";
          const ul = document.createElement("ul");
          const infos = [
            { icon: "map", text: "Norge" },
            { icon: "phone", text: "+47 123 45 678" },
            { icon: "envelope", text: "example@example.com" },
          ];
          infos.forEach((info) => {
            const li = document.createElement("li");
            const span = document.createElement("span");
            const icon = document.createElement("i");
            icon.className = `bx bx-${info.icon}`;
            span.appendChild(icon);
            span.appendChild(document.createTextNode(` ${info.text}`));
            li.appendChild(span);
            ul.appendChild(li);
          });
          contactInfo.appendChild(ul);
          const downloadBtn = document.createElement("a");
          downloadBtn.href = "./resume.pdf";
          downloadBtn.className = "download-btn";
          downloadBtn.download = true;
          const downloadIcon = document.createTextNode("📄");
          const downloadSpan = document.createElement("span");
          downloadSpan.textContent = "Download Resume";
          downloadBtn.appendChild(downloadIcon);
          downloadBtn.appendChild(downloadSpan);
          div.appendChild(contactInfo);
          div.appendChild(downloadBtn);
          return div;
        })(),
      ]);

      const footer = document.createElement("footer");
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
      ["github", "twitter", "instagram", "linkedin"].forEach((icon) => {
        const span = document.createElement("span");
        const i = document.createElement("i");
        i.className = `bx bxl-${icon}`;
        span.appendChild(i);
        socialIcons.appendChild(span);
      });
      colRight.appendChild(colRightSpan);
      colRight.appendChild(colRightP);
      colRight.appendChild(socialIcons);
      footer.appendChild(colLeft);
      footer.appendChild(colRight);
      body.appendChild(footer);
    } catch (error) {
      console.error("Error creating HTML content:", error);
    }
  } catch (error) {
    console.error("Error initializing DOMContentLoaded event:", error);
  }

  // Modal close functionality
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
});
