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
