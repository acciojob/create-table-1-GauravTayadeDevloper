function insert_Row() {
  let table = document.getElementById("sampleTable");

  // Determine new row number based on current rows
  let newRowNumber = table.rows.length + 1;

  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");

  // Set text dynamically based on row number
  td1.textContent = "Row" + newRowNumber + " cell1";
  td2.textContent = "Row" + newRowNumber + " cell2";

  tr.appendChild(td1);
  tr.appendChild(td2);

  // Insert at the top
  table.insertBefore(tr, table.rows[0]);
}
