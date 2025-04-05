'use strict';

const table = document.querySelector('table');
const tableHead = table.tHead;
const tableBody = table.tBodies[0];
const tableFoot = table.tFoot;

[...tableHead.rows, ...tableBody.rows, ...tableFoot.rows].forEach((row) => {
  const rowCopy = row.children[1];

  row.children[row.children.length - 1].insertAdjacentHTML(
    'beforebegin',
    rowCopy.outerHTML,
  );
});
