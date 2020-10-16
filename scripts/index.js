var wineData =
[
  {
    "id": "1",
    "image": "#",
    "name": "TestWine1",
    "price": "$100.00"
  },
  {
    "id": "2",
    "image": "#",
    "name": "TestWine2",
    "price": "$30.00"
  },
  {
    "id": "3",
    "image": "#",
    "name": "TestWine3",
    "price": "$10.00"
  }
]

displayWine();

function displayWine() {
  var out = "";
  wineData.forEach(wine => {
    out += "<div>";
    out += "<img src='" + wine.image + "'>";
    out += "<h2>" + wine.name + "</h2>";
    out += "<p>" + wine.price + "</p>";
    out += "<input type='number' id='wine" + wine.id + "' name='wine" + wine.id + "' min='1' max='100'>";
    out += "<button id='wineButton" + wine.id + "'>Add</button>";
    out += "</div>";
    document.querySelector("#wineDisplay").innerHTML += out;
    out = "";
  });
}