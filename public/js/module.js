class createHtml {
    constructor(_type, _atr, _atrLink, _parent) {
        this._type = document.createElement(_type); // ex: body, nav, div...
        if (_atr.length != 0) { // ex: src, id, class...
            this._atr = this._type.setAttribute(_atr, _atrLink)
        }
        this._parent = _parent.appendChild(this._type)
    }
    insertHtml(_x) {
        this._type.innerHTML = _x
    }
    addAtr(_x, _y) {
        this._type.setAttribute(_x, _y)
    }
    delChild() {
        this._type.remove
    }
}

let header = new createHtml("header", "class", "bg-black text-light text-center h-auto", document.body)
let main = new createHtml("main", "", "", document.body)
let footer = new createHtml("footer", "", "", document.body)

// Header
let nav = new createHtml("nav", "class", "d-lg-flex justify-content-between align-items-center", header._type)
let imgLogo = new createHtml("img", "src", "public/img/logo-horizontal-fond-noir-couleur.png", nav._type)
// Menu avec logo
let divH = new createHtml("div", "class", "d-md-flex justify-content-around fs-6 pb-2 pb-lg-0", nav._type)
for (let i = 0; i < 6; i++) {
    let div = new createHtml("div", "class", "pe-3", divH._type)
    let img = new createHtml("img", "class", "imgH", div._type)
    let p = new createHtml("p", "class", "pH m-0", div._type)
}

let imgH = document.querySelectorAll(".imgH")
let pH = document.querySelectorAll(".pH")

console.log(imgH)

// Div minis logos
class Logo {
    constructor(_source, _titre) {
        this._source = _source;
        this._titre = _titre;
    }
}
let logo1 = new Logo("public/img/home-icon.png", "HOME")
let logo2 = new Logo("public/img/packages-icon.png", "PACKAGES")
let logo3 = new Logo("public/img/outils-icon", "OUTILS")
let logo4 = new Logo("public/img/projets-icon.png", "PROJETS")
let logo5 = new Logo("public/img/temoignages-icon.png", "TEMOIGNAGES")
let logo6 = new Logo("public/img/contact-icon.png", "CONTACT")


// Main
for (let i = 0; i < 7; i++) {
    let section = new createHtml("section", "id", `sect-${i+1}`, main._type)
}

// Footer
let div1 = new createHtml("div", "", "", footer._type)
let div2 = new createHtml("div", "", "", footer._type)

for (let i = 0; i < 3; i++) {
    let div = new createHtml("div", "", "", div1._type)
}