// for changing the price of memory cost
document.getElementById('memory-one').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = "0";
});
document.getElementById('memory-two').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = "180";
});

// for changing the price of storage cost
document.getElementById('storage-one').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = "0";
});
document.getElementById('storage-two').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = "100";
});
document.getElementById('storage-three').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = "180";
});

// for changing the price of delivery cost
document.getElementById('free-delivery').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = "0";
});
document.getElementById('delivery-charge').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = "20";
});

