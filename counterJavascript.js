const countValue=document.querySelector("#counter");

const decrement=()=>{
    //get the value from UI
    let value=parseInt(countValue.innerText);
    //Update the value
    value=value-1;
    countValue.innerText=value;
}

const increment=()=>{
    //get the value from UI
    let value=parseInt(countValue.innerText);
    //Update the value
    value=value+1;
    countValue.innerText=value;
}