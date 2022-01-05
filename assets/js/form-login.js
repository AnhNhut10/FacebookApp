function toggleForm() {
    section = document.querySelector('.login-section');
    container = document.querySelector('.login__container');
    
    section.classList.toggle('active');
    container.classList.toggle('active');
}

const userPage = $('.user-page');
const loginContainer = $('.login-section');
const loginForm = $('#login-form');
const loginBtn = $('.sign-in-btn');
const inputName = loginForm.querySelector('.input__user-name');
const inputPassword = loginForm.querySelector('.input__user-password');
const formMessage = loginForm.querySelector('.form-message');

function checkId () {
    if (inputName.value == 'anhnhut' && inputPassword.value == '100100') {
        formMessage.innerText = "";
        loginContainer.classList.add('login');
        userPage.classList.add('login');
    } else {
        formMessage.innerText = "Account or password is incorrect";
    }
}

loginBtn.onclick = (event) => {
    event.preventDefault();
    checkId();
}

// logoutBtn.onclick = () => {
//     loginContainer.classList.remove('login');
//     userPage.classList.remove('login');
// }
