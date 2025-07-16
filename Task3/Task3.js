let button=document.querySelector('.Numbers');
// let display=document.querySelector('.display');

button.addEventListener('click',(event)=>{
    if(event.target.innerText=="="){
        let calc=document.querySelector('.display').innerText;
        let result=eval(calc);
        document.querySelector('.display').innerText=result;
    }
    else if(event.target.innerText=="clear"){
        document.querySelector('.display').innerText="";
    }
    else{
        document.querySelector('.display').innerText+=event.target.innerText;
    }
})