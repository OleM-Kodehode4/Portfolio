document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "React Menu App",
      desc: "Et dynamisk navigeringsprosjekt laget med React.",
      img: "./pics/web-design.jpg",
      link: "https://olem-kodehode4.github.io/React-menu-app/",
    },
    {
      title: "Juleoppgave",
      desc: "En interaktiv adventskalender laget med HTML, CSS og JavaScript.",
      img: "./pics/web-dev.jpg",
      link: "https://olem-kodehode4.github.io/juleoppgave/",
    },
    // Flere prosjekter kan legges til her
  ];

  const grid = document.querySelector(".projects-grid");

  projects.forEach(({ title, desc, img, link }) => {
    const box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `
        <h2>${title}</h2>
        <p>${desc}</p>
        <img src="${img}" alt="${title}">
        <a href="${link}" class="btn2">Vis prosjekt</a>
      `;
    grid.appendChild(box);
  });
});
