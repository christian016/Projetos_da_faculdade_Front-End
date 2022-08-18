function relatorio(){
	class Alunos {
		constructor(nr, _nota){
			this.nr = nr;
			this._nota = _nota;
        }
		get nota(){
			return this._nota;
		}
	}
	let alunos = [];
	for(let i = 1; i <= 20; i++){
		let al = new Alunos(i,Math.floor(Math.random()*100));
		alunos.push(al);
	}
	function situacao(nota) {
		return nota >= 50 ?"APROVADO" : "REPROVADO"
	}
	let ex1 = document.querySelector("#resq3");
	let aprovados = 0;
	for(let i = 0; i< alunos.length; i++) {
		ex1.innerHTML = ex1.innerHTML + (`Aluno Nº ${alunos[i].nr} - Nota ${alunos[i].nota} ${situacao(alunos[i].nota)}` + "<br>")
		if(situacao(alunos[i].nota) =="APROVADO"){
			aprovados++;
		}
	}
    let reprov = Math.floor( alunos.length- aprovados)
    let aprov = Math.floor( alunos.length - reprov)
	ex1.innerHTML = ex1.innerHTML + (`APROVADOS:  ${aprov} ${Math.floor((aprovados/alunos.length)*100)}% | REPROVADOS: ${reprov} ${Math.floor(((alunos.length-aprovados)/alunos.length)*100)}%` + "<br>")
}