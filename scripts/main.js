var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (localStorage.getItem('everydaycalendar')) {
  dayStates = JSON.parse(localStorage.getItem('everydaycalendar'))
  console.log('yep');
  console.log(dayStates[10]);
} else {
  dayStates = []
  var noStorage = true;
  console.log('nope');
  console.log(dayStates[10]);
}

localStorage.removeItem('everydaycalendar')

var strArr = JSON.stringify(dayStates);
// console.log(dayStates.length);

function setDays() {
  for (var i = 1; i < dayStates.length; i++) {

    if (dayStates[i] != null) {
      var img = document.getElementById(i);

      if (dayStates[i] === false) {
        img.src = "./images/day-hex.svg"
      } else {
        img.src = "./images/day-hex-fill.svg"

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

      var img = document.createElement("img");
      img.src = "./images/day-hex.svg";
      img.style.height = "30px"
      var month = String(i + 1);
      var day = String(j);
      img.id = month.concat(j);
      if (noStorage) {

        dayStates[img.id] = false;
      }

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
  if (dayStates[imgId.id] === false) {
    imgId.src = "./images/day-hex-fill.svg"
    dayStates[imgId.id] = true;
  } else {
    this.querySelector('img').src = "./images/day-hex.svg"
    dayStates[imgId.id] = false;
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
    setDays();


}

setDays();
