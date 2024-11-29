const funcionários = [{
    Nome: 'Han Solo',
    Departamento: 'Financeiro',
    Salario: 5000
  }, {
    Nome: 'Luke',
    Departamento: 'Financeiro',
    Salario: 15000
  }, {
    Nome: 'Ben',
    Departamento: 'Marketing',
    Salario: 2000
  }, {
    Nome: 'Leia',
    Departamento: 'Marketing',
    Salario: 10000
  }, {
    Nome: 'Rey',
    Departamento: 'Financeiro',
    Salario: 2500
  }]
  

var filtro = funcionários.filter((filtroD) => filtroD.Departamento == "Financeiro");
var aumento = filtro.map((soma, aumento50) => soma + aumento50.Salario * 0.5 + aumento50.Salario);
let total = 0;
aumento.forEach(funcionário => {
  total += funcionário.Salario;
});



console.log("Total soma: " + total);