const PASSWORD = "bibup";

const lock=document.getElementById("lock"), gift=document.getElementById("gift");
const input=document.getElementById("password"), error=document.getElementById("error");

function openGift(){
  if(input.value.trim().toLowerCase()===PASSWORD){
    lock.classList.add("hidden"); gift.classList.remove("hidden"); window.scrollTo(0,0); hearts();
  }else{
    error.textContent="not quite ♡ try again";
    input.animate([{transform:"translateX(-5px)"},{transform:"translateX(5px)"},{transform:"translateX(0)"}],{duration:180});
  }
}
document.getElementById("unlock").onclick=openGift;
input.onkeydown=e=>{if(e.key==="Enter")openGift()};

function go(id){document.getElementById(id).scrollIntoView({behavior:"smooth"})}

document.querySelectorAll(".motivation").forEach(btn=>{
  btn.onclick=()=>document.getElementById("motivationOutput").textContent=btn.dataset.msg;
});

const checks=[...document.querySelectorAll(".checklist input")], progress=document.getElementById("progress"), progressText=document.getElementById("progressText");
checks.forEach(c=>c.onchange=()=>{
  const done=checks.filter(x=>x.checked).length;
  progress.style.width=(done/checks.length*100)+"%";
  progressText.textContent=`${done} / ${checks.length} done`;
});

function hearts(){
  for(let i=0;i<12;i++)setTimeout(()=>{
    const h=document.createElement("div");h.className="floating";h.textContent=Math.random()>.5?"♡":"♥";
    h.style.cssText=`position:fixed;left:${35+Math.random()*30}vw;top:${55+Math.random()*15}vh;color:#e9a6c9;z-index:5;animation:float 1.8s forwards`;
    document.body.appendChild(h);setTimeout(()=>h.remove(),1800);
  },i*70);
}
const s=document.createElement("style");s.textContent="@keyframes float{to{transform:translateY(-100px) scale(1.2);opacity:0}}";document.head.appendChild(s);
