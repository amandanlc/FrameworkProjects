const produtos = [
    { id: 1, categoria: 'limpeza', name: 'Amaciante' },
    { id: 2, categoria: 'limpeza', name: 'Detergente' },
    { id: 3, categoria: 'alimento', name: 'ovo' },
    { id: 4, categoria: 'alimento', name: 'alface' },
]

var idsAlimento = produtos.filter((idsAlimento) => idsAlimento.categoria == "alimento").map((ids) => ids.id);
console.log(idsAlimento);