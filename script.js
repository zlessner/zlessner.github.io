let me = document.querySelector('.Me')
let projects = document.querySelector('.Projects')
let experience = document.querySelector('.Experience')
let inspiration = document.querySelector('.Inspiration-Articles')
let content= document.querySelector('.content')
let subhead= document.querySelector('.subhead')

let node1 = document.createTextNode("Hello, and welcome to my porfolio! I would love to tell you a little bit about myself. I am an aspiring software engineer, skilled in creating sports modules.");

let node2 = document.createTextNode("Here are my projects!"); 

let node3 = document.createTextNode("exp"); 

let node4 = document.createTextNode("insp"); 


let contentArray=[node1,node2,node3,node4]



function initialLoad() {    

    content.appendChild(node1)
    }
    
    window.onload = initialLoad() 


me.addEventListener("click", function() {
    loadContent('first') });

projects.addEventListener("click", function() {
    loadContent('second') });

experience.addEventListener("click", function() {
    loadContent('third') });

inspiration.addEventListener("click", function() {
    loadContent('fourth') });


function loadContent (x) {
    content.remove()

    if (x=='first') {
        console.log(x)
        console.log(node1)
        // for(let i=0; i<blockArray.length; i++) {

        //     blockArray[i].remove()
        //     //
        subhead.appendChild(node1) 
// }
    }
    if (x=='second') {
        content.appendChild(node2) 
}

    if (x=='third') {
        content.appendChild(node3) 
}

    if (x=='fourth') {
        content.appendChild(node4) 
}
    }