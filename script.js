const btn = document.getElementById('btn');
const head = document.getElementById('head');

const data = [
    "what is the full form of acm?",
    "what are the events organized by jec acm?",
    "what is the name of event for competitive programming?"
]

const handleClick = () =>{
    let n = data.length;
    let r = Math.floor(Math.random()*n);
    
    head.innerHTML = `${data[r]}`;

}

btn.addEventListener('click',handleClick);