const steps=[{t:"Discover",p:"I start by understanding the users, the context and what actually needs to change.",l:["User & business context","Research & insights","Competitive scan"]},{t:"Define",p:"I turn what I learned into a clear product direction, structure and priorities.",l:["Problem definition","User flows","Information architecture"]},{t:"Design",p:"I turn that direction into interfaces, prototypes and a coherent visual system.",l:["Design exploration","Prototype & interaction","Feedback & refinement"]},{t:"Validate",p:"I test the experience, refine the details and prepare the design for a clean handoff.",l:["Usability checks","Final refinement","Developer handoff"]}];

document.querySelectorAll(".tabs button").forEach((b,i)=>b.onclick=()=>{
  document.querySelector(".tabs .active")?.classList.remove("active");
  b.classList.add("active");
  const s=steps[i];
  document.querySelector("#stepContent").innerHTML='<h3>'+s.t+'</h3><p>'+s.p+'</p><h4>In this phase</h4><ul>'+s.l.map(x=>'<li>'+x+'</li>').join("")+'</ul>';
  const v=document.querySelector("#processVideo source");
  v.src="assets/video-"+(i+1)+".mp4";
  const el=document.querySelector("#processVideo");
  el.load();
  el.play().catch(()=>{});
});

/* stacked section scroll motion */
const stackSections=[...document.querySelectorAll(".hero,.service,.process,.work,.contact")];
stackSections.slice(1).forEach(s=>s.classList.add("stack-shadow"));

let ticking=false;
function updateStackMotion(){
  if(window.innerWidth<=800 || window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    stackSections.forEach(s=>s.style.transform="");
    ticking=false;
    return;
  }
  const vh=window.innerHeight;
  stackSections.forEach((section,index)=>{
    if(index===0) return;
    const r=section.getBoundingClientRect();
    const start=vh;
    const end=vh*.62;
    const p=Math.max(0,Math.min(1,(start-r.top)/(start-end)));
    const y=(1-p)*42;
    const scale=.988+(p*.012);
    section.style.transform=`translateY(${y}px) scale(${scale})`;
  });
  ticking=false;
}
function requestStackUpdate(){
  if(!ticking){
    requestAnimationFrame(updateStackMotion);
    ticking=true;
  }
}
window.addEventListener("scroll",requestStackUpdate,{passive:true});
window.addEventListener("resize",requestStackUpdate);
requestStackUpdate();
