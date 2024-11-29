var produtos = [
    {nome: "colher", preco: 3.5},
    {nome: "cama", preco: 1000.0},
    {nome: "ventilador", preco: 420.5}
]

console.log(produtos.map((desconto10) => desconto10.preco * 0.1));