function setTheme(t){t?(document.documentElement.setAttribute("data-theme","dark"),document.querySelector('meta[name="theme-color"]').setAttribute("content","#000000")):(document.documentElement.setAttribute("data-theme","light"),document.querySelector('meta[name="theme-color"]').setAttribute("content","#ffffff"))}window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function(t){setTheme(t.matches)}),setTheme(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches);var offsetStart=0,offsetEnd=0,sunmoon=null;function getRandomArbitrary(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}function makesunmoon(){(sunmoon=document.createElement("div")).classList.add("sunmoon"),sunmoon.style.left=(0==getRandomArbitrary(0,1)?getRandomArbitrary(10,20):getRandomArbitrary(80,90))+"%",sunmoon.style.top=(0==getRandomArbitrary(0,1)?getRandomArbitrary(10,30):getRandomArbitrary(60,70))+"%";for(var t=0;t<8;t++)sunmoon.append(document.createElement("div"));document.body.appendChild(sunmoon)}function makeStar(){var t=document.createElement("div");t.classList.add("star"),t.style.left=getRandomArbitrary(2,98)+"%",t.style.top=getRandomArbitrary(2,80)+"%";var e=getRandomArbitrary(2,6)+"px";t.style.width=e,t.style.height=e,5==getRandomArbitrary(0,5)&&t.classList.add("planet"),document.body.appendChild(t)}function makeMountain(){var t=document.createElement("div");t.classList.add("mountain");var e=getRandomArbitrary(60,360);t.style.left=getRandomArbitrary(5,95)+"%",t.style.width=e+"px",t.style.height=e+"px",t.append(document.createElement("div")),t.append(document.createElement("div"));var n=Math.sqrt(Math.pow(e,2)/2);t.style.marginLeft=-n+"px",t.style.marginBottom=-n/2+"px",document.body.appendChild(t)}function maketree(){var t=document.createElement("div");t.classList.add("tree"),t.style.left=getRandomArbitrary(5,95)+"%";var e=getRandomArbitrary(40,160);t.style.width=e/1.8+"px",t.style.height=e+"px",t.style.marginLeft=-e/1.8/2+"px",t.append(document.createElement("div"));for(var n=getRandomArbitrary(2,4),a=60/n,o=0;o<n;o++){var r=document.createElement("div");r.classList.add("branch");var d=getRandomArbitrary(10,40);r.style.width=d+"%";var m=getRandomArbitrary(5,a-5);r.style.top=10+o*a+m+"%",o%2&&(r.style.marginLeft=-d+"%"),t.append(r)}document.body.appendChild(t)}window.addEventListener("scroll",function(){document.documentElement.style.setProperty("--scroll",(window.scrollY-offsetStart)/(document.body.offsetHeight-offsetStart-offsetEnd-window.innerHeight)),sunmoon&&(window.innerHeight+Math.round(window.scrollY)>=document.body.offsetHeight?sunmoon.classList.add("on"):sunmoon.classList.remove("on"))},!1),makesunmoon();for(var i=0;i<60;i++)makeStar(),makeMountain(),maketree();