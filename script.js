const steps=[
  {t:"Discover",p:"I start by understanding the users, the product context and what actually needs to change.",l:["User & business context","Research & insights","Competitive scan"]},
  {t:"Define",p:"I turn what I learned into a clear product direction, structure and priorities.",l:["Problem definition","User flows","Information architecture"]},
  {t:"Design",p:"I turn that direction into interfaces, prototypes and a coherent visual system.",l:["Design exploration","Prototype & interaction","Feedback & refinement"]},
  {t:"Validate",p:"I test the experience, refine the details and prepare the design for a clean handoff.",l:["Usability checks","Final refinement","Developer handoff"]}
];

document.querySelectorAll(".tabs button").forEach((button,index)=>{
  button.addEventListener("click",()=>{
    document.querySelector(".tabs .active")?.classList.remove("active");
    button.classList.add("active");
    const step=steps[index];
    document.querySelector("#stepContent").innerHTML=
      "<h3>"+step.t+"</h3><p>"+step.p+"</p><h4>In this phase</h4><ul>"+
      step.l.map(item=>"<li>"+item+"</li>").join("")+"</ul>";

    const video=document.querySelector("#processVideo");
    const source=video.querySelector("source");
    source.src="assets/video-"+(index+1)+".mp4";
    video.load();
    video.play().catch(()=>{});
  });
});