
document.querySelectorAll(".msghd").forEach(element => {element.style.visibility="hidden";});
var heure=35,taux=23,m=12,j=21.6,h=7;
var stat=new Array(document.getElementsByName('status').length);
var lenBrut=new Array(document.getElementsByClassName('.brut').length);
var lenNet=new Array(document.getElementsByClassName('.net').length);
var msg=document.querySelectorAll(".msg");
var brutans=document.querySelector('#brutans'),
brutmen=document.querySelector('#brutmen'),
brutjour=document.querySelector('#brutjour'),
bruthor=document.querySelector('#bruthor'),
netans=document.querySelector('#netans'),
netmen=document.querySelector('#netmen'),
netjour=document.querySelector('#netjour'),
nethor=document.querySelector('#nethor');

for(var i=0;i<stat.length;i++)
stat[i]=parseFloat(document.getElementsByName('status')[i].value);
console.log(stat);

function rbtn()
{    
    for(var i=0;i<stat.length;i++)
    {
    if(document.getElementsByName('status')[i].checked)
        taux=stat[i];
    }
}

document.querySelectorAll(".txt")[0].textContent=taux;
document.querySelectorAll(".txt")[1].textContent=m;
document.querySelectorAll(".txt")[2].textContent=heure;

// $('input[type=number]').keyup(function () {
//     //console.log($(this).attr('id'));
//     calcul($(this))
// })
// function calcul(params) {
//     console.log("Je suis la fonction");
//     console.log(params);
//     params.keyup(function()
//     {
//         brutmen.value=(this.value/m).toFixed(2);
//         brutjour.value=(this.value/(m*j)).toFixed(2);////month=12,jour=21
//         bruthor.value=(this.value/(m*j*h)).toFixed(2);
//         netans.value=Math.round(brutans.value-(brutans.value*taux/100));
//         netmen.value=(netans.value/m).toFixed(2);
//         netjour.value=(netans.value/(m*j)).toFixed(2);
//         nethor.value=(netans.value/(m*j*h)).toFixed(2);
//         document.querySelectorAll(".txt")[0].textContent=taux;
//         hideandshow();
//     });
// }

brutans.addEventListener("keyup",function()
{
brutmen.value=(this.value/m).toFixed(2);
brutjour.value=(this.value/(m*j)).toFixed(2);////month=12,jour=21
bruthor.value=(this.value/(m*j*h)).toFixed(2);
netans.value=Math.round(brutans.value-(brutans.value*taux/100));
netmen.value=(netans.value/m).toFixed(2);
netjour.value=(netans.value/(m*j)).toFixed(2);
nethor.value=(netans.value/(m*j*h)).toFixed(2);
document.querySelectorAll(".txt")[0].textContent=taux;
hideandshow();
});

brutmen.addEventListener("keyup",function()
{brutans.value=Math.round(this.value*m);
brutjour.value=(this.value/j).toFixed(2);
bruthor.value=(this.value/(j*h)).toFixed(2);
netmen.value=(brutmen.value-(brutmen.value*taux/100)).toFixed(2);
netans.value=Math.round(netmen.value*m);
netjour.value=(netmen.value/j).toFixed(2);
nethor.value=(netmen.value/(j*h)).toFixed(2);
document.querySelectorAll(".txt")[0].textContent=taux;
hideandshow();
});

brutjour.addEventListener("keyup",function()
{brutans.value=Math.round(this.value*m*j);
brutmen.value=(this.value*j).toFixed(2);
bruthor.value=(this.value/h).toFixed(2);
netjour.value=(brutjour.value-(brutjour.value*taux/100)).toFixed(2);
netans.value=Math.round(netjour.value*m*j);
netmen.value=(netjour.value*j).toFixed(2);
nethor.value=(netjour.value/h).toFixed(2);
document.querySelectorAll(".txt")[0].textContent=taux;
hideandshow();
});

bruthor.addEventListener("keyup",function()
{brutans.value=Math.round(this.value*m*j*h);
brutmen.value=(this.value*j*h).toFixed(2);
brutjour.value=(this.value*h).toFixed(2);
nethor.value=(bruthor.value-(bruthor.value*taux/100)).toFixed(2);
netans.value=Math.round(nethor.value*m*j*h);
netmen.value=(nethor.value*j*h).toFixed(2);
netjour.value=(nethor.value*h).toFixed(2);
document.querySelectorAll(".txt")[0].textContent=taux;
hideandshow();
});

netans.addEventListener("keyup",function()
{netmen.value=(this.value/m).toFixed(2);
netjour.value=(this.value/(m*j)).toFixed(2);
nethor.value=(this.value/(m*j*h)).toFixed(2);
brutans.value=Math.round(100*netans.value/(100-taux));
brutmen.value=(brutans.value/m).toFixed(2);
brutjour.value=(brutans.value/(m*j)).toFixed(2);
bruthor.value=(brutans.value/(m*j*h)).toFixed(2);
document.querySelectorAll(".txt")[0].textContent=taux;
hideandshow();
});

netmen.addEventListener("keyup",function()
{netans.value=Math.round(this.value*m);
netjour.value=(this.value/j).toFixed(2);
nethor.value=(this.value/(h*j)).toFixed(2);
brutmen.value=(100*netmen.value/(100-taux)).toFixed(2);
brutans.value=Math.round(brutmen.value*m);
brutjour.value=(brutmen.value/j).toFixed(2);
bruthor.value=(brutmen.value/(h*j)).toFixed(2);
document.querySelectorAll(".txt")[0].textContent=taux;
hideandshow();
});

netjour.addEventListener("keyup",function()
{netans.value=Math.round(this.value*m*j);
netmen.value=(this.value*j).toFixed(2);
nethor.value=(this.value/h).toFixed(2);
brutjour.value=(100*netjour.value/(100-taux)).toFixed(2);
brutans.value=Math.round(brutjour.value*m*j);
brutmen.value=(brutjour.value*j).toFixed(2);
bruthor.value=(brutjour.value/h).toFixed(2);
document.querySelectorAll(".txt")[0].textContent=taux;
hideandshow();
});


nethor.addEventListener("keyup",function()
{netans.value=Math.round(this.value*m*j*h);
netmen.value=(this.value*j*h).toFixed(2);
netjour.value=(this.value*h).toFixed(2);
bruthor.value=(100*nethor.value/(100-taux)).toFixed(2);
brutans.value=Math.round(bruthor.value*m*j*h);
brutmen.value=(bruthor.value*j*h).toFixed(2);
brutjour.value=(bruthor.value*h).toFixed(2);
document.querySelectorAll(".txt")[0].textContent=taux;
hideandshow();
});

function smic()
{   document.getElementsByName("status").forEach(element => {element.checked="false";});
    var taux=23;
    var smicbrutans=17496;
    var smicbrutmen=1458;
    brutans.value=smicbrutans;
    brutmen.value=smicbrutmen;
    brutjour.value=(smicbrutans/(m*j)).toFixed(2);
    bruthor.value=(smicbrutans/(m*j*h)).toFixed(2);
    netans.value=(smicbrutans-(smicbrutans*taux/100)).toFixed(2);
    netmen.value=(smicbrutmen-(smicbrutmen*taux/100)).toFixed(2);
    netjour.value=(netans.value/(m*j)).toFixed(2);
    nethor.value=(netjour.value/h).toFixed(2); 
    hideandshow();
    document.querySelectorAll(".txt")[0].textContent=taux;     
    msg[2].textContent=taux;     
}
function hideandshow()
{
document.querySelectorAll(".ftext")[0].style.visibility="hidden";
document.querySelectorAll(".msghd").forEach(element => {element.style.visibility="visible";});
msg[0].innerHTML=netmen.value;
msg[1].innerHTML=brutmen.value;
msg[2].innerHTML=taux;
msg[3].innerHTML=(brutmen.value-netmen.value).toFixed(2);
}

