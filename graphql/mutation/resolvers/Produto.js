module.exports = {
  precoComDesconto (produto) {
    return produto.preco * (1 - (produto.desconto || 0))
  },
}
