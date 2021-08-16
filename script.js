function somar() {
var tn1 = window.document.getElementById('n1')
var tn2 = window.document.getElementById('n2')
var n1 = Number(tn1.value)
var n2 = Number(tn2.value)
    if (n1 == "" || n2 == "")  {
        res.innerHTML = ('')
        tn1.value = ""
        tn2.value = ""
        window.alert('Digite os números corretamente')
        
    }
    else {
        r = n1 + n2 
        res.innerHTML = `O resultado da soma entre <strong>${n1}</strong> e <strong>${n2}</strong> é <strong>${r}</strong>`
    }
}
function subtrair() {
    var tn1 = window.document.getElementById('n1')
    var tn2 = window.document.getElementById('n2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
        if (n1 == "" || n2 == "")  {
            window.alert('Digite os números corretamente')
            res.innerHTML = ('')
            tn1.value = ""
            tn2.value = ""
        }
        else {
            r = n1 - n2 
            res.innerHTML = `O resultado da subtração entre <strong>${n1}</strong> e <strong>${n2}</strong> é <strong>${r}</strong>`
        }   
}
function dividir() {
    var tn1 = window.document.getElementById('n1')
    var tn2 = window.document.getElementById('n2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
        if (n1 == "" || n2 == "")  {
            window.alert('Digite os números corretamente')
            res.innerHTML = ('')
            tn1.value = ""
            tn2.value = ""
        }
        else {
            r = n1 / n2 
            res.innerHTML = `O resultado da divisão entre <strong>${n1}</strong> e <strong>${n2}</strong> é <strong>${r}</strong>`
        }
    }
function multiplicar() {
        var tn1 = window.document.getElementById('n1')
        var tn2 = window.document.getElementById('n2')
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
            if (n1 == "" || n2 == "")  {
                window.alert('Digite os números corretamente')
                res.innerHTML = ('')
                tn1.value = ""
                tn2.value = ""
            }
            else {
                r = n1 * n2 
                res.innerHTML = `O resultado da multiplicação entre <strong>${n1}</strong> e <strong>${n2}</strong> é <strong>${r}</strong>`
        }
    }
function raiz() {
        var tn1 = window.document.getElementById('n1')
        var tn2 = window.document.getElementById('n2')
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
            if (n1 == "" || n2 == "")  {
                window.alert('Digite os números corretamente')
                res.innerHTML = ('')
                tn1.value = ""
                tn2.value = ""
            }
            else {
                r = Math.sqrt(n1);
                res.innerHTML = `O resultado da <strong>&#8730;${n1}</strong> é = <strong>${r}</strong>`
        }
    }
function potencia() {
            var tn1 = window.document.getElementById('n1')
            var tn2 = window.document.getElementById('n2')
            var n1 = Number(tn1.value)
            var n2 = Number(tn2.value)
                if (n1 == "" || n2 == "")  {
                    window.alert('Digite os números corretamente')
                    res.innerHTML = ('')
                    tn1.value = ""
                    tn2.value = ""
                }
                else {
                    r = Math.pow(n1,n2);
                    res.innerHTML = `O resultado da potência <strong>${n1}<sup>${n2}</sup></strong> é = <strong>${r}</strong>`
    }
}

function limpar() {
            var tn1 = window.document.getElementById('n1')
            var tn2 = window.document.getElementById('n2')
            tn1.value = ""
            tn2.value = ""
            res.innerHTML = ''
}

