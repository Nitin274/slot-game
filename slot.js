alert('Please Read Instruction Before Play This Game');
$(()=>{
$('.slide').click(() => {
        $('#inslide').slideToggle();
    });
});
let check=false;
let value1=document.getElementById('id1');
let value2=document.getElementById('id2');
let value3=document.getElementById('id3');
let inputspd=document.getElementById('inpspeed');
let value =[
    '😂','😊','😍','😁','😃','😘','🤗'
]
function getRandomValue()
{
    return  value[Math.floor(Math.random()*7)]
}
let animationId;
let selectvalue;
function submit()
{
    let sel=document.getElementsByName('select');
    for(let x=0; x<sel.length; x++)
    {
        if(sel[x].checked)
        {
            check=true;
            selectvalue=sel[x].value;
        }
    }
}
function updateAnimation(newspeed)
{
    if(animationId) clearInterval(animationId)
    animationId=setInterval(() => {
        value1.innerHTML=getRandomValue();
        value2.innerHTML=getRandomValue();
        value3.innerHTML=getRandomValue();
        if((value1.innerHTML==value2.innerHTML)&&(value2.innerHTML==value3.innerHTML))
        {
          console.log(value1.innerHTML+" "+value2.innerHTML+" "+value3.innerHTML);
          if(selectvalue==value1.innerHTML)
          {
            alert("Yeah you won this match");
          }
          else{
            alert("Sorry Please Try Again Later");
          }
         let ab=document.getElementById('result');
         ab.innerHTML=value1.innerHTML+" "+value2.innerHTML+" "+value3.innerHTML;
         ab.style.fontSize="50px";
         check=false;
         stopgame(animationId);
        }
    }, 1000/newspeed);
}
function stopgame(nn)
{
    clearInterval(nn);
}
inputspd.onchange=function (ev) {  
    if(check)
    {
    document.documentElement.style.setProperty('--speed',ev.target.value);
    updateAnimation(ev.target.value);
    }
    else if(!check)
    {
        alert("Please Select the Value");
    }
}
