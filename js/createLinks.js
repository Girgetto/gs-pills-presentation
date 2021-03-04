function createPillsLinks(pills) {
  let link = document.createElement("ul");
  for (let index = 0; index < pills.length; index++) {
    const pill = pills[index];

    var h1Elements = new Array();
    $.each(pill.textContent.split("<h1>"), function (i, content) {
      if (content.indexOf("</h1>") !== -1) {
        h1Elements.push(content.substring(0, content.indexOf("</h1>")));
      }
    });

    let li = document.createElement("li");
    li.addEventListener("click", function () {
      setContent(pill.textContent);
    });
    li.innerHTML += h1Elements[0];
    link.appendChild(li);
  }
  document.querySelector(".pills-card").appendChild(link);
}
