/*<div class="project1">
    <button id="previous">&#11160;</button>
    <div class="insideprojects">
    <img src="./qrcode.jpg" height="100px" width="300px;">
    <div id="insidebuttons">
       <a href="https://melvinx143.github.io/JavaScriptProjects/Quotes.html"> <button id="visitme">Visit Me</button></a>
       <a href="https://github.com/melvinx143/QR_generator.git"> <button id="visitme">GitHub</button></a>
    </div>
       </div>
       <button id="next">&#11162;</button>
</div>*/
let linksforsite=document.getElementById('linked');

let btn4=document.getElementById("next");
let profilepic=document.getElementById("profilepic");
let  visitme=document.getElementById('visitme');
let  github=document.getElementById('github');
let describingcontent1=document.getElementById("describingcontent");
let display1=[
    {
        profilepic:' ./qrcode.jpg',
        linksforsite:'https://melvinx143.github.io/QR_generator/qr_code.html',
        github:'/https://github.com/melvinx143/QR_generator.git',
        describingcontent1:'This is QR code scanner.By typing the value in the space it generates the required QR code which can be scanned.     Technology used:HTML,CSS,JavaScript,API'

    },
    {
        profilepic:'./css.png',
        linksforsite:'https://melvinx143.github.io/JavaScriptProjects/counter.html',
        github:'/https://github.com/melvinx143/Quotes.git',
        describingcontent1:'counter html this is for upgrading '

    }
];

let counts=0;
window.addEventListener('click',function(){
    person();
});

function person()
{
    let p=display1[counts];
    profilepic.src=p.profilepic;
    describingcontent1.textContent=p.describingcontent1;
    linksforsite.src=p.linksforsite;

};
