const gridCalendar = document.getElementById("gridCalendar");
const btnDay = document.getElementById("btnDay");
const day = document.getElementById("dayInput");
const btnReset = document.getElementById("reset");
const seasonColor = document.getElementById("seasonColor");
//const position tooltip
const tooltip = document.getElementById("tooltip");
const offsetX = 15;
const offsetY = 10;
//TOUTES les elements du tooltip
const autumnTooltip = document.getElementById("autumnTooltip");
const WinterTooltip = document.getElementById("WinterTooltip");
const SpringTooltip = document.getElementById("SpringTooltip");
const SummerTooltip = document.getElementById("SummerTooltip");
const fullmoonTooltip = document.getElementById("fullmoonTooltip");
const newmoonTooltip = document.getElementById("newmoonTooltip");
const DCspawn = document.getElementById("DCspawn");
const MGspawn = document.getElementById("MGspawn");
const Aspawn = document.getElementById("Aspawn");
const Bspawn = document.getElementById("Bspawn");
// elements guide
const allGuide = document.getElementById("allGuide");
const autumnGuide = document.getElementById("autumnGuide");
const winterGuide = document.getElementById("winterGuide");
const springGuide = document.getElementById("springGuide");
const summerGuide = document.getElementById("summerGuide");
const fullmoonGuide = document.getElementById("fullmoonGuide");
const newmoonGuide = document.getElementById("newmoonGuide");

// const calendarSize = document.getElementById("calendarSize");
let currentSize = 0;
function setDay() {
  //affichage du fond du calendrier + legende
  gridCalendar.style.display = "flex";
  seasonColor.style.display = "flex";
  //const position tooltip
  const tooltip = document.getElementById("tooltip");
  const offsetX = 15;
  const offsetY = 10;

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

    //Envent listener tooltip
    divDay.addEventListener("mouseenter", () => {
      tooltip.style.display = "block";
      //saison
      if (positionCycle >= 1 && positionCycle <= 20) {
        autumnTooltip.style.display = "flex";
      } else if (positionCycle >= 21 && positionCycle <= 35) {
        WinterTooltip.style.display = "flex";
      } else if (positionCycle >= 36 && positionCycle <= 55) {
        SpringTooltip.style.display = "flex";
      } else {
        SummerTooltip.style.display = "flex";
      }
      //cycle lune
      if (currentDay >= 11 && (currentDay - 11) % 20 === 0) {
        fullmoonTooltip.style.display = "flex";
      }
      if (currentDay >= 1 && (currentDay - 1) % 20 === 0) {
        newmoonTooltip.style.display = "flex";
      }

      //spawn bosses

      //spawn DC
      if (positionCycle === 30) {
        DCspawn.style.display = "flex";
      }
      //spawn bearger
      if (currentDay > 70 && positionCycle === 6) {
        Bspawn.style.display = "flex";
      }
      //spawn AL
      if (positionCycle === 56) {
        Aspawn.style.display = "flex";
      }
      //spawn mooseGoose
      if (positionCycle === 37) {
        MGspawn.style.display = "flex";
      }
    });

    divDay.addEventListener("mousemove", (e) => {
      tooltip.style.left = e.clientX + offsetX + "px";
      tooltip.style.top = e.clientY + offsetY + "px";
    });

    divDay.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
      for (const items of tooltip.children) {
        items.style.display = "none";
      }
    });

    //scroll vers guide
    divDay.addEventListener("click", () => {
      for (const guides of allGuide.children) {
        guides.style.display = "none";
      }
      
      //spawn bosses

      //spawn DC
      if (positionCycle === 30) {
      }
      //spawn bearger
      if (currentDay > 70 && positionCycle === 6) {
      }
      //spawn AL
      if (positionCycle === 56) {
      }
      //spawn mooseGoose
      if (positionCycle === 37) {
      }
      //saison
      if (positionCycle >= 1 && positionCycle <= 20) {
        autumnGuide.style.display = "block";
        autumnGuide.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else if (positionCycle >= 21 && positionCycle <= 35) {
        winterGuide.style.display = "block";
        winterGuide.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else if (positionCycle >= 36 && positionCycle <= 55) {
        springGuide.style.display = "block";
        springGuide.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        summerGuide.style.display = "block";
        summerGuide.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      //cycle lune
      if (currentDay >= 11 && (currentDay - 11) % 20 === 0) {
        fullmoonGuide.style.display = "block";
        fullmoonGuide.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      if (currentDay >= 1 && (currentDay - 1) % 20 === 0) {
        newmoonGuide.style.display = "block";
        newmoonGuide.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }
}
//function qui reset le calendrier
function reset() {
  btnDay.innerHTML = "GO";
  currentSize = 0;
  gridCalendar.innerHTML = "";
  gridCalendar.style.display = "none";
  seasonColor.style.display = "none";
  day.value = 1;
  for (const guides of allGuide.children) {
        guides.style.display = "none";
      }
}

btnDay.addEventListener("click", setDay);
btnReset.addEventListener("click", reset);

//action de la touche entrée sur dayInput, trouvée avec IA
day.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    setDay();
  }
});

const up = document.getElementById("up");
const nav = document.getElementById("nav");
up.addEventListener("click", () => {
  nav.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
