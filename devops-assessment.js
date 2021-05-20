'use strict';

function addAssessmentTable() {
  document.getById('assessmentTable').appendChild(makeTable());
}

function makeTable() {
  const table = document.make('table');
  addChildren(table, makeRows());
  return table;
}

function addChildren(parent, children) {
  for (const child of children) {
    parent.appendChild(child);
  }
}

function makeRows() {
  const rows = [];
  for (let i = 1; i < 10; i++) {
    rows.push(makeRow('test' + i.toString()));
  }
  return rows;
}

function makeRow(s) {
  // const titles = ['', 'Onboarding', 'Code Modify', 'Commiting',
  // 'Merge Request',
  // 'Merge', 'Build', 'Test', 'Deploy', 'Monitor', 'Portfolio Modify'];
  const row = document.make('tr');
  row.innerHTML='<td>'+s+'</td>';
  return row;
}

document.addEventListener('DOMContentLoaded', addAssessmentTable, false);
