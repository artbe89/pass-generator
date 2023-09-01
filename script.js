let lengthh = document.getElementById("length")
let lower = document.getElementById("male")
let upper = document.getElementById("duze")
let number = document.getElementById("cyfry")
let special = document.getElementById("specjalne")
let display = document.getElementById("haslo")
let timeoutId

const checkbox = () => {
    if (number.checked == false) {
        lower.checked = true
        lower.setAttribute("disabled", "true")
    }
    if (number.checked == true) {
        lower.removeAttribute("disabled")
    }
    if (lower.checked == false) {
        upper.checked = false
        upper.setAttribute("disabled", "true")
        number.checked = true
        number.setAttribute("disabled", "true")
    }
    if (lower.checked == true) {
        upper.removeAttribute("disabled")
        number.removeAttribute("disabled")
    }
}
checkbox()

window.onload = function() {
    lengthh.focus();
}

let btn = document.getElementById("custom_btn")
lengthh.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        btn.click()
    }
})


const copyy = () => {
    navigator.clipboard.writeText(display.innerHTML)
}

const custom = () => {
    let l = lengthh.value
    if (l < 4 || l > 199) {
        display.innerHTML = "Wprowadź poprawną długość!"
        lengthh.value = ""
        timeoutId = setTimeout(() => { display.innerHTML = "&nbsp;" }, 2500)
    }
    else {
        clearTimeout(timeoutId)
        let pass = new Password(l)
        pass.customPassword()
    }
}


const slabe = () => {
    let pass = new Password(Math.floor((Math.random() * 7) + 5))
    pass.autoGeneratePassword()
}
const silne = () => {
    let pass = new Password(Math.floor((Math.random() * 15) + 10))
    pass.autoGeneratePassword()
}
const supersilne = () => {
    let pass = new Password(Math.floor((Math.random() * 20) + 30))
    pass.autoGeneratePassword()
}
const funny = () => {
    let pass = new Password(0)
    pass.generateFunnyPassword()
}


class Password {
    constructor(l) {
        this.lenth = l
    }
    generatePassword(low, up, num, sp) {
        let a = ""
        let SpecialCharacters = ['+', '-', '*', '!', '=', '@', '#', '$', '&', '?', '_']
        for (let i = 0; i < sp; i++) {
            a = a + SpecialCharacters[Math.floor(Math.random() * SpecialCharacters.length)]   
        }
        for (let i = 0; i < num; i++) {
            a = a + [Math.floor(Math.random() * 10)]   
        }
        for (let i = 0; i < up; i++) {
            a = a + String.fromCharCode(Math.floor((Math.random() * 26) + 65))    
        }
        for (let i = 0; i < low; i++) {
            a = a + String.fromCharCode(Math.floor((Math.random() * 26) + 97))    
        }
        
        let finalPassword = a.split('').sort(function() { return 0.5 - Math.random() }).join('')   
        display.innerHTML = finalPassword
    }
    customPassword() {
        let low, up, num, sp, l = this.lenth

        
        sp = Math.ceil(Math.random() * (l / 6))
        sp = (special.checked == true) ? (sp) : 0;
        l = l - sp

        
        low = Math.ceil((Math.random() * (5 * l / 8)) + (l / 4))
        low = (lower.checked == true) ? (low) : 0;
        l = l - low

        
        up = Math.ceil(Math.random() * (l / 2))
        up = (upper.checked == true) ? (up) : 0;
        l = l - up


        num = (number.checked == true) ? (l) : 0;
        l = l - num

        if (l != 0) {
            low += l
        }

        this.generatePassword(low, up, num, sp)
    }
    autoGeneratePassword() {
        let low, up, num, sp, l = this.lenth
        sp = Math.ceil(Math.random() * (l / 6))
        l = l - sp
        low = Math.ceil((Math.random() * (5 * l / 8)) + (l / 4))
        l = l - low
        up = Math.ceil(Math.random() * (l / 2))
        l = l - up
        num = (number.checked == true) ? (l) : 0;
        l = l - num
        if (l != 0) {
            low += l
        }
        this.generatePassword(low, up, num, sp)
    }
    generateFunnyPassword() {
        let funny = [
            "INeedAPassword",
            "TaXiDriVer",
            "ThisIsStrong",
            "FiAtPandA",
            "Messi1987",
            "BestPasswordEver",
            "Polska-Moldawia-3-2",
            "100%Unsafe",
            "FunnyPasswordHere",
            "Legiunia(L)",
            "SeriousSam",
            "Lollipop",
            "OpelVetr@",
            "DramaQueen",
            "EnjoySomePrivacy",
            "NoMorePassword",
            "TfojaStara",
            "JustTypeIt",
            "RobertoLewanDowski",
            "CitoeNC4",
            "CristianoCR7",
            "ZenekMartyniuk",
            "ColaNotPespi",
            "Diablo007",
            "NokiaConnectingPeople",
            "GoodPasswordsTaken",
            "DragonMother",
            "UsingThisPasswordIsDangerous",
            "Don'tUseMyPassword"
        ]
        display.innerHTML = funny[Math.floor(Math.random() * funny.length)]
    }
}