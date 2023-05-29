let accounts = localStorage.getItem('accounts');
if(accounts){
    accounts = JSON.parse(accounts)
}else{
    accounts = [
        { userName: 'Jafet', password:'123', balance: 1000},
        { userName: 'Julia', password:'321', balance: 2000},
        { userName: 'Charlotte', password:'devF', balance: 0},
    ]
    localStorage.setItem('accounts', JSON.stringify(accounts));

}

 




