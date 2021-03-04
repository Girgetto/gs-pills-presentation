const images = ["./assets/img/Carlos.png", "./assets/img/Felipe.png"];

window.onload = function () {
  $.ajax({
    type: "GET",
    url: "https://guidesmiths.github.io/js-pills/rss.xml",
    dataType: "xml",
    success: function (xml) {
      const parser = new DOMParser();
      const serializer = new XMLSerializer();
      const xmlStr = serializer.serializeToString(xml);
      const dom = parser.parseFromString(xmlStr, "application/xml");

      const pills =
        dom.documentElement.nodeName == "parsererror"
          ? "error while parsing"
          : dom.getElementsByTagName("content:encoded");

      const [lastPill] = pills;
      setContent(lastPill.textContent);
    },
  });
  document.getElementById("header-image").src =
    images[Math.round(Math.random() * 1)];
  hljs.initHighlightingOnLoad();

  display.textContent = getReadableTime(timer);
};
