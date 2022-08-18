function calcular(){

	let qtd = Number(document.getElementById('qtd').value);
	let minimo = Number(document.getElementById('min').value);
	let maximo = Number(document.getElementById('max').value);
	let res = document.getElementById('resq4')
	let arr = []
	let qtdd = qtd -1
	let min = minimo + 1
	
	
	for(let i = 1; i <= qtd; i++){
		let al =(i,Math.floor(Math.random()*(maximo - minimo)+ minimo));
		arr.push(al);
	}

	arr.sort();
	console.log(arr);
	res.innerText= ` ${arr}`
	
}