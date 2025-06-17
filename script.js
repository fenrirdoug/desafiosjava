function notas() {
  let resultado = window.document.getElementById("resultado");
  let nome = window.prompt(`Qual nome do aluno?`);
  let media;
  if (nome === "" || nome === null) {
    window.alert(`por favor preencher dados corretamente`);
    return;
  } else {
    let nota01 = window.prompt(`Coloque a primeira nota do/da ${nome}:`);
    let nota02 = window.prompt(`Coloque a segunda nota do/da ${nome}:`);
    let x = Number(nota01);
    let y = Number(nota02);
    media = (x + y) / 2;
  }

  if (media <= 3) {
    resultado.innerHTML = `<p id="vermelho"> Que pena ${nome},Sua media é ${media}.Voce está reprovado</p>`;
  } else if (media <= 6) {
    resultado.innerHTML = `<p id="amarelo"> Você ${nome} ainda tem chance,Sua media é ${media}.Voce está de recuperação</p>`;
  } else {
    resultado.innerHTML = `<p id="verde"> Parabens ${nome},Sua media é ${media}.Voce está aprovado</p>`;
  }
}
