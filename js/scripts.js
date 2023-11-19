/*====================== LOADING ============================ */
var i = setInterval(function () {
    clearInterval(i);
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inline";
}, 1000);
    document.getElementById("loading").style.display = "inline";
    document.getElementById("conteudo").style.display = "none";


/*====================== BACKGROUND ============================ */
let bubleArr = []; document.addEventListener("mousemove", (e) => { let bubles = document.createElement("bubles"); let x = e.pageX; let y = e.pageY; let size = Math.random() * 6; bubles.style.width = 3 + size + "px"; bubles.style.height = 3 + size + "px"; bubles.style.left = x - size / 2 + "px"; bubles.style.top = y - size / 2 + "px"; document.body.appendChild(bubles); setTimeout(function () { bubles.remove();  }, 100); }); 