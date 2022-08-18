function calcularmm(){
    let txtvmin = document.getElementById('txtmin')
    let txtvmax = document.getElementById('txtmax')
    let vmin = Number(txtvmin.value)
    let vmax = Number(txtvmax.value)
    var res= document.getElementById('resultadoq1')
    var respf =[]     
    if(vmin > vmax)
    {         
        window.alert(`[ERRO] o valor minim inserido é maior que o maximo`)
    } else{
        var r=vmin
        while(r < vmax){                 
            if (r%2 ==0 && r %3==0){
                if (r!=vmin && r !=vmax){
                    respf.push(r);                     
                }
            }            
            r++
        }
        alert(`Os numeros que são multiplo de 2 e 3 no intervalo de ${vmin} e ${vmax} são ao total ${respf.length} =  ${respf}.`)
    }    
}  