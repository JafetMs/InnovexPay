// LocalStorage



// Vars
const welcome = document.querySelector('.innovex');
welcome.innerHTML = localStorage.getItem('userName').toString();
const amount = document.querySelector('.amount');
amount.innerHTML += localStorage.getItem('balance');

const img = document.querySelector('.cardUser');
const user = localStorage.getItem('userName');
console.log(user);
img.src = `/img/${user}.png`;

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
    if(input > 50000){
        console.log('El cliente no puede depositar mas de 50,000');
        return;
    }
    let balance = parseFloat(localStorage.getItem('balance')) + input;
    localStorage.setItem('balance',JSON.stringify(balance));
    amount.innerHTML = balance;
    inputBottom.value = '';
    actualizarLS(user,balance);
})

withdraw.addEventListener('click',(e) => {
    
    let input = parseFloat(document.querySelector('.number').value);
    let balance = parseFloat(localStorage.getItem('balance'));
    if(balance < input || inputBottom.value == ''){
        console.log('The input must be less than balance');
        return;
    }
    if(input > 30000){
        console.log('El cliente no puede retitar mas de 30,000');
        return;
    }
    balance-= input;
   
    localStorage.setItem('balance',JSON.stringify(balance));
    amount.innerHTML = balance;
    inputBottom.value = '';
    actualizarLS(user,balance);
})

function actualizarLS(user,balance) {
    let accountsUpdated = JSON.parse(localStorage.getItem('accounts'));
    console.log( accountsUpdated);

    const accountToUpdate = accounts.find(account => account.userName === user);
    console.log(accountToUpdate );

    if (accountToUpdate) {
        accountToUpdate.balance =  balance;
        
        // Guarda el array actualizado en el almacenamiento local
        localStorage.setItem('accounts', JSON.stringify(accounts));
      }
      
}

