const number = Math.floor(Math.random() * 7 + 1);

// if (number === 1) return ('Red');
// if (number === 2) return ('Orange');
// if (number === 3) return ('Yellow');
// if (number === 4) return ('Green');
// if (number === 5) return ('Blue');
// if (number === 6) return ('Indigo');
// if (number === 7) return ('Violet');

function getColor(colorN){
    if (colorN === 1) return 'Red';
    if (colorN === 2) return 'Orange';
    if (colorN === 3) return 'Yellow';
    if (colorN === 4) return 'Green';
    if (colorN === 5) return 'Blue';
    if (colorN === 6) return 'Indigo';
    if (colorN === 7) return 'Violet';
    return 'Black';
}

console.log(getColor(16));