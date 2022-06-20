class Html {
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

let header = new Html ("header", "", "", document.body)
let main = new Html ("main", "", "", document.body)
let footer = new Html ("footer", "", "", document.body)