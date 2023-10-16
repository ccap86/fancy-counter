const counterEl = document.querySelector('.counter');
const counterTitleEl = document.querySelector('.counter__title')
const btn = document.querySelector("button");
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');



const incrementCounter = () => {
     // get current value
     const currentValue = counterValueEl.textContent;
     // convert currentValue to number type
     const currentValueAsNumber = +currentValue;
     // increment currentValue by 1
     let newValue = currentValueAsNumber + 1;
     // check if newValue is greater than 5
     if (newValue > 5) {
        // set currentValue to 5
        newValue = 5;
     
     // give user visual indicator that limit has been reached
     counterEl.classList.add('counter--limit'); 
     // update counter title when limit is reached
     counterTitleEl.innerHTML = 'LIMIT! BUY <b>PRO</b> FOR >5';
     // disable increase and decrease buttons
     increaseButtonEl.disabled = true;
     decreaseButtonEl.disabled = true;
     
    }
    // set currentVal to currentVal
     counterValueEl.textContent = newValue;
    // unfocus decrease button
     decreaseButtonEl.blur();
}




decreaseButtonEl.addEventListener('click', () => { 
    // get current value
    const currentValue = counterValueEl.textContent;

    // convert currentValue to number type
    const currentValueAsNumber = +currentValue;

    // decrement currentValue by 1
    let newValue = currentValueAsNumber - 1;
    
    // check if newValue is less than 0
    if(newValue < 0) {
        // if less than 0 then force to 0
        newValue = 0;
    }
    
    // set currentVal to currentVal
    counterValueEl.textContent = newValue;
    // unfocus increase button
    decreaseButtonEl.blur();
} )

resetButtonEl.addEventListener('click', () => { 
    // set currentVal to zero
    counterValueEl.textContent = 0;
    // enable increase and decrease buttons
    increaseButtonEl.disabled = false;
     decreaseButtonEl.disabled = false;
    // change the counter title back to fancy counter
     counterTitleEl.innerHTML = 'Fancy Counter';
    // reset bg color to default
     counterEl.classList.remove('counter--limit'); 
    // unfocus reset button
    resetButtonEl.blur();
} )

increaseButtonEl.addEventListener('click', incrementCounter);
document.addEventListener('keydown', incrementCounter);