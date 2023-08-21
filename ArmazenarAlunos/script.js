// Array para armazenar os alunos e suas notas
var alunos = [];

// Função para adicionar um novo aluno com suas notas
function adicionarAluno(nome, matricula, notas) {
  var aluno = {
    nome: nome,
    matricula: matricula,
    notas: notas
  };
  alunos.push(aluno);
}

// Função para calcular a média das notas de um aluno
function calcularMedia(notas) {
  var soma = 0;
  for (var i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

// Função para exibir informações do aluno e média ao clicar no botão
document.getElementById('mostrarAluno').addEventListener('click', function() {
  var infoAlunoDiv = document.getElementById('infoAluno');
  var alunoIndex = Math.floor(Math.random() * alunos.length); // Escolhe um aluno aleatório
  
  var alunoSelecionado = alunos[alunoIndex];
  var nome = alunoSelecionado.nome;
  var matricula = alunoSelecionado.matricula;
  var notas = alunoSelecionado.notas;
  var media = calcularMedia(notas).toFixed(2);

  var infoText = `
    <p><strong>Nome do Aluno:</strong> ${nome}</p>
    <p><strong>Número de Matrícula:</strong> ${matricula}</p>
    <p><strong>Notas:</strong> ${notas.join(', ')}</p>
    <p><strong>Média:</strong> ${media}</p>
  `;
  
  infoAlunoDiv.innerHTML = infoText;
});

// Exemplo de adição de alunos (você pode adicionar mais)
adicionarAluno('João', '2021001', [8, 9, 7]);
adicionarAluno('Maria', '2021002', [7, 6, 8]);
