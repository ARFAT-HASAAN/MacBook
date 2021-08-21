// memoryCost event handler
document.getElementById('memory-extra-cost').addEventListener('click', function() {
    extraMemoryCost(true);
    totalCalculate();
})

document.getElementById('Memory-defult-cost').addEventListener('click', function() {
    extraMemoryCost(false)
    totalCalculate()
})

// deliveryCost  event hendler 

document.getElementById('prime-delivery').addEventListener('click', function() {
    extraDeliveryCost(true)
    totalCalculate()

})

document.getElementById('free-delivery').addEventListener('click', function() {
        extraDeliveryCost(false)
        totalCalculate()

    })
    // storage event hendler 

document.getElementById('double-extra-storage').addEventListener('click', function() {
    extraStorageCost(true);
    totalCalculate()

})
document.getElementById('extra-storage').addEventListener('click', function() {
    extraStorageCost(false);
    totalCalculate()

})

document.getElementById('defult-storage').addEventListener('click', function() {
    extraStorageCost()
    totalCalculate()

})

// extra memory cost function 
function extraMemoryCost(isincrease) {
    const memory = document.getElementById('memory-total');
    const memoryValue = parseInt(memory.innerText)
    if (isincrease == true) {
        memory.innerText = 180;
    } else {
        memory.innerText = 0;
    }
    return memoryValue;
}

// extra delivery cost fucntion 
function extraDeliveryCost(isincrease) {
    const delivery = document.getElementById('delivery-total');
    const deliveryValue = parseInt(delivery.innerText);

    if (isincrease == true) {
        delivery.innerText = 20;

    } else {
        delivery.innerText = 0
    }
    return deliveryValue;
}
// extra storage cost function 
function extraStorageCost(isIncrease) {
    const storage = document.getElementById('storage-cost-total');
    const storageValue = parseInt(storage.innerText)
    if (isIncrease == true) {
        storage.innerText = 180;
    } else if (isIncrease == false) {
        storage.innerText = 100;

    } else {
        storage.innerText = 0;
    }
    return storageValue;

}

// totalCalculate function 
function totalCalculate() {

    const BestPrice = 1299;
    const memory = document.getElementById('memory-total');
    const memoryValue = parseInt(memory.innerText)
    const delivery = document.getElementById('delivery-total');
    const deliveryValue = parseInt(delivery.innerText);
    const storage = document.getElementById('storage-cost-total');
    const storageValue = parseInt(storage.innerText)
    const Priceammount = BestPrice + memoryValue + deliveryValue + storageValue;
    document.getElementById('total-price').innerText = Priceammount;

}