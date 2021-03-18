/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function headButtonClick() {
  document.getElementById("headDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//getgear test
function getGear() {
  var request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  request.open("GET", "https://api.osrsbox.com/items");

  request.onload = function () {
    console.log("sending request...");
    var data = JSON.parse(this.response);
    var jsonObjArray = [];
    jsonObjArray.push(data);
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var obj = data[i];
      console.log(obj.name);
    }
  };
  // Send request
  request.send();
}

function getGearFetch() {
  fetch("https://api.osrsbox.com/equipment")
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonResponse) {
      //for(var i = 0; i < jsonResponse.length; i++) {
      console.log(jsonResponse._items);
    });
}
