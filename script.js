const count = document.querySelector('.num');

function inc(){ //normal function
    let value = parseInt(count.innerText); // get the value from UI
    value = value + 1; //update the value
    count.innerText = value //set the value on the UI
};

const dec = () =>{ //using arrow
    let value = parseInt(count.innerText);
    value = value - 1;
    count.innerText = value;
};