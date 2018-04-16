function getJson(url) {
  var res;
  var xmlHttp;

  res = '';
  xmlHttp = new XMLHttpRequest();

  if (xmlHttp != null) {
    xmlHttp.open('GET', url);
    xmlHttp.send(null);
    res = xmlHttp.responseText;
  }

  return res;
}
