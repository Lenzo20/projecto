let num = document.getElementById('n1')
let tab = document.getElementById('tbt')
let res = document.getElementById ('res')
let f = document.getElementById ('fim-do-mundo')
let n = []
let x = 0

function gerar() {
    if (num.value.length == 0) {
        alert ('Digite um número!')
    } else {
        x = parseInt(num.value)
        let item = document.createElement('option')
        item.text = `O número ${x} foi adicionado`
        tab.appendChild(item)
        res.innerHTML = ""
    }
    n.push(x)
}

function finish() {
    //falar o total de numerro cadrastados
    if (x.length == 1) {
    res.innerHTML = `Você adicionou ${n.length} número <br>`

    } else {
        res.innerHTML = `Você adicionou ${n.length} números <br>`

    }


    //falar o maior numero
    let maior = Math.max.apply(Math,n)
    res.innerHTML += `O maior número é: ${maior} <br>`


    //falar o menor numero
    let menor = Math.min.apply(Math,n)
    res.innerHTML += `O menor número é: ${menor} <br>`


    //falar a soma de tudo
    let sum = 0
    for (let c = 0; c < n.length; c++) {
        sum += n[c]
    }
    res.innerHTML += `a soma de tudo é ${sum}`
}

function adeus() {
    f.innerHTML = `Obrigado e <br> volte sempre`
    f.innerHTML += `❤️`
    

    f.classList.add("bye")
}







//a media de tudo