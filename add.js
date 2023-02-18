const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
function onAddage(e) {
  e.preventDefault();
  const age = document.getElementById("age").value;
  const name = document.getElementById("name").value;
  const occupation = document.getElementById("occupation").value;
  tbodyEl.innerHTML += `
            <tr>
                <td>rank</td>
                <td>${name}</td>
                <td>${age}</td>
                <td>${occupation}</td>
                <td><button class="deleteBtn">Delete</button></td>
            </tr>
        `;
}

function onDeleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}

formEl.addEventListener("submit", onAddage);
tableEl.addEventListener("click", onDeleteRow);
