'use strict';

function addMatrix() {
  document.getElementById('matrix').appendChild(createTableElement());
}

function createTableElement() {
  const tableElement = document.createElement('table');
  appendChildElements(tableElement, createRowElements());
  return tableElement;
}

function appendChildElements(parentElement, childElements) {
  for (const childElement of childElements) {
    parentElement.appendChild(childElement);
  }
}

function createRowElements() {
  const rowElements = [];
  for (let i = 1; i < 10; i++) {
    rowElements.push(createRowElement('test' + i.toString()));
  }
  return rowElements;
}

function createRowElement(s) {
  // const titles = ['', 'Onboarding', 'Code Modify', 'Commiting',
  // 'Merge Request',
  // 'Merge', 'Build', 'Test', 'Deploy', 'Monitor', 'Portfolio Modify'];
  const rowElement = document.createElement('tr');
  rowElement.innerHTML='<td>'+s+'</td>';
  return rowElement;
}

document.addEventListener('DOMContentLoaded', addMatrix, false);
