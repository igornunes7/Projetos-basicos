let valorProduto = Number(prompt ("Diga o valor do produto: "))

if (valorProduto >= 20) {
    document.getElementById('resultado').innerHTML = 'Aprovado'
} else {
    document.getElementById('resultado').innerHTML = 'Negado'
}
