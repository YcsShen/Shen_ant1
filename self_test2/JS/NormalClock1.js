let Oclock = document.querySelector("#clock");
let Ohour = document.querySelector("#hour");
let Omin = document.querySelector("#min");
let Osec = document.querySelector("#sec");

for (let i = 1; i < 9; i++) {
    oH = document.createElement("div");
    oH.className = "a";
    if (i < 3) {
        oH.style.transform = 'rotate(' + 30 * i + 'deg)';
    } else if (i < 5) {
        oH.style.transform = 'rotate(' + 30 * (i + 1) + 'deg)';
    } else if (i < 7) {
        oH.style.transform = 'rotate(' + 30 * (i + 2) + 'deg)';
    } else {
        oH.style.transform = 'rotate(' + 30 * (i + 3) + 'deg)';
    }
    Oclock.appendChild(oH);
}

let run = () => {
    let oDate = new Date();
    let H = oDate.getHours();
    let M = oDate.getMinutes();
    let S = oDate.getSeconds();

    if (H > 12) {
        Ohour.style.transform = "translateY(-100%) rotate(" + 30 * (H % 12) + "deg)";
    } else {
        Ohour.style.transform = "translateY(-100%) rotate(" + 30 * H + "deg)";
    }
    Omin.style.transform = "translateY(-100%) rotate(" + 6 * M + "deg)";
    Osec.style.transform = "translateY(-100%) rotate(" + 6 * S + "deg)";
}
run();
setInterval(run, 1000);