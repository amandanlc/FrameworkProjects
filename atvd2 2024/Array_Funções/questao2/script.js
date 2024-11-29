function Endereco(){
    var endereco = {
        rua: "Itajaúba",
        numero: 230,
        bairro: "Floresta",
        cidade: "Belo Horizonte",
        uf: "MG"
        };

      document.write(`<p>Você mora na rua ${endereco.rua},
        Número: ${endereco.numero}, 
        Bairro: ${endereco.bairro},
        Cidade: ${endereco.cidade},
        UF: ${endereco.uf}</p>`);
}
