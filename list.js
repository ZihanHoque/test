function duplicateRow() {
  var oldRow = document.getElementById("row");
  var table = document.getElementById("table");
  var newRow = oldRow.cloneNode(true);
  newRow.style.display = "block";
  newRow.children[0].children[0].children[2].children[1].children[0].disabled = false;
  table.appendChild(newRow);
}

function deleteItem(rowIndex) {
  var table = document.getElementById("table");
  table.deleteRow(rowIndex);
}