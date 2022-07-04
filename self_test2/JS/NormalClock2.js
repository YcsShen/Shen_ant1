let OClock = document.querySelector("#clock")
        let Oh = document.querySelector("#h")
        let Om = document.querySelector("#m")
        let Os = document.querySelector("#s")

        for(let i = 1; i < 9; i++){
            OC = document.createElement("div")
            OC.className = "pot"
            if(i<3){
                OC.style.transform = "rotate("+ 30 * i +"deg)"
            }else if(i<5){
                OC.style.transform = "rotate("+ 30 *(i+1) +"deg)"
            }else if(i<7){
                OC.style.transform = "rotate("+ 30 * (i+2) +"deg)"
            }else{
                OC.style.transform = "rotate("+ 30 * (i+3) +"deg)"
            }
            OClock.appendChild(OC)
        }

        let run = ()=>{
            let ODate = new Date()
            let OH = ODate.getHours()
            let OM = ODate.getMinutes()
            let OS = ODate.getSeconds()

            if(OH > 12){
                Oh.style.transform = "translateY(-100%) rotate("+ 30 * (OH % 12) +"deg)"
            }else{
                Oh.style.transform = "translateY(-100%) rotate("+ 30 * OH +"deg)"
            }
            Om.style.transform = "translateY(-100%) rotate("+ 6 * OM +"deg)"
            Os.style.transform = "translateY(-100%) rotate("+ 6 * OS +"deg)"
        }
        run()
        setInterval(run,1000)