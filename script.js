const gridCalendar = document.getElementById("gridCalendar");
const btnDay = document.getElementById("btnDay");
const day = document.getElementById("dayInput");
const calendarSize = document.getElementById("calendarSize");

function setDay() {
  gridCalendar.innerHTML = "";
  const size = calendarSize.valueAsNumber;
  const dayNumber = day.valueAsNumber;

  for (let i = 0; i < size; i++) {
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
      divDay.appendChild(fullMoon);
    }
    if (currentDay >= 1 && (currentDay - 1) % 20 === 0) {
      const newMoon = document.createElement("div");
      newMoon.classList.add("newMoon");
      divDay.appendChild(newMoon);
    }

    //couleur saison
    const positionCycle = ((currentDay - 1) %70) + 1
    if (positionCycle >=1 && positionCycle <= 20) {
      divDay.classList.add("autumn")
    } else if (positionCycle >=21 && positionCycle <= 35) {
      divDay.classList.add("winter")
    } else if (positionCycle >=36 && positionCycle <= 55) {
      divDay.classList.add("spring")
    }  else  {
      divDay.classList.add("summer")
    } 

    
  }
}

btnDay.addEventListener("click", setDay);
