const currentArea = document.getElementById("currentArea");
const previousArea = document.getElementById("previousArea");

document.getElementById("table").onclick = (e) => {
  if (e.target.className === "number") {
    writingCurrentArea(e.target.innerText);
  } else if (e.target.className === "operationButtons") {
    selectOperation(e.target.innerText);
  } else if (e.target.className === "selector") {
    deleteCurrentArea(e.target.innerText);
  } else if (e.target.id === "result") {
    result();
  }
};
const writingCurrentArea = (e) => {
  if (e === "." && currentArea.innerText.includes(".")) return;
  if (e === "-" && currentArea.innerText.includes("-")) return;
  currentArea.innerText += e;
};

const deleteCurrentArea = (e) => {
  if (e === "AC") {
    currentArea.innerText = "";
    previousArea.innerText = "";
  } else if (e === "DEL") {
    currentArea.innerText = currentArea.innerText.slice(0, -1);
  }
};
const selectOperation = (e) => {
  if (currentArea.innerText === "") return;
  if (previousArea.innerText !== "") {
    calculate();
  }
  previousArea.innerText = currentArea.innerText + e;
  currentArea.innerText = "";
};
