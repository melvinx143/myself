
    let theme=document.getElementById("theme");
    let totalbody=document.getElementById("totalbody");
    let aboutme=document.getElementById("aboutme");
    let p=document.querySelector('.navbar');
let q=document.getElementById('navbaroptions');
let list=document.getElementById("listing");
let describingcontent=document.getElementById("describingcontent");
let links=document.getElementById("links");
let project3=document.querySelector('.project3');

    let flag=0;
    theme.addEventListener('click',function(){
        if(flag==0)
        {
        totalbody.style.background='black';
        aboutme.style.color='white';
        p.style.color='white';
        q.style.color='white';
        describingcontent.style.color='white';
        theme.textContent='DARK';
        
      
        flag=1;
    }
    else
    {
        totalbody.style.background='transparent';
        aboutme.style.color='black';
        p.style.color='black';
        q.style.color='black';
        describingcontent.style.color='black';
        theme.textContent='LIGHT';
        contact.style.background='grey';
       flag=0;
    }
    });
