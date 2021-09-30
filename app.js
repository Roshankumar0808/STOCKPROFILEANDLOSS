const purchasePrice = document.querySelector("#purchase-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#message");


function calculateProftAndLoss(purchase, quantity, current) {
    
    if(current > purchase) {
        let profit = (current - purchase) * quantity;
        let profitPercentage = ((current - purchase) / purchase) * 100;
        message.style.color = "#111827";
        message.innerText = `Your gain percentage is ${profitPercentage.toFixed(2)}%. Your total profit is Rs ${profit.toFixed(2)}`;
    } else if(purchase > current) {
        let loss = (purchase - current) * quantity;
        let lossPercentage = ((purchase - current) / purchase) * 100;
        showMessage(`Your loss percentage is ${lossPercentage.toFixed(2)}%. Your total loss is Rs ${loss.toFixed(2)}`)
    } else {
        showMessage("Neither profit nor loss!");
    }
    errorHandler();
    
}

function showMessage(msg) {
    message.innerText = msg;
    message.style.color = "#111827";
}

function errorHandler() {
    let p = purchasePrice.value;
    let q = stockQuantity.value;
    let c = currentPrice.value; 
    let msg = "Please fill out all Fields!!"
    if(p === ''){
        showMessage(msg);
    }
    if(q === '') {
        showMessage(msg);
    }
    if(c === '') {
        showMessage(msg);
    }
    if(p < 0 || q < 0 || c < 0) {
        showMessage("Please enter a valid number!!");
    }
}

function clickHandler() {
    pp = Number(purchasePrice.value);
    quant = Number(stockQuantity.value);
    curr = Number(currentPrice.value);
    calculateProftAndLoss(pp, quant, curr);
}

checkButton.addEventListener("click", clickHandler);