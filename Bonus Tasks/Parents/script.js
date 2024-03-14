document.addEventListener('DOMContentLoaded', function() {
    const parentComponent = document.getElementById('parent');
    const buyButton = document.getElementById('buy-button');
    const responseDiv = document.getElementById('response');

    let requestCounter = 0;

    buyButton.addEventListener('click', function() {
        requestCounter++;

        if (requestCounter < 7) {
            responseDiv.textContent = "Buy, dad!";
        } else {
            responseDiv.textContent = "Okay, son, I'll buy it.";
            buyButton.disabled = true;
            buyButton.style.backgroundColor = "#ccc";
            buyButton.style.cursor = "not-allowed";
        }
    });
});
