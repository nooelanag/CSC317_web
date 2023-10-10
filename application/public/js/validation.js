const form = document.getElementById('reg-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
let checked = [0,1,2,3];
let numhcecked = 0;


form.addEventListener('submit',function (ev){
    if(checked[0] == 7 && checked[1] == 7 && checked[2] == 7 && checked[3] == 7){
        numhcecked = 4;
    }
    if(numhcecked == 4){
        alert("User, you have registered successfully !");
    }else{
        ev.preventDefault();
    }
})






//Event listeners
username.addEventListener("input",function (ev) {
    let userInput = ev.currentTarget;
    let regform = ev.currentTarget.parentElement;
    let small = regform.querySelector('small');
    let small1 = regform.querySelectorAll('small')[1];
    let submitter = document.getElementById('submitter');
    let username = userInput.value;
    let conditions = /^[A-Za-z]/;
    let check_start_letter = username.match(conditions);



    if(check_start_letter == null && username.length >= 3){
        userInput.classList.add('invalid-text');
        small1.classList.add('showerrorbegin');
        small1.classList.remove('notshowerrorbegin');
        small.classList.remove('showerrorsize');
        small.classList.add('notshowerrorsize');
        submitter.classList.add('invalid-form');
        submitter.classList.remove('valid-form');
    }
    if(check_start_letter == null && username.length < 3){
        userInput.classList.add('invalid-text');
        small1.classList.add('showerrorbegin');
        small1.classList.remove('notshowerrorbegin');
        small.classList.remove('notshowerrorsize');
        small.classList.add('showerrorsize');

    }
    if (check_start_letter != null && username.length >= 3){
        userInput.classList.remove('invalid-text');
        userInput.classList.add('valid-text');
        small1.classList.remove('showerrorbegin');
        small1.classList.add('notshowerrorbegin');
        small.classList.remove('showerrorsize');
        small.classList.add('notshowerrorsize');
        checked[0] = 7;

        if(checked[0] == 7 && checked[1] == 7 && checked[2] == 7 && checked[3] == 7){
            numhcecked = 4;
        }
        if(numhcecked == 4){
            submitter.classList.remove('invalid-form');
            submitter.classList.add('valid-form');
        }else{
            ev.preventDefault();
            submitter.classList.add('invalid-form');
            submitter.classList.remove('valid-form');
        }

    }
    if(check_start_letter != null&& username.length < 3){
        userInput.classList.remove('valid-text');
        userInput.classList.add('invalid-text');
        small1.classList.remove('showerrorbegin');
        small1.classList.add('notshowerrorbegin');
        small.classList.remove('notshowerrorsize');
        small.classList.add('showerrorsize');
    }

});

password.addEventListener("input",function (ev) {
    let userInput = ev.currentTarget;
    let regform = ev.currentTarget.parentElement;
    let small = regform.querySelector('small');
    let small1 = regform.querySelectorAll('small')[1];
    let small2 = regform.querySelectorAll('small')[2];
    let small3 = regform.querySelectorAll('small')[3];
    let password = userInput.value;
    let conditionuppercase= /(?=.*[A-Z])/;
    var hasNumber = /\d/;
    let conditionsymbol= /(?=.*[/\*\-+!@#$^&~\[\]])/;
    let check_contain_uppercase = password.match(conditionuppercase);
    let check_contain_number = password.match(hasNumber);
    let check_contain_symbol = password.match(conditionsymbol);
    var hasNumber = /\d/;
    hasNumber.test(password);
    let submitter = document.getElementById('submitter');


    //Size >8; contains NUMBER; contains UPPERCASE; contains SYMBOL
    if(password.length >= 8 && check_contain_number != null && check_contain_uppercase != null && check_contain_symbol != null ){
        userInput.classList.remove('invalid-text');
        userInput.classList.add('valid-text');
        small.classList.remove('showerrorsize');
        small.classList.add('notshowerrorsize');
        small1.classList.remove('showerrorcontainnumber');
        small1.classList.add('notshowerrorcontainnumber');
        small2.classList.remove('showerrorcontainuppercase');
        small2.classList.add('notshowerrorcontainuppercase');
        small3.classList.remove('showerrorcontainsymbol');
        small3.classList.add('notshowerrorcontainsymbol');
        checked[1] = 7;
        if(checked[0] == 7 && checked[1] == 7 && checked[2] == 7 && checked[3] == 7){
            numhcecked = 4;
        }
        if(numhcecked == 4){
            submitter.classList.remove('invalid-form');
            submitter.classList.add('valid-form');
        }else{
            ev.preventDefault();
            submitter.classList.add('invalid-form');
            submitter.classList.remove('valid-form');
        }

    }
    //Size >8; contains NUMBER; contains UPPERCASE; NO contains SYMBOL
    if(password.length >= 8 && check_contain_number != null && check_contain_uppercase != null && check_contain_symbol == null ){
        userInput.classList.add('invalid-text');
        userInput.classList.remove('valid-text');
        small.classList.remove('showerrorsize');
        small.classList.add('notshowerrorsize');
        small1.classList.remove('showerrorcontainnumber');
        small1.classList.add('notshowerrorcontainnumber');
        small2.classList.remove('showerrorcontainuppercase');
        small2.classList.add('notshowerrorcontainuppercase');
        small3.classList.add('showerrorcontainsymbol');
        small3.classList.remove('notshowerrorcontainsymbol');
    }
    //Size >8; contains NUMBER; NO contains UPPERCASE; NO contains SYMBOL
    if(password.length >= 8 && check_contain_number != null && check_contain_uppercase == null && check_contain_symbol == null ){
        userInput.classList.add('invalid-text');
        userInput.classList.remove('valid-text');
        small.classList.remove('showerrorsize');
        small.classList.add('notshowerrorsize');
        small1.classList.remove('showerrorcontainnumber');
        small1.classList.add('notshowerrorcontainnumber');
        small2.classList.add('showerrorcontainuppercase');
        small2.classList.remove('notshowerrorcontainuppercase');
        small3.classList.add('showerrorcontainsymbol');
        small3.classList.remove('notshowerrorcontainsymbol');
    }
    //Size >8; contains NUMBER; NO contains UPPERCASE; contains SYMBOL
    if(password.length >= 8 && check_contain_number != null && check_contain_uppercase == null && check_contain_symbol != null ){
        userInput.classList.add('invalid-text');
        userInput.classList.remove('valid-text');
        small.classList.remove('showerrorsize');
        small.classList.add('notshowerrorsize');
        small1.classList.remove('showerrorcontainnumber');
        small1.classList.add('notshowerrorcontainnumber');
        small2.classList.add('showerrorcontainuppercase');
        small2.classList.remove('notshowerrorcontainuppercase');
        small3.classList.remove('showerrorcontainsymbol');
        small3.classList.add('notshowerrorcontainsymbol');

    }
    //Size >8;  NO contains NUMBER; NO contains UPPERCASE; contains SYMBOL
    if(password.length >= 8 && check_contain_number == null && check_contain_uppercase == null && check_contain_symbol != null ){
        userInput.classList.add('invalid-text');
        userInput.classList.remove('valid-text');
        small.classList.remove('showerrorsize');
        small.classList.add('notshowerrorsize');
        small1.classList.add('showerrorcontainnumber');
        small1.classList.remove('notshowerrorcontainnumber');
        small2.classList.add('showerrorcontainuppercase');
        small2.classList.remove('notshowerrorcontainuppercase');
        small3.classList.remove('showerrorcontainsymbol');
        small3.classList.add('notshowerrorcontainsymbol');

    }
    //Size >8;  NO contains NUMBER; NO contains UPPERCASE; NO contains SYMBOL
    if(password.length >= 8 && check_contain_number == null && check_contain_uppercase == null && check_contain_symbol == null ){
        userInput.classList.add('invalid-text');
        userInput.classList.remove('valid-text');
        small.classList.remove('showerrorsize');
        small.classList.add('notshowerrorsize');
        small1.classList.add('showerrorcontainnumber');
        small1.classList.remove('notshowerrorcontainnumber');
        small2.classList.add('showerrorcontainuppercase');
        small2.classList.remove('notshowerrorcontainuppercase');
        small3.classList.add('showerrorcontainsymbol');
        small3.classList.remove('notshowerrorcontainsymbol');

    }
    //Size >8; NO contains NUMBER; contains UPPERCASE; NO contains SYMBOL
    if(password.length >= 8 && check_contain_number == null && check_contain_uppercase != null && check_contain_symbol == null ){
        userInput.classList.add('invalid-text');
        userInput.classList.remove('valid-text');
        small.classList.remove('showerrorsize');
        small.classList.add('notshowerrorsize');
        small1.classList.add('showerrorcontainnumber');
        small1.classList.remove('notshowerrorcontainnumber');
        small2.classList.remove('showerrorcontainuppercase');
        small2.classList.add('notshowerrorcontainuppercase');
        small3.classList.add('showerrorcontainsymbol');
        small3.classList.remove('notshowerrorcontainsymbol');

    }
    //Size >8; NO contains NUMBER; contains UPPERCASE; contains SYMBOL
    if(password.length >= 8 && check_contain_number == null && check_contain_uppercase != null && check_contain_symbol != null ){
        userInput.classList.add('invalid-text');
        userInput.classList.remove('valid-text');
        small.classList.remove('showerrorsize');
        small.classList.add('notshowerrorsize');
        small1.classList.add('showerrorcontainnumber');
        small1.classList.remove('notshowerrorcontainnumber');
        small2.classList.remove('showerrorcontainuppercase');
        small2.classList.add('notshowerrorcontainuppercase');
        small3.classList.remove('showerrorcontainsymbol');
        small3.classList.add('notshowerrorcontainsymbol');

    }
    //Size >8; NO contains NUMBER; NO contains UPPERCASE; contains SYMBOL
    if(password.length < 8 && check_contain_number == null && check_contain_uppercase == null && check_contain_symbol != null ){
        userInput.classList.add('invalid-text');
        userInput.classList.remove('valid-text');
        small.classList.add('showerrorsize');
        small.classList.remove('notshowerrorsize');
        small1.classList.add('showerrorcontainnumber');
        small1.classList.remove('notshowerrorcontainnumber');
        small2.classList.add('showerrorcontainuppercase');
        small2.classList.remove('notshowerrorcontainuppercase');
        small3.classList.remove('showerrorcontainsymbol');
        small3.classList.add('notshowerrorcontainsymbol');

    }
    //Size <8; NO contains NUMBER; NO contains UPPERCASE; NO contains SYMBOL
    if(password.length < 8 && check_contain_number == null && check_contain_uppercase == null && check_contain_symbol == null ){
        userInput.classList.add('invalid-text');
        userInput.classList.remove('valid-text');
        small.classList.add('showerrorsize');
        small.classList.remove('notshowerrorsize');
        small1.classList.add('showerrorcontainnumber');
        small1.classList.remove('notshowerrorcontainnumber');
        small2.classList.add('showerrorcontainuppercase');
        small2.classList.remove('notshowerrorcontainuppercase');
        small3.classList.add('showerrorcontainsymbol');
        small3.classList.remove('notshowerrorcontainsymbol');

    }
    //Size <8; NO contains NUMBER; contains UPPERCASE; NO contains SYMBOL
    if(password.length < 8 && check_contain_number == null && check_contain_uppercase != null && check_contain_symbol == null ){
        userInput.classList.add('invalid-text');
        userInput.classList.remove('valid-text');
        small.classList.add('showerrorsize');
        small.classList.remove('notshowerrorsize');
        small1.classList.add('showerrorcontainnumber');
        small1.classList.remove('notshowerrorcontainnumber');
        small2.classList.remove('showerrorcontainuppercase');
        small2.classList.add('notshowerrorcontainuppercase');
        small3.classList.add('showerrorcontainsymbol');
        small3.classList.remove('notshowerrorcontainsymbol');

    }
    //Size <8; NO contains NUMBER; contains UPPERCASE; contains SYMBOL
    if(password.length < 8 && check_contain_number == null && check_contain_uppercase != null && check_contain_symbol != null ){
        userInput.classList.add('invalid-text');
        userInput.classList.remove('valid-text');
        small.classList.add('showerrorsize');
        small.classList.remove('notshowerrorsize');
        small1.classList.add('showerrorcontainnumber');
        small1.classList.remove('notshowerrorcontainnumber');
        small2.classList.remove('showerrorcontainuppercase');
        small2.classList.add('notshowerrorcontainuppercase');
        small3.classList.remove('showerrorcontainsymbol');
        small3.classList.add('notshowerrorcontainsymbol');

    }
    //Size <8; contains NUMBER; contains UPPERCASE; contains SYMBOL
    if(password.length < 8 && check_contain_number != null && check_contain_uppercase != null && check_contain_symbol != null ){
        userInput.classList.add('invalid-text');
        userInput.classList.remove('valid-text');
        small.classList.add('showerrorsize');
        small.classList.remove('notshowerrorsize');
        small1.classList.remove('showerrorcontainnumber');
        small1.classList.add('notshowerrorcontainnumber');
        small2.classList.remove('showerrorcontainuppercase');
        small2.classList.add('notshowerrorcontainuppercase');
        small3.classList.remove('showerrorcontainsymbol');
        small3.classList.add('notshowerrorcontainsymbol');

    }
    //Size <8; contains NUMBER; contains UPPERCASE; NO contains SYMBOL
    if(password.length < 8 && check_contain_number != null && check_contain_uppercase != null && check_contain_symbol == null ){
        userInput.classList.add('invalid-text');
        userInput.classList.remove('valid-text');
        small.classList.add('showerrorsize');
        small.classList.remove('notshowerrorsize');
        small1.classList.remove('showerrorcontainnumber');
        small1.classList.add('notshowerrorcontainnumber');
        small2.classList.remove('showerrorcontainuppercase');
        small2.classList.add('notshowerrorcontainuppercase');
        small3.classList.add('showerrorcontainsymbol');
        small3.classList.remove('notshowerrorcontainsymbol');
    }
    //Size <8; contains NUMBER; NO contains UPPERCASE; NO contains SYMBOL
    if(password.length < 8 && check_contain_number != null && check_contain_uppercase == null && check_contain_symbol == null ){
        userInput.classList.add('invalid-text');
        userInput.classList.remove('valid-text');
        small.classList.add('showerrorsize');
        small.classList.remove('notshowerrorsize');
        small1.classList.remove('showerrorcontainnumber');
        small1.classList.add('notshowerrorcontainnumber');
        small2.classList.add('showerrorcontainuppercase');
        small2.classList.remove('notshowerrorcontainuppercase');
        small3.classList.add('showerrorcontainsymbol');
        small3.classList.remove('notshowerrorcontainsymbol');
    }
    //Size <8; contains NUMBER; NO contains UPPERCASE; contains SYMBOL
    if(password.length < 8 && check_contain_number != null && check_contain_uppercase == null && check_contain_symbol != null ){
        userInput.classList.add('invalid-text');
        userInput.classList.remove('valid-text');
        small.classList.add('showerrorsize');
        small.classList.remove('notshowerrorsize');
        small1.classList.remove('showerrorcontainnumber');
        small1.classList.add('notshowerrorcontainnumber');
        small2.classList.add('showerrorcontainuppercase');
        small2.classList.remove('notshowerrorcontainuppercase');
        small3.classList.remove('showerrorcontainsymbol');
        small3.classList.add('notshowerrorcontainsymbol');
    }
});

email.addEventListener('input', function (ev){
    let userInput = ev.currentTarget;
    let regform = ev.currentTarget.parentElement;
    let small = regform.querySelector('small');
    let small1 = regform.querySelectorAll('small')[1];
    let email = userInput.value;
    let conditions = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    let check_start_letter = email.match(conditions);
    let submitter = document.getElementById('submitter');

    if(check_start_letter){
        userInput.classList.remove('invalid-text');
        userInput.classList.add('valid-text');
        small1.classList.remove('showerroremail');
        small1.classList.add('notshowerroremail');
        small.classList.remove('showerroremail');
        small.classList.add('notshowerroremail');
        checked[2] = 7;
        if(checked[0] == 7 && checked[1] == 7 && checked[2] == 7 && checked[3] == 7){
            numhcecked = 4;
        }
        if(numhcecked == 4){
            submitter.classList.remove('invalid-form');
            submitter.classList.add('valid-form');
        }else{
            ev.preventDefault();
            submitter.classList.add('invalid-form');
            submitter.classList.remove('valid-form');
        }
    }else{
         userInput.classList.add('invalid-text');
         userInput.classList.remove('valid-text');
         small1.classList.add('showerroremail');
         small1.classList.remove('notshowerroremail');
         small.classList.add('showerroremail');
         small.classList.remove('notshowerroremail');
    }

})

confirmpassword.addEventListener('input', function (ev){
    let userInput = ev.currentTarget;
    let confirmpass = userInput.value;
    let regform = ev.currentTarget.parentElement;
    let small = regform.querySelector('small');
    let password = document.getElementById('password').value;
    let submitter = document.getElementById('submitter');

    if(password != confirmpass){
        userInput.classList.add('invalid-text');
        userInput.classList.remove('valid-text');
        small.classList.add('showerrorpass');
        small.classList.remove('notshowerrorpass');
    }else{
        userInput.classList.remove('invalid-text');
        userInput.classList.add('valid-text');
        small.classList.remove('showerrorpass');
        small.classList.add('notshowerrorpass');
        checked[3] = 7;
        if(checked[0] == 7 && checked[1] == 7 && checked[2] == 7 && checked[3] == 7){
            numhcecked = 4;
        }
        if(numhcecked == 4){
            submitter.classList.remove('invalid-form');
            submitter.classList.add('valid-form');
        }else{
            ev.preventDefault();
            submitter.classList.add('invalid-form');
            submitter.classList.remove('valid-form');
        }
    }

});