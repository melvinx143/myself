let btn1=document.getElementById("previous");
let btn2=document.getElementById("next");
let images=document.getElementById("imaging");
let newskills=document.getElementById("skillings");
let display=[
    {
imaging:'./sql.png',
newskills:'SQL'
    },
    {
        imaging:'./sql.png',
        newskills:'SQL'  
    },
    {
        imaging:'./css.png',
        newskills:'CSS'  
    },
    {
        imaging:'./html5.png',
        newskills:'HTML'  
    },
    {
        imaging:" ./jenkins.jpg",
newskills:"JENKINS"
    },
    {
        imaging:" ./mongo.jpg",
newskills:"MONGODB"
  },
    {
        imaging:" ./javascript.webp",
newskills:"JAVASCRIPT"
    },
];

let count=0;

window.addEventListener('DOMContentLoaded',function(){
    person();
  
});
function person()
{
    let p=display[count];
imaging.src=p.imaging;
newskills.textContent=p.newskills;

}




function me(){
    count++;
if(count>display.length-1)
{
    count=0;
}
person();
}
 
setInterval(me,1000);



