function insert_Row() {
  let table = document.getElementById("sampleTable");

  // Ensure there's a tbody
  let tbody = table.querySelector("tbody");
  if (!tbody) {
    tbody = document.createElement("tbody");

    // Move existing rows into tbody
    while (table.rows.length > 0) {
      tbody.appendChild(table.rows[0]);
    }
    table.appendChild(tbody);
  }

  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");

  td1.textContent = "New Cell1";
  td2.textContent = "New Cell2";

  tr.appendChild(td1);
  tr.appendChild(td2);

  // Insert at the top of tbody
  tbody.insertBefore(tr, tbody.rows[0]);
}
