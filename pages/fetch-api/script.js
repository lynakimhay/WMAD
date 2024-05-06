
 async function getPen() {
  const response = await fetch(' https://pens-api.vercel.app/api/pens/2');
  const pens = await response.json();
  console.log(pens);
    // // == Using fetch api to get single pen and replace the below pen variable
    // let pen = { id: 2, name: "Pen 2", color: "green" };
    // ===
    const penListDiv = document.getElementById("single-pen");

    const penElement = createPenElement(pens);
    penListDiv.appendChild(penElement);

}

function createPenElement(pen) {
  const penDiv = document.createElement("div");
  penDiv.classList.add("col-3", "text-center");

  const penColorDiv = document.createElement("div");
  penColorDiv.classList.add("pen-color");
  penColorDiv.style.backgroundColor = pen.color;

  const penNameP = document.createElement("p");
  penNameP.textContent = pen.name;

  penDiv.appendChild(penColorDiv);
  penDiv.appendChild(penNameP);

  return penDiv;
}

// call function getPen
getPen();
