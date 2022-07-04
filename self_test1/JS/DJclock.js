let oClock = document.querySelector("#clock");
        let Ohour = document.querySelector("#h");
        let Omin = document.querySelector("#m");
        let Osec = document.querySelector("#s");

        for (let i = 1; i < 9; i++) {
            OH = document.createElement("div");
            OH.className = "a";
            if (i < 3) {
                OH.style.transform = 'rotate(' + 30 * i + 'deg)';
            } else if (i < 5) {
                OH.style.transform = 'rotate(' + 30 * (i + 1) + 'deg)';
            } else if (i < 7) {
                OH.style.transform = 'rotate(' + 30 * (i + 2) + 'deg)';
            } else {
                OH.style.transform = 'rotate(' + 30 * (i + 3) + 'deg)';
            }
            oClock.appendChild(OH);
        }

        let run = () => {
            let ODate = new Date();
            let h = ODate.getHours();
            let m = ODate.getMinutes();
            let s = ODate.getSeconds();

            if (h > 12) {
                Ohour.style.transform = "translateY(-100%) rotate(" + 30 * (h % 12) + "deg)";
            } else {
                Ohour.style.transform = "translateY(-100%) rotate(" + 30 * h + "deg)";
            }
            Omin.style.transform = "translateY(-100%) rotate(" + 6 * m + "deg)";
            Osec.style.transform = "translateY(-100%) rotate(" + 6 * s + "deg)";
        }
        run();
        setInterval(run, 1000);