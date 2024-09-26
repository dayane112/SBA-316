// Window prompt for age request
let age;
for(i = 0; i < 2; i++){
    
    age = window.prompt('You must be 18+ years or older to enter this site. Do you wish to continue?')
    age= age.toLowerCase();

    if(age === 'yes'){
        alert('Please enjoy the site!');
        break;
    } else if (age === 'no'){
        document.body.classList.add('blur');
        alert('You may not proceed');
        break;
    }else{
        alert('Please input yes or no. You will be redirected if you do not answer');
        window.location.href = 'https://www.google.com/'
    }
}


// quick search______________________________________
let search = document.getElementById('search');
search.style.textAlign = 'right';


// editing the member login__________________________




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
    firstBtn.style.backgroundColor = 'purple';
})


// styling all h1 elements____________________________________
let headingOne = document.querySelectorAll('h1');
headingOne.forEach(h1Heading => {
    h1Heading.style.textAlign = 'center'
    h1Heading.style.color = '#8180b6';
    h1Heading.style.padding = '0px'
})


// styling all h2 elements__________________________________
let headingTwo = document.querySelectorAll('h2');

headingTwo.forEach(heading => {
    heading.style.backgroundColor = '#6f6dac';
    heading.style.color = 'white';
    heading.style.padding = '8px 0px 8px 25px';
    heading.style.borderRadius = '10px';
    heading.style.margin = '50px 0px 2px 0px';
});


// paragraph_______________________________________________
let para = document.querySelectorAll('p');

for (let i = 0; i < para.length; i++) {
    para[i].style.padding = '0px 0px 0px 35px';
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

    // adding new comment after the last child element
    allComment.appendChild(para);
  
    comments.value = "";
    comments.focus();
  })






  