// Window prompt for age request
let age;
for(let i = 0; i < 3; i++){
    
    age = window.prompt('You must be 18+ years or older to enter this site. Do you wish to continue?')
    age = age.toLowerCase();

    if(age === 'yes'){
        alert('Please enjoy the site!');
        break;
    } else if (age === 'no'){
        document.body.classList.add('blur');
        alert('You may not proceed');
        break;
    }else{
        alert('Please input yes or no. You will be redirected if you do not answer');
        if(i === 3){
            window.location.href = 'https://www.google.com/';
            break;
        }
    }
}


// quick search______________________________________
let search = document.getElementById('search');
search.style.textAlign = 'right';

let sBtn = document.getElementsByClassName('sBtn')
for(let i = 0; i < sBtn.length; i++){
    sBtn[i].addEventListener('click', function(e) {
        e.preventDefault();

        sBtn[i].style.color = 'white';
        sBtn[i].style.backgroundColor = '#8180b6';
        // sBtn[i] = '' 
    })
}



// editing submit buttons____________________________
// below was trying to all it to all submit button but it was not working
// let allBtn = document.getElementsByClassName('allBtn');
// for(b = 0; b < allBtn; b++){
//     allBtn[b].addEventListener('click', function() {
//         e.preventDefault();
//         allBtn[b].style.color = 'purple';
//     })
// }
// changing the color of the the login button
let firstBtn = document.getElementById('firstBtn');
let username = document.getElementById('username');
let welcome = document.getElementById('welcome');

firstBtn.addEventListener('click', function(e) {
    e.preventDefault();

    username = username.value
    welcome.textContent = `Thank you for logging in, ${username}`

    firstBtn.style.color = 'white';
    firstBtn.style.backgroundColor = '#8180b6';
})


// editing the member login__________________________
let fBtn = document.getElementById('firstBtn');
let userN = document.getElementById('username');
let password = document.getElementById('password')

function memberSubmit() {
    let passwords = password.value.length >= 16;
    let userName = userN.value.length >= 6;
    if(passwords && userName){
        fBtn.disabled = false
    }else{
        fBtn.disabled = true
    }
}
userN.addEventListener('input', memberSubmit)
password.addEventListener('input', memberSubmit)
memberSubmit()

// let uName = userN.addEventListener('input');
// let pswd = password.addEventListener('input');
// memberSubmit(uName, pswd);

// userN.addEventListener('input', function () {

//     let userName = userN.value
//     if(userName < 6){
//         fBtn.disabled = true;
//     }else{
//         fBtn.disabled = false;
//     }
// })


// password.addEventListener('input', function () {

//     let passwords = password.value
//     if(passwords < 16){
//         password.disabled = true;
//     }else{
//         password.disabled = false;
//     }
// })


// code below not working
// userN.addEventListener('input', function () {

//     let userName = userN.value
//     if(userName !== ''){
//         fBtn.disabled = true;
//     }else{
//         fBtn.disabled = false;
//     }
// })



// styling all h1 elements____________________________________
let headingOne = document.querySelectorAll('h1');
headingOne.forEach(h1Heading => {
    h1Heading.style.textAlign = 'center'
    h1Heading.style.color = '#8180b6';
    h1Heading.style.padding = '0px';
})


// styling all h2 elements__________________________________
let headingTwo = document.querySelectorAll('h2');

headingTwo.forEach(heading => {
    heading.style.backgroundColor = '#6f6dac';
    heading.style.color = 'white';
    heading.style.padding = '8px 0px 8px 25px';
    heading.style.borderRadius = '10px';
    heading.style.margin = '50px 0px 2px 0px';
    heading.style.fontStyle = 'Oblique'
});


// paragraph_______________________________________________
let para = document.querySelectorAll('p');

for (let i = 0; i < para.length; i++) {
    para[i].style.padding = '0px 0px 0px 35px';
}

// changing second h4 to a lighter color
let paraOne= document.querySelector('h2 + h4 + p');
let paraTwo = paraOne.nextElementSibling;
if(paraTwo){
    paraTwo.style.color = '#8180b694'
}


// bullet style_____________________________________________
let bullet = document.getElementsByTagName('ul');
for (let i = 0; i < bullet.length; i++) {
    bullet[i].style.listStyleType = 'lower-roman';
}


// styling comment_________________________________________
let commentSections = document.getElementsByClassName('commentSection');

for (let i = 0; i < commentSections.length; i++) {
    commentSections[i].style.textAlign = 'right';
    commentSections[i].style.padding = '0% 20% 0% 0%';
}

// comment box style______________________________________
// input
let comments = document.getElementById('comment');
// submit
let commentBtn = document.getElementById('commentBtn');
// comment list
let allComment = document.getElementById('allComment');
allComment.style.fontStyle = 'oblique';
allComment.style.color = '#8180b6';



  commentBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let comment = comments.value.trim();
  
    // check if it's an em,pty string and stop if it is an empty string
    if (comment === "") return;

    // creating a new p element for the comment
    let para = document.createElement("p");

    // assigns the new comemnt value to the new p element 
    para.textContent = comment; 
    para.style.padding = '0px 0px 0px 35px';

    // adding new comment after the last child element
    allComment.appendChild(para);


    comments.value = "";
    comments.focus();
  })






  