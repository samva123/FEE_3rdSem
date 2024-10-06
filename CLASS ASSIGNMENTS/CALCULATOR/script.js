document.addEventListener("DOMContentLoaded", function() {
    // Create container
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    // Create calculator
    const calculator = document.createElement('div');
    calculator.className = 'calculator dark'; // Start with dark theme
    container.appendChild(calculator);

    // Create theme toggler
    const themeToggler = document.createElement('div');
    themeToggler.className = 'theme-toggler active';
    const togglerIcon = document.createElement('i');
    togglerIcon.className = 'toggler-icon';
    themeToggler.appendChild(togglerIcon);
    calculator.appendChild(themeToggler);

    // Create display screen
    const displayScreen = document.createElement('div');
    displayScreen.className = 'display-screen';
    const display = document.createElement('div');
    display.id = 'display';
    displayScreen.appendChild(display);
    calculator.appendChild(displayScreen);

    // Create buttons
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons';
    const table = document.createElement('table');
    
    const buttonConfig = [
        ['C', '/', '*', '<'],
        ['7', '8', '9', '-'],
        ['4', '5', '6', '+'],
        ['1', '2', '3', '='],
        ['(', '0', ')']
    ];

    buttonConfig.forEach((row, rowIndex) => {
        const tr = document.createElement('tr');
        row.forEach((buttonLabel, index) => {
            const td = document.createElement('td');
            const button = document.createElement('button');
            button.className = buttonLabel === '=' ? 'btn-equal' : buttonLabel.match(/[0-9]/) ? 'btn-number' : 'btn-operator';
            button.id = buttonLabel;
            button.textContent = buttonLabel;
            td.appendChild(button);
            tr.appendChild(td);
            // Add rowspan for the equal button
            if (buttonLabel === '=') {
                button.style.height = '130px';
                td.rowSpan = '2'; // Make equal button span two rows
            }
        });
        table.appendChild(tr);
    });

    buttonsContainer.appendChild(table);
    calculator.appendChild(buttonsContainer);

    // Append everything to the container
    document.body.appendChild(container);

    // Styling
    const style = document.createElement('style');
    style.textContent = `
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            outline: 0;
            transition: all 0.5s ease;
        }
        body {
            font-family: sans-serif;
            background-image: linear-gradient(to bottom right, rgba(79,51,176,1.0), rgba(210,53,165));
        }
        .container {
            height: 100vh;
            width: 100vw;
            display: grid;
            place-items: center;
        }
        .calculator {
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 30px #000;
            background-color: #071115; /* Dark theme */
        }
        .calculator #display {
            margin: 0 10px;
            height: 150px;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            font-size: 30px;
            margin-bottom: 20px;
            overflow-x: scroll;
            color: #f8fafb; /* Text color in dark mode */
        }
        button {
            height: 60px;
            width: 60px;
            border: 0;
            border-radius: 30px;
            margin: 5px;
            font-size: 20px;
            cursor: pointer;
            transition: all 200ms ease;
        }
        button:hover {
            transform: scale(1.1);
        }
        button#equal {
            height: 130px;
        }
        .theme-toggler {
            position: absolute;
            top: 30px;
            right: 30px;
            color: #fff;
            cursor: pointer;
            z-index: 1;
        }
    `;
    document.head.appendChild(style);

    // JavaScript functionality
    const buttons = document.querySelectorAll("button");

    buttons.forEach((item) => {
        item.onclick = () => {
            if (item.id === "clear") {
                display.innerText = "";
            } else if (item.id === "backspace") {
                display.innerText = display.innerText.slice(0, -1);
            } else if (display.innerText !== "" && item.id === "=") {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error!";
                }
            } else if (display.innerText === "" && item.id === "=") {
                display.innerText = "Empty!";
                setTimeout(() => (display.innerText = ""), 2000);
            } else {
                display.innerText += item.id;
            }
        };
    });

    const themeToggleBtn = themeToggler;
    let isDark = true;
    themeToggleBtn.onclick = () => {
        calculator.classList.toggle("dark");
        themeToggleBtn.classList.toggle("active");
        isDark = !isDark;
    };
});
