// LocalStorage



// Vars
const welcome = document.querySelector('.innovex');
welcome.innerHTML = localStorage.getItem('userName').toString();
const amount = document.querySelector('.amount');
amount.innerHTML += localStorage.getItem('balance');




const deposit = document.querySelector('#deposit');
const withdraw = document.querySelector('#withdraw');

const inputBottom = document.querySelector('.number');


deposit.addEventListener('click',(e) => {
    console.log('Clickeas en deposit')
    let input = parseFloat(document.querySelector('.number').value);
    if(input <=0 || inputBottom.value == ''){
        console.log('The balance must be greather than $0');
        return;
    }
    console.log('Si se imprime esto debe cambiar todo');
    let balance = parseFloat(localStorage.getItem('balance')) + input;
    localStorage.setItem('balance',JSON.stringify(balance));
    amount.innerHTML = balance;
    inputBottom.value = '';
    
})

withdraw.addEventListener('click',(e) => {
    console.log('Clickeas withdrwa')
    let input = parseFloat(document.querySelector('.number').value);
    let balance = parseFloat(localStorage.getItem('balance'));
    if(balance < input || inputBottom.value == ''){
        console.log('The input must be less than balance');
        return;
    }
    balance-= input;
   
    localStorage.setItem('balance',JSON.stringify(balance));
    amount.innerHTML = balance;
    inputBottom.value = '';
    
})


// document.addEventListener('DOMContentLoaded', ()=> {
//     let accountsLS = JSON.parse(localStorage.getItem('accountsLS')) || [];
//     console.log(accountsLS);
//     user = accountsLS.forEach( (account,imdex)=> {

//         if( userName === account.userName){
//             console.log(account.userName);
//             let balance = JSON.parse(account.balance);
//             console.log(balance);
//         }
//     });
    
    

    
// })