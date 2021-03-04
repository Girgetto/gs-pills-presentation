function createPillsLinks(pills) {
  let link = document.createElement("ul");
  for (let index = 0; index < pills.length; index++) {
    const pill = pills[index];

    let li = document.createElement("li");
    li.setAttribute(
      "onClick",
      `setContent(${pill.textContent})`
    );
    li.innerHTML += pill.name;
    link.appendChild(li);
  }
  document.querySelector(".pills-card").appendChild(link);
}
