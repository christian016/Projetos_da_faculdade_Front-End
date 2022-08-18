function calcularfat(){
    let valortx= document.getElementById('vfat')
    let valor =Number(valortx.value) 
    let res = document.getElementById('resq2')
    let resp= []
    let i= valor
    const d = new Date();
    let ms = d.getMilliseconds();
    while(i!=0){
        resp.push(i)
        i--
    }
    let respf= resp.reduce(function(total, num){
    total = total * num;
    return total;
    });
    const d1 = new Date();
    let ms1 = d1.getMilliseconds();
    let msFinal= ms1 - ms    
    console.log(msFinal );    
    res.innerHTML= ` ${valor}! = ${respf} o tempo que essa operação levou para ser executada é de = (${msFinal}) milisegundos`
}