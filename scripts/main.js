var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Checking whether theres local storage.
// THIS IS WORKING!!!!
if (localStorage.getItem('everydaycalendar')) {
  dayStates = JSON.parse(localStorage.getItem('everydaycalendar'))
  console.log('There is stuff on local storage.');
  console.log(dayStates[10]);
} else {
  dayStates = []
  var noStorage = true;
  console.log('Nothing on local storage.');
  console.log(dayStates[10]);
}


var strArr = JSON.stringify(dayStates);
// console.log(dayStates.length);

function setDays() {

  for (var i = 1; i < dayStates.length; i++) {

    if (dayStates[i] != null) {
      var img = document.getElementById(i);
      var labelId = "p".concat(img.id);

      var label = document.getElementById(labelId);

      if (dayStates[i] === false) {
        img.src = "./images/day-hex.svg"
        label.style.color = "white"
      } else {
        img.src = "./images/day-hex-fill.svg"
        label.style.color = "#005288"

      }
      console.log(dayStates[i])
    }
  }
}




function januaryColumn() {
  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < monthLength[i]; j++) {
      var janela = document.getElementById('calendar-grid');
      var div = document.createElement("div");
      div.className = "day-container";
      div.style.gridColumnStart = i + 1;
      div.style.gridRowStart = j+2;

      var img = document.createElement("img");
      img.src = "./images/day-hex.svg";
      img.style.height = "30px"
      var month = String(i + 1);
      var day = String(j+1);
      img.id = month.concat(j+1);
      if (noStorage) {

        dayStates[img.id] = false;
      }
      var label = document.createElement("p");
      label.className = "day-number"
      label.innerHTML = String(j + 1);
      label.id = "p".concat(img.id);

      div.appendChild(label);
      div.appendChild(img);
      janela.appendChild(div);
      console.log("ok");
    }
  }
}



januaryColumn();
var dias = document.body.getElementsByClassName('day-container');

for (var i = 0; i < dias.length; i++) {
  dias[i].addEventListener("click", testClick)

}

var buttonClear = document.getElementById('clear-all');
buttonClear.addEventListener("click", clearAll)

function testClick() {
  imgId = this.querySelector('img')
  label = this.querySelector('.day-number');
console.log(label)
  if (dayStates[imgId.id] === false) {
    imgId.src = "./images/day-hex-fill.svg"
    dayStates[imgId.id] = true;
console.log("azul")
    label.style.color = "#005288"


  } else {
    imgId.src = "./images/day-hex.svg"
    dayStates[imgId.id] = false;
    label.style.color = "white"
    console.log("branco")

  }
  strArr = JSON.stringify(dayStates);
  localStorage.setItem("everydaycalendar", strArr);
}

function clearAll() {
  for (var i = 1; i < dayStates.length; i++) {

    if (dayStates[i] === true) {
      dayStates[i] = false
    }
  }
  strArr = JSON.stringify(dayStates);

  localStorage.setItem("everydaycalendar", strArr);
  localStorage.removeItem('everydaycalendar');

  setDays();


}

setDays();
