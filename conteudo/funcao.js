function somar () {
    var n1 = window.document.getElementById('numero1')
    var n2 = window.document.getElementById('numero2')
    var res = window.document.getElementById('res')
    var n1 = Number (n1.value)
    var n2 = Number (n2.value)
    var s = n1 + n2

    res.innerHTML = `A soma de ${n1} + ${n2} resulta em ${s}`
}

function somarvezes () {
    var n1_v = window.document.getElementById('n1v')
    var n2_v = window.document.getElementById('n2v')
    var res_v = window.document.getElementById('res_v')
    var n1_v = Number (n1_v.value)
    var n2_v = Number (n2_v.value)
    var s = n1_v * n2_v

    res_v.innerHTML = `A soma de ${n1_v} vezes ${n2_v} resulta em ${s}`
}

function somardiv () {  //DIVISAO
    var n1_d = window.document.getElementById('n1div')
    var n2_d = window.document.getElementById('n2div')
    var res_div = window.document.getElementById('res_div')
    var n1_div = Number (n1_d.value)
    var n2_div = Number (n2_d.value)
    var s = n1_div / n2_div

    res_div.innerHTML = `A soma de ${n1_div} vezes ${n2_div} resulta em ${s}`
}
