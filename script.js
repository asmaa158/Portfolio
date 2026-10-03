const steps=[{t:"Discover",p:"I start by understanding the users, the context and what actually needs to change.",l:["User & business context","Research & insights","Competitive scan"]},{t:"Define",p:"I turn what I learned into a clear product direction, structure and priorities.",l:["Problem definition","User flows","Information architecture"]},{t:"Design",p:"I turn that direction into interfaces, prototypes and a coherent visual system.",l:["Design exploration","Prototype & interaction","Feedback & refinement"]},{t:"Validate",p:"I test the experience, refine the details and prepare the design for a clean handoff.",l:["Usability checks","Final refinement","Developer handoff"]}];

document.querySelectorAll(".tabs button").forEach((b,i)=>b.onclick=()=>{
  document.querySelector(".tabs .active")?.classList.remove("active");
  b.classList.add("active");
  const s=steps[i];
  document.querySelector("#stepContent").innerHTML='<h3>'+s.t+'</h3><p>'+s.p+'</p><h4>In this phase</h4><ul>'+s.l.map(x=>'<li>'+x+'</li>').join("")+'</ul>';
  const source=document.querySelector("#processVideo source");
  source.src="assets/video-"+(i+1)+".mp4";
  const video=document.querySelector("#processVideo");
  video.load();
  video.play().catch(()=>{});
});

/* Build a proper sticky viewport for every main section. */
const sections=[...document.querySelectorAll("main > section")];
sections.forEach((section,index)=>{
  const wrap=document.createElement("div");
  wrap.className="stack-wrap";
  wrap.style.zIndex=String(index+1);
  section.parentNode.insertBefore(wrap,section);
  wrap.appendChild(section);
});