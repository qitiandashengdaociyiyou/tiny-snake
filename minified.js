!function(){if("boolean"!=typeof window.active){var e;let k;window.toggleModal=function(n=3e3){window.clearTimeout(e),!0===window.active?(e=window.setTimeout((function(){x=!1,requestAnimationFrame(L)}),n),window.popup.style.display="inline-block",window.popup.focus()):(x=!0,window.active=!1,window.popup.style.display="none",window.focusedElement.focus({focusVisible:!0}))},window.focusedElement=document.activeElement,window.active=!window.active??!0;let C=[0,0];window.popup=document.createElement("div"),window.popup.id="game";let S=!1;window.popup.style.all="initial",window.popup.style.display="inline-block",window.popup.style.position="fixed",window.popup.style.left="0px",window.popup.style.top="0px",window.popup.style.margin="0",window.popup.style.padding="0",window.popup.style.zIndex="9999",window.popup.tabIndex=0,window.popup.addEventListener("mousedown",(function(e){S=!0,C=[window.popup.offsetLeft-e.clientX,window.popup.offsetTop-e.clientY]}),!0),document.addEventListener("mouseup",(function(){S=!1}),!0),document.addEventListener("mousemove",(function(e){e.preventDefault(),S&&(k={x:e.clientX,y:e.clientY},window.popup.style.left=k.x+C[0]+"px",window.popup.style.top=k.y+C[1]+"px")}),!0),document.addEventListener("focus",(function(e){document.activeElement!==window.popup&&(window.focusedElement=document.activeElement)}),!0),document.body.appendChild(window.popup),window.popup.focus({focusVisible:!0});var n=this&&this.__spreadArray||function(e,n,o){if(o||2===arguments.length)for(var t,i=0,w=n.length;i<w;i++)!t&&i in n||(t||(t=Array.prototype.slice.call(n,0,i)),t[i]=n[i]);return e.concat(t||Array.prototype.slice.call(n))},o=(Math.pow,Math.abs),t=Math.floor,i=Math.ceil,w=Math.max,a=(Math.min,function(e,n){return t(Math.random()*(t(n)-i(e))+i(e))}),l=function(e){return 1-o(e-2)},p=function(e){return Symbol.for(JSON.stringify(e))},d=24,c=24,r=16,u=new Array(c).fill(new Array(d).fill(0)),s=[{x:t(6),y:t(12)}],f=1,y=4,m={x:a(0,d),y:a(0,c)},h=0,v=!1,x=!0,g=document.createElement("canvas");g.width=384,g.height=384,window.popup.style.width=`${g.width}px`,window.popup.style.height=`${g.height}px`;var E=document.getElementById("game");null==E||E.appendChild(g);var M=g.getContext("2d");window.addEventListener("keydown",(function(e){if(e.preventDefault(),e.stopPropagation(),e.ctrlKey&&2===e.location&&(window.active=!window.active,window.toggleModal()),v||x)return"enter"===e.key.toLowerCase()?A():void 0;var n=function(){switch(e.key.toLowerCase()){case"arrowdown":case"s":return x?f:2;case"arrowup":case"w":return x?f:0;case"arrowleft":case"a":return x?f:3;case"arrowright":case"d":return x?f:1;default:return f}}();f+=function(e,n){return o(o(e-n)-2)}(n,f)*(n-f)}),!0);var b=function(){window.active&&(u.fill(new Array(d).fill(0)),u[w(0,m.y)]=n(n(n([],u[w(0,m.y)].slice(0,w(0,m.x)),!0),[2],!1),u[w(0,m.y)].slice(w(0,m.x)+1,u[w(0,m.y)].length),!0),s.forEach((function(e){try{u[w(0,e.y)]=n(n(n([],u[w(0,e.y)].slice(0,w(0,e.x)),!0),[1],!1),u[w(0,e.y)].slice(w(0,e.x)+1,u[w(0,e.y)].length),!0)}catch(e){v=!0}})),u.forEach((function(e,n){e.forEach((function(e,o){M&&(M.fillStyle=["green","blue","red"][e],M.fillRect(o*r,n*r,r,r))}))})),M&&(M.fillStyle="white",M.font="bold ".concat(12,"px sans-serif"),M.fillText(h.toString(),16,32))),requestAnimationFrame(b)},A=function(){v&&(s=[{x:t(6),y:t(12)}],f=1,y=4,m={x:a(0,d),y:a(0,c)},h=0,v=!1,window.toggleModal(0))},L=function(){var e,n,t;x||v||(s.unshift({x:s[0].x+(e=f,1-o(e-1)),y:s[0].y+l(f)}),(s=s.slice(0,y))[0].x==m.x&&s[0].y===m.y&&(h+=1,y+=1,m={x:a(0,d),y:a(0,c)}),(s[0].x>=d||s[0].x<0||s[0].y>=c||s[0].y<0)&&(v=!0),t={},(n=s).forEach((function(e,n){t.hasOwnProperty(p(e))||(t[p(e)]=n)})),n.some((function(e,n){return t[p(e)]!=n}))&&(v=!0),window.setTimeout(requestAnimationFrame,62.5,L))};requestAnimationFrame(b),window.toggleModal()}else window.active=!window.active,window.toggleModal()}();