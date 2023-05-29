// LocalStorage
const userName = localStorage.getItem('userName');


// Vars
const welcome = document.querySelector('.innovex');
welcome.innerHTML = userName;


// console.log(accounts);

const input = document.querySelector('.number');

input.addEventListener('input', (e) =>{
    console.log(e.target.value);
});


const deposit = document.querySelector('#deposit');
const withdraw = document.querySelector('#withdraw');


deposit.addEventListener('click',(e) => {
    console.log('Clickeas en deposit')
})

withdraw.addEventListener('click',(e) => {
    console.log('Clickeas en withdraw')
})


document.addEventListener('DOMContentLoaded', ()=> {
    let accountsLS = JSON.parse(localStorage.getItem('accountsLS')) || [];
    console.log(accountsLS);
    user = accountsLS.forEach( (account,imdex)=> {

        if( userName === account.userName){
            console.log(account.userName);
            let balance = JSON.parse(account.balance);
            console.log(balance);
        }
    });
    
    

    
})