/* function calculate() {
    fetch('./items.json', {
        method: 'POST',
        header: {
            'Çontent-Type: application/json'
        }
    })
}
calculate(); */
/* function calculate() {
    fetch('items.json').then(res => res.json()).then(data => console.log(data));
}
calculate(); */
const currencyEL_one = document.getElementById('currency-one');
const currencyEL_two = document.getElementById('currency-two');
const amountEL_one = document.getElementById('amount-one');
const amountEL_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
    const currency_one = currencyEL_one.value;
    const currency_two = currencyEL_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`).then(res => res.json()).then(data => {
        // console.log(data)
        const rate = data.rates[currency_two];
        // console.log(rate);
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
        amountEL_two.value = (amountEL_one.value * rate).toFixed(2);
    });
}
// Event Listeners
currencyEL_one.addEventListener('change', calculate);
amountEL_one.addEventListener('input', calculate);
currencyEL_two.addEventListener('change', calculate);
amountEL_two.addEventListener('change', calculate);
swap.addEventListener('click', () => {
    const temp = currencyEL_one.value;
    currencyEL_one.value = currencyEL_two.value;
    currencyEL_two.value = temp;
    calculate();
})
calculate();