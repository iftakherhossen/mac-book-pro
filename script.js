function priceVariant(productSelector, priceSelector, price) {
    document.getElementById(productSelector).addEventListener('click', function () {
        document.getElementById(priceSelector).innerText = price;

        console.log(productSelector, priceSelector, price);
        totalPriceCalculate();
    });
}

function totalPriceCalculate() {
    let priceSelector = document.getElementsByClassName('price');
    let sum = 0;

    for (let elements of priceSelector) {
        let priceText = elements.innerText;
        let price = parseInt(priceText);

        sum = sum + price;
    }

    document.getElementById('total-price').innerText = sum;
    document.getElementById('final-price').innerText = sum;
}

function couponPriceTotal() {
    const couponCode = 'stevekaku';

    document.getElementById('apply-btn').addEventListener('click', function () {
        const promoCost = document.getElementById('promo-code-input').value;
        const totalPrice = document.getElementById('total-price').innerText;
        let finalPrice = 0;

        console.log(totalPrice)
        if (promoCost == couponCode) {
            finalPrice = totalPrice * 0.8;
        }
        else {
            window.alert('Invalid! Coupon Code, Try again!')
        }

        document.getElementById('final-price').innerText = finalPrice;
    })    
}



priceVariant('memory-one', 'memory-cost', 0);
priceVariant('memory-two', 'memory-cost', 180);
priceVariant('storage-one', 'storage-cost', 0);
priceVariant('storage-two', 'storage-cost', 100);
priceVariant('storage-three', 'storage-cost', 180);
priceVariant('free-delivery', 'delivery-cost', 0);
priceVariant('delivery-charge', 'delivery-cost', 20);

couponPriceTotal();