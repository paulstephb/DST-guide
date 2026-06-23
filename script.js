const gridCalendar = document.getElementById("gridCalendar");
const btnDay = document.getElementById("btnDay");
const day = document.getElementById("dayInput");
const btnReset = document.getElementById("reset");
const seasonColor = document.getElementById("seasonColor");
// const calendarSize = document.getElementById("calendarSize");
let currentSize = 0;
function setDay() {
  //affichage du fond du calendrier + legende
  gridCalendar.style.display = "flex";
  seasonColor.style.display = "flex";

  currentSize += 10;
  btnDay.innerHTML = "+ 10";
  gridCalendar.innerHTML = "";
  // const size = calendarSize.valueAsNumber;
  const dayNumber = day.valueAsNumber;

  for (let i = 0; i < currentSize; i++) {
    const divDay = document.createElement("div");
    const count = document.createElement("p");
    divDay.classList.add("divDay");
    const currentDay = i + dayNumber;
    count.innerHTML = currentDay;
    gridCalendar.appendChild(divDay);
    divDay.appendChild(count);

    //condition trouvée avec IA
    //cycle lunaire
    if (currentDay >= 11 && (currentDay - 11) % 20 === 0) {
      const fullMoon = document.createElement("div");
      fullMoon.classList.add("fullMoon");
      divDay.classList.add("MoonBackground");
      divDay.appendChild(fullMoon);
    }
    if (currentDay >= 1 && (currentDay - 1) % 20 === 0) {
      const newMoon = document.createElement("div");
      newMoon.classList.add("newMoon");
      divDay.classList.add("MoonBackground");

      divDay.appendChild(newMoon);
    }
    //couleur saison
    const positionCycle = ((currentDay - 1) % 70) + 1;
    if (positionCycle >= 1 && positionCycle <= 20) {
      divDay.classList.add("autumn");
    } else if (positionCycle >= 21 && positionCycle <= 35) {
      divDay.classList.add("winter");
    } else if (positionCycle >= 36 && positionCycle <= 55) {
      divDay.classList.add("spring");
    } else {
      divDay.classList.add("summer");
    }
    //spawn DC
    if (positionCycle === 30) {
      divDay.classList.add("deerClops");
    }
    //spawn bearger
    if (currentDay > 70 && positionCycle === 6) {
      divDay.classList.add("bearger");
    }
    //spawn AL
    if (positionCycle === 56) {
      divDay.classList.add("antLion");
    }
    //spawn mooseGoose
    if (positionCycle === 37) {
      divDay.classList.add("mooseGoose");
    }
  }
}
//function qui reset le calendrier
function reset() {
  btnDay.innerHTML = "GO";
  currentSize = 0;
  gridCalendar.innerHTML = "";
  gridCalendar.style.display = "none";
  seasonColor.style.display = "none";
}

function

btnDay.addEventListener("click", setDay);
btnReset.addEventListener("click", reset);

//action de la touche entrée sur dayInput, trouvée avec IA
day.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    setDay();
  }
});
