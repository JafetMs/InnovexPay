

document.addEventListener('DOMContentLoaded', function(){
    
    
    const inputUser = document.querySelector('#name');
    const inputPassword = document.querySelector('#password');
    const btnSubmit = document.querySelector('#signIn');

    let userName = '';
    let password = '';

    inputUser.addEventListener('input',validate);
    inputPassword.addEventListener('input',validate);

    btnSubmit.addEventListener('click', function(e) {
        e.preventDefault();
        ;
        authenticateUser(userName,password);
    });

    function validate(e){

        if(e.target.id === 'name'){
            localStorage.setItem('userName',e.target.value);
            userName = e.target.value;
            console.log(userName);
            
        }
        if(e.target.id === 'password'){
             password = e.target.value;
            console.log(password);
        }
       

    }   

    function authenticateUser(userName,password){
        // Buscar el usuario en la lista de cuentas
        const user = accounts.find(account => account.userName === userName && account.password === password);

        if (user) {
            // Usuario autenticado
            window.location.href = 'dashboard.html'; // Reemplaza 'dashboard.html' con la URL de tu página de dashboard
        } else {
            // Credenciales inválidas
            console.log('Credenciales inválidas');
        }
    }
    
})

