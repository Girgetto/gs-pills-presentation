function createPillsLinks(pills) {
  let link = document.createElement("ul");
  pills.forEach((pill) => {
    let li = document.createElement("li");
    li.setAttribute(
      "onClick",
      `setContent('pillReadme')` // TODO: add pill README string
    );
    li.innerHTML += pill.name;
    link.appendChild(li);
  });
  document.querySelector("." + level).appendChild(link);
}
