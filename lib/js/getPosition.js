var coord;
var PositionOptions = {
  enbleHighAccuracy: false,
  timeout: 10000,
  maximumAge: 30000
};

function getPosition() {
  navigator.geolocation.getCurrentPosition(PositionSuccess, PositionFail, PositionOptions);
  return coord;
}

function PositionSuccess(position) {
  coord = position.coords;
}

function PositionFail(err) {
  console.warn("ERROR(" + err.code + "): " + err.message);
}
