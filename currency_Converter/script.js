const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
let flag1 = document.querySelector(".flag1");
let flag2 = document.querySelector(".flag2");

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  // fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
  fetch(`https://v6.exchangerate-api.com/v6/990c1f661ff965d28a56785c/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.time_last_update_utc);
      const rate = data.conversion_rates[currency_two];
      let conversionDate = (JSON.stringify(data.time_last_update_utc)).slice(1,26);
      
      
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two} as of
                          ${conversionDate} UTC`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
      

    });
    // let conversionDate = data.time_last_update_utc;
    // let currency_one_lower = currency_one.toLowerCase();
    // let img = document.createElement('img');
    //  img.src = `"https://flagcdn.com/32x24/${currency_one_lower}.png"`;   
    //   flag1.appendChild(img); 
      // flag1.innerHTML = `<img src="https://flagcdn.com/32x24/${currency_one_lower}.png">`
      // flag1.innerHTML = conversionDate;
}

// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();
