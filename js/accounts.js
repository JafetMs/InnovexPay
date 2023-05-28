const accounts = [
    { userName: 'Jafet', password:'123', balance: 1000},
    { userName: 'Julia', password:'321', balance: 2000},
    { userName: 'Charlotte', password:'devF', balance: 0},
]

const Jafet = JSON.stringify(accounts[0]);
localStorage.setItem('user1',Jafet);    

const Julia = JSON.stringify(accounts[1]);
localStorage.setItem('user2',Julia); 

const Charlotte = JSON.stringify(accounts[2]);
localStorage.setItem('user3',Charlotte); 

