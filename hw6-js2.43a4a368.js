let e=document.querySelector("#app"),t=function(e=0){let t=e;return{increment:()=>t+=1,decrement:()=>t-=1,getValue:()=>t}}();e.innerHTML=`
  <div class="container">
    <h1>My name is Parcel</h1>
    <p>Привіт, Parcel! 👋</p>

    <div class="counter">
      <button id="decrement">\u{2212}</button>
      <span id="value">0</span>
      <button id="increment">+</button>
    </div>
  </div>
`;let n=document.querySelector("#value"),c=document.querySelector("#increment"),r=document.querySelector("#decrement");c.addEventListener("click",()=>{n.textContent=t.increment()}),r.addEventListener("click",()=>{n.textContent=t.decrement()});
//# sourceMappingURL=hw6-js2.43a4a368.js.map
