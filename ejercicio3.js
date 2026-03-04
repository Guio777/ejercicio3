let counter = 0;
let option;

do {
  // Show current value and menu
    const input = prompt(
    "Counter value: " + counter +
    "\n\nMenu:" +
    "\n1. Increment counter" +
    "\n2. Decrement counter" +
    "\n4. Exit" +
    "\n\nEnter an option number:"
    );

  // If user pressed cancel, treat it as exit
    if (input === null) {
    option = 4;
    } else {
    option = parseInt(input);
    }

    switch (option) {
    case 1:
        counter++;
        alert("Counter incremented.\nNew value: " + counter);
        break;

    case 2:
        counter--;
        alert("Counter decremented.\nNew value: " + counter);
        break;

    case 4:
        alert("Exiting. Final counter value: " + counter);
        break;

    default:
        alert("Invalid option. Please enter 1, 2, or 4.");
        break;
    }

} while (option !== 4);