function setContent(pillReadme) {
  document.getElementById("secret").innerHTML = pillReadme.includes(
    "Merging arrays"
  )
    ? `<div class="felipe-comic">
      <img id="felipe-image" src="./assets/img/Felipe.png"></img>
      <div class="speech-bubble-felipe">Poco se habla del merging arrays</div>
      </div>`
    : ``;

  var converter = new showdown.Converter({ tables: true }),
    html = converter.makeHtml(pillReadme);

  document.getElementById("content").innerHTML = html;
  document.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightBlock(block);
  });
}
