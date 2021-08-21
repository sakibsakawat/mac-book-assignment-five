 //function to total price

 function getTotalPrice(){
    const bestPrice = document.getElementById('best-price').innerText;
    const bestPriceNumber = parseInt(bestPrice);

    const memoryPrice = document.getElementById('extra-memory').innerText;
    const memoryPriceNumber = parseInt(memoryPrice);

    const storagePrice = document.getElementById('extra-storage').innerText;
    const storagePriceNumber = parseInt(storagePrice);

    const deliveryPrice = document.getElementById('delivery-charge').innerText;
    const deliveryPriceNumber = parseInt(deliveryPrice);

    const total = bestPriceNumber + memoryPriceNumber + storagePriceNumber + deliveryPriceNumber;
    return total;

}
// function for total price and total

function setPrice(totalAmount) {
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalAmount;

    const total = document.getElementById('final-price');
    total.innerText = totalAmount;
}
//function for set product  extra cost 
function setProductCost(ProductId, price) {
    const productCost = document.getElementById(ProductId);
    productCost.innerText = price;
}

// 8GB button click handler 
document.getElementById('memory1').addEventListener('click', function () {

    setProductCost('extra-memory', 0);
    const total = getTotalPrice();
    setPrice(total);
});
// 16GB button click handler 
document.getElementById('memory2').addEventListener('click', function () {
    setProductCost('extra-memory', 180);
    const total = getTotalPrice();
    setPrice(total);
});
// 256GB storage button click handler 
document.getElementById('storage1').addEventListener('click', function () {
    setProductCost('extra-storage', 0);
    const total = getTotalPrice();
    setPrice(total);
});

// 512GB storage button click handler 
document.getElementById('storage2').addEventListener('click', function () {
    setProductCost('extra-storage', 100);
    const total = getTotalPrice();
    setPrice(total);
});
// 1TB storage button click handler 
document.getElementById('storage3').addEventListener('click', function () {
    setProductCost('extra-storage', 180);
    const total = getTotalPrice();
    setPrice(total);
});
// Free delivery button click handler
document.getElementById('delivery1').addEventListener('click', function () {
    setProductCost('delivery-charge', 0);
    const total = getTotalPrice();
    setPrice(total);
});
//  20$ delivery charge button click handler
document.getElementById('delivery2').addEventListener('click', function () {
    setProductCost('delivery-charge', 20);
    const total = getTotalPrice();
    setPrice(total);
});

// apply button click handler for promo code
document.getElementById('coupon').addEventListener('click', function () {
    const promoCode = document.getElementById('coupon-input').value;
    const totalAmount = document.getElementById('final-price');
    if (promoCode == 'stevekaku') {
        const total = getTotalPrice() * 0.8;
        totalAmount.innerText = total;
    }
    document.getElementById('coupon-input').value = '';
});