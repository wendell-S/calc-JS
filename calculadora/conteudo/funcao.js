function somar () {
    var n1 = window.document.getElementById('numero1')
    var n2 = window.document.getElementById('numero2')
    var res = window.document.getElementById('resposta')
    var n1 = Number (n1.value)
    var n2 = Number (n2.value)
    var s = n1 + n2

    res.innerHTML = `A soma de ${n1} + ${n2} resulta em ${s}`
}
