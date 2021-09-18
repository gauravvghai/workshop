// var let const

// let name = 'Gaurav';
// let age = 23;
// let married = false;
// let kids;

// let person = {
//     name: 'gaurav',
//     age: 23,
// };
// var intro = `My Name is ${name}. My age is ${age}`;
// var intro = 'My Name is ' + name + '. My age is ' + age;

// let num = [2,3,4,5,6]; //5

// if(num) {
//     console.log(num);
// } else {

// }

document.getElementById('test').innerText = 'Hello World';
document.getElementById('test').style.color = 'red';
document.getElementById('test').className = 'hello';



document.getElementById('submit').addEventListener('click', function(){
    let email = document.getElementById('exampleInputEmail1').value;
    let password = document.getElementById('exampleInputPassword1').value;
    var request_emailregex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    document.getElementById('emailError').innerText = ''; 
    document.getElementById('passwordError').innerText = '';

    if(email == '') {
        document.getElementById('emailError').innerText = 'This is required'; 
        document.getElementById('emailError').style.color = 'red';
    } else if(!email.match(request_emailregex)){
        document.getElementById('emailError').innerText = 'Email Format Is Not Correct'; 
        document.getElementById('emailError').style.color = 'red';
    } else if(password == ''){
        document.getElementById('passwordError').innerText = 'This is required';
        document.getElementById('passwordError').style.color = 'red';
    } else {
        alert('Form Submitted');
    }
});