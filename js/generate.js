// Generating the table
function tableCreate() {
    const table = $('<table>');
    for (let i = 0; i < info.length; i++) {
        const tableRow = $('<tr>').addClass(`row ${i}`);
        for (let j = 0; j < info[i].length; j++) {
            tableRow.append($('<td>').addClass(`cell ${j}`));
        }
        table.append(tableRow);
    }
    $('body').prepend($('<div>').addClass('table-container').append(table));
}

// Creating selector buttons
function buttonsCreate() {
    const buttons = $('<div>').addClass(`button-container`);
    for (let i = 0; i < info[0].length; i++) {
        const button = $('<button>');
        button.attr('type', 'button');
        button.addClass(`${i}`);
        button.text('+')
        button.click(function () {
            addItem(i);
        })
        buttons.append(button);
    }
    $('.table-container').append(buttons);
}

function generateMap() {
    tableCreate();
    buttonsCreate();
}

generateMap();