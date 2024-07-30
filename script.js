document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('number');

    // Function to handle button press
    function handleButtonPress(event) {
        const value = event.target.getAttribute('data-value');
        inputField.value += value;
    }

    // Attach event listeners to all buttons
    const buttons = document.querySelectorAll('button[data-value]');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonPress);
    });
});


const btnEqual = document.getElementById("equal");
btnEqual.addEventListener("click", () => {
    const inputField = document.getElementById("number");
    const inputValue = inputField.value;
    let characters = inputValue.split('');

    let operator = '';
    let number1, number2;
    
    for(let i = 0; i < characters.length; ++i) {
        if (['*', '/', '+', '-'].includes(characters[i])) {
            operator = characters[i];

            let number1Array = characters.slice(0, i).join("");
            number1 = parseFloat(number1Array);

            let number2Array = characters.slice(i + 1).join("");
            number2 = parseFloat(number2Array);
            break; // Exit the loop after finding the operator
        }
    }

    let result;
    switch (operator) {
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        default:
            result = 'Invalid operator';
    }

    inputField.value = result;
});

const btnClear = document.getElementById("clear");
btnClear.addEventListener("click", () => {
    const inputField = document.getElementById("number");
    inputField.value = "";
})

