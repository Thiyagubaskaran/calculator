// Function to show the calculation history
function showHistory() {
    // Retrieve the calculation history from local storage or initialize as an empty array if null
    let calcHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];
    let len = calcHistory.length;

    // Clear the history element and set the display style to block
    history.innerHTML = '';
    bar1.style.display = 'block';
    bar2.style.display = 'block';

    // If there is no history, display a message
    if (len === 0) {
        let historyItem = document.createElement('div');
        historyItem.innerHTML = "There's no history yet.";
        historyItem.className = 'historyelement his';
        historyItem.style.fontSize = '30px';
        history.appendChild(historyItem);
    } else {
        // Loop through the history array in reverse order and append each history item to the history element
        for (let index = len-1; index >=0; index--) {
            const element = calcHistory[index];
            let historyItem = document.createElement('div');
            historyItem.className = 'historyelement';
            historyItem.innerHTML = `${element.screenValue} =  ${element.result}`;
            history.appendChild(historyItem);

            // Add a horizontal rule after each history item, except for the last one
            if (index > 0) history.appendChild(document.createElement('hr'));
        }
    }

    // Set the display style of the history element to block
    history.style.display = 'block';
}

// Add an event listener to the history button to call the showHistory function when clicked
historybutton.addEventListener('click', showHistory);

// Function to hide the history element and the bars
function hide(){
    history.style.display = 'none';
    bar1.style.display = 'none';
    bar2.style.display = 'none';
}

// Add event listeners to the bars to call the hide function when clicked
bar1.addEventListener('click', hide);
bar2.addEventListener('click', hide);
