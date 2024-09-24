let search = document.getElementById('search');

search.style.textAlign = 'right';


// editing the member login


// styling all h1 elements
let headingOne = document.querySelectorAll('h2');

headingOne.forEach(heading => {
    heading.style.backgroundColor = '#6f6dac';
    heading.style.color = 'white';
    heading.style.padding = '8px 0px 8px 25px';
    heading.style.borderRadius = '10px';
    heading.style.margin = '50px 0px 2px 0px'
});

// styling comment
let commentSections = document.getElementsByClassName('commentSection');

for (let i = 0; i < commentSections.length; i++) {
    commentSections[i].style.textAlign = 'right';
    commentSections[i].style.padding = '0% 20% 0% 0%'
}

// input
let comments = document.getElementById('comment')
// submit
let commentBtn = document.getElementById('commentBtn')
// comment list
let allComment = document.getElementById('allComment')
allComment.style.fontStyle = 'oblique'
allComment.style.color = '#8180b6'

function addingComment() {
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
  }

  commentBtn.addEventListener('click', addingComment);