const images = ["./assets/img/Carlos.png", "./assets/img/Felipe.png"];

window.onload = function () {
  $.ajax({
    type: "GET",
    url: "https://girgetto.github.io/js-pills/rss.xml",
    dataType: "xml",
    success: function (xml) {
      const parser = new DOMParser();
      const serializer = new XMLSerializer();
      const xmlStr = serializer.serializeToString(xml);
      const dom = parser.parseFromString(xmlStr, "application/xml");

      const lastPill =
        dom.documentElement.nodeName == "parsererror"
          ? "error while parsing"
          : dom.getElementsByTagName("content:encoded")[0].textContent;

      setContent(lastPill);
    },
  });
  document.getElementById("header-image").src =
    images[Math.round(Math.random() * 1)];
  hljs.initHighlightingOnLoad();

  display.textContent = getReadableTime(timer);
};
