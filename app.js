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
