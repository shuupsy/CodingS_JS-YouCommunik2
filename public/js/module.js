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
let footer = new createHtml("footer", "class", "text-light container-fluid pt-5 px-5 text-center text-lg-start", document.body)

// HEADER
let nav = new createHtml("nav", "class", "d-lg-flex justify-content-between align-items-center", header._type)

let imgLogo = new createHtml("img", "src", "public/img/logo-horizontal-fond-noir-couleur.png", nav._type)
imgLogo.addAtr("class", "pt-2 pt-lg-0 ps-2 mb-4 m-lg-0")

// Menu avec logo
let divH = new createHtml("div", "class", "d-md-flex justify-content-around fs-6 pb-2 pb-lg-0", nav._type)

// Div minis logos
class Logo {
    constructor(_source, _titre) {
        this._source = _source;
        this._titre = _titre;
    }
}
let logo1 = new Logo("public/img/home-icon.png", "HOME")
let logo2 = new Logo("public/img/packages-icon.png", "PACKAGES")
let logo3 = new Logo("public/img/outils-icon.png", "OUTILS")
let logo4 = new Logo("public/img/projets-icon.png", "PROJETS")
let logo5 = new Logo("public/img/temoignages-icon.png", "TEMOIGNAGES")
let logo6 = new Logo("public/img/contact-icon.png", "CONTACT")

let logos = [logo1, logo2, logo3, logo4, logo5, logo6]

for (let i = 0; i < 6; i++) {
    let div = new createHtml("div", "class", "pe-3", divH._type)
    let img = new createHtml("img", "class", "imgH", div._type)
    let p = new createHtml("p", "class", "pH m-0", div._type)
}

let imgH = document.querySelectorAll(".imgH") // Toutes les images de NAV
let pH = document.querySelectorAll(".pH") // Tous les titres de NAV

imgH.forEach((i, index) => {
    i.setAttribute("src", `${logos[index]._source}`)
})
pH.forEach((p, index) => {
    p.innerHTML = `${logos[index]._titre}`
})


// Footer
footer.addAtr("style", "background-color : #393A3B")
let ftr1 = new createHtml("div", "class", "row pb-5", footer._type) // Footer1
for (let i = 0; i < 3; i++) {
    let div = new createHtml("div", "class", "partie col-lg-4", ftr1._type)
    let h4 = new createHtml("h4", "", "", div._type)
    let divF1 = new createHtml("div", "class", "d-flex justify-content-center justify-content-lg-start mb-4 mb-lg-0", div._type)
    let img1F = new createHtml("img", "class", "imgF pe-1", divF1._type)
    let img2F = new createHtml("img", "class", "imgF pe-1", divF1._type)
    let img3F = new createHtml("img", "class", "imgF ", divF1._type)
}
let imgF = document.querySelectorAll(".imgF")
imgF.forEach(i => { // Changer la taille de toutes les images du FOOTER
    i.style.width = "60px"
})

class partFooter {
    constructor(_titre, _img1, _img2, _img3) {
        this._titre = _titre;
        this._img1 = _img1;
        this._img2 = _img2;
        this._img3 = _img3;
    }
}
let ftr1A = new partFooter("Packs", "public/img/icon-eclosion.png", "public/img/icon-evolution.png", "public/img/icon-envole.png")
let ftr1B = new partFooter("Outils", "public/img/identite-graphique.png", "public/img/reseaux-sociaux.png", "public/img/print.png")
let ftr1C = new partFooter("Social media", "public/img/social-f.png", "public/img/google-plus.png", "")
let partsFooter = [ftr1A, ftr1B, ftr1C]

let partie = document.querySelectorAll(".partie")
let d = 0
partie.forEach((p, index) => {
    let h4 = p.firstChild
    h4.innerHTML = `${partsFooter[index]._titre}`

    let divF = p.lastChild.children
    divF[0].setAttribute("src", `${partsFooter[d]._img1}`)
    divF[1].setAttribute("src", `${partsFooter[d]._img2}`)
    divF[2].setAttribute("src", `${partsFooter[d]._img3}`)
    d++
})

// Footer 2 - CGV
let ftr2 = new createHtml("div", "class", "d-flex justify-content-center justify-content-lg-end pb-3", footer._type)
let pF2 = new createHtml("p", "", "", ftr2._type)
pF2.insertHtml("C.G.V.")

// MAIN
for (let i = 0; i < 7; i++) {
    let sections = new createHtml("section", "id", `sect-${i+1}`, main._type)
}
// Section 1 : bannière
let sect1 = document.querySelector("#sect-1")
sect1.setAttribute("class", "container-fluid text-light text-center text-lg-start align-items-center justify-content-center")
sect1.style.backgroundColor = "#334D5C"
sect1.style.height = "50vh"

let div0 = new createHtml("div", "class", "row align-items-center justify-content-center", sect1)
div0.addAtr("style", "height: 50vh")

let div1_S1 = new createHtml("div", "class", "col-lg-4 text-center text-lg-end", div0._type)
let div2_S1 = new createHtml("div", "class", "col-lg-8 text-center text-lg-start", div0._type)

let img_S1 = new createHtml("img", "src", "public/img/packages.png", div1_S1._type)

let h1_S1 = new createHtml("h1", "class", "fw-normal", div2_S1._type)
h1_S1.insertHtml("A chaque étape son pack")

let h2_S1 = new createHtml("h2", "class", "fw-normal", div2_S1._type)
h2_S1.insertHtml("naître, grandir et prospérer.")

// Section 3,5,7
class Links {
    constructor(_links, _titre) {
        this._links = _links;
        this._titre = _titre;
    }
}
let eclosion = new Links(["public/img/Logo-logo.png", "public/img/icon-charte-graphic.png", "public/img/site-single-page.png", "public/img/carte-visite.png", ""], ["Logo", "Charte graphique", "Site single page", "Carte de visite", ""])
let evolution = new Links(["public/img/Logo-logo.png", "public/img/icon-charte-graphic.png", "public/img/site-vitrine.png", "public/img/reseaux-sociaux.png", "public/img/carte-visite.png"], ["Logo", "Charte graphique", "Site vitrine", "Réseaux sociaux", "Carte de visite"])
let envol = new Links(["public/img/icon-analyse-flux-web.png", "public/img/icon-campagne-facebook.png", "public/img/icon-campagne-facebook.png", "public/img/icon-campagne-e-mailing.png", ""], ["Analyse du flux web", "Campagne Facebook", "Campagne Adwords", "Campagne e-mailing", ""])

let link = [eclosion, evolution, envol]
let sectionsMain = document.querySelector("main").children // Toutes les sections de MAIN

for (i = 2, a=0; i < 8; i += 2, a++) {
    // Pour chaque section (3,5,7)
    sectionsMain[i].setAttribute("class", "text-center d-flex flex-wrap h-auto justify-content-evenly pt-2")
    sectionsMain[i].style.backgroundColor = "#EAE3D6"
    sectionsMain[i].style.height = "25vh"
    for (d = 0; d < 4; d++) {
        // Créer 5 div par section
        let div = new createHtml("div", "", "", sectionsMain[i])
        let imgL = new createHtml("img", "style", "width: 85px", div._type)
        imgL.addAtr("src", `${link[a]._links[d]}`)
        let p = new createHtml("p", "class", "px-5 px-md-0", div._type)
        p.insertHtml(`${link[a]._titre[d]}`)
    }
}

// Section 2, 4, 6
class About {
    constructor(_titre, _img, _text1, _text2) {
        this._titre = _titre;
        this._img = _img;
        this._text1 = _text1;
        this._text2 = _text2;
    }
}
let section2 = new About("Eclosion", "public/img/icon-eclosion.png", "Le pack Eclosion est parfait pour le début d'une activité.", "Il comprend la création de votre identité graphique, incluant votre logo et un support de prospection pour aller à la rencontre vos futurs clients, ainsi qu'un site internet single page pour avoir uneprésence en ligne.")
let section4 = new About("Evolution", "public/img/icon-evolution.png", "Le pack Evolution vous propose une identité visuelle complète, comprenant la création de votre logo, de la charte graphique et de votre carte de visite.", "Il intègre également le développement d'un site vitrine afin d'informer 24/7, d'être contacté, d'analyser le flux de vos visites, ... et de faire un lien vers vos réseaux sociaux.")
let section6 = new About("Envol", "public/img/icon-envole.png", "Le pack Envol est destiné à accroître votre visibilité, clientèle et notoriété, tout en diminuant vos coûts et en garantissant le meilleur retour sur investissement.", "Il comporte un servie d'analyse de votre cible et des flux de vote trafic internet, afin d'utiliser les paramètres les plus adéquats pour la diffusion de vos campagnes.")
let about = [section2, section4, section6]



let s = 0
for (i = 1; i < 8; i += 2) {
    sectionsMain[i].setAttribute("class", "my-5")
    let div0 = new createHtml("div", "class", "d-flex justify-content-center pb-4", sectionsMain[i])

    let h3 = new createHtml("h3", "", "", div0._type)
    h3.insertHtml(about[s]._titre)
    h3.addAtr("style", "background-color : #334D5C;  color: white; font-size: 3rem; padding: 0 40px; margin-bottom : 20px")

    let div = new createHtml("div", "class", "row", sectionsMain[i])

    let div1 = new createHtml("div", "class", "col-lg-4 d-flex justify-content-evenly", div._type)
    let img = new createHtml("img", "src", `${about[s]._img}`, div1._type)
    img.addAtr("style", "width: 200px")

    let div2 = new createHtml("div", "class", "col-lg-8 px-3", div._type)
    let p1 = new createHtml("p", "", "", div2._type)
    p1.insertHtml(`${about[s]._text1}`)
    let p2 = new createHtml("p", "", "", div2._type)
    p2.insertHtml(`${about[s]._text2}`)

    s++
}