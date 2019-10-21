const info = []; // Array to store table info 
let isPlayer = true; // Bool to store whose turn it is;

// Generating table data
const dimensions = [7, 6];
for (let i = 0; i < dimensions[1]; i++) {
    let row = []
    for (let j = 0; j < dimensions[0]; j++) {
        row.push('-');
    }
    info.push(row)
}

// Adding a move to the playerboard
function addItem(col) {
    if (isPlayer) {

    }
    else {

    }
}

// Checking for the lowest available row 
function lowestRow(col) {
    let i = 0;
    while (info[col][i] === '-') {
        i++;
    }
    return (i > info.length) ? -1 : i;
}