const data = [
    { "index": "A1", "value": 41 },
    { "index": "A2", "value": 18 },
    { "index": "A3", "value": 21 },
    { "index": "A4", "value": 63 },
    { "index": "A5", "value": 2 },
    { "index": "A6", "value": 53 },
    { "index": "A7", "value": 5 },
    { "index": "A8", "value": 57 },
    { "index": "A9", "value": 60 },
    { "index": "A10", "value": 93 },
    { "index": "A11", "value": 28 },
    { "index": "A12", "value": 3 },
    { "index": "A13", "value": 90 },
    { "index": "A14", "value": 39 },
    { "index": "A15", "value": 80 },
    { "index": "A16", "value": 88 },
    { "index": "A17", "value": 49 },
    { "index": "A18", "value": 60 },
    { "index": "A19", "value": 26 },
    { "index": "A20", "value": 28 }
];

const table1Body = document.querySelector('#table1 tbody');
const table2Body = document.querySelector('#table2 tbody');

const values = {};

// Display Table 1
data.forEach(item => {

    values[item.index] = item.value;

    const row = `
    <tr>
      <td>${item.index}</td>
      <td>${item.value}</td>
    </tr>
  `;

    table1Body.innerHTML += row;
});

// Calculations
const alpha = values["A5"] + values["A20"];
const beta = values["A15"] / values["A7"];
const charlie = values["A13"] * values["A12"];

// Table 2
const results = [
    { category: "Alpha", value: alpha },
    { category: "Beta", value: beta },
    { category: "Charlie", value: charlie }
];

results.forEach(item => {

    const row = `
    <tr>
    <td>${item.category}</td>
    <td>${item.value}</td>
    </tr>
    `;
    console.log(item);

    table2Body.innerHTML += row;
});