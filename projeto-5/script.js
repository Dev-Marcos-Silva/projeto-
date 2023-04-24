function Verificar (){
  let num1 = document.getElementById('n1')
  let num2 = document.getElementById('n2')
  let num3 = document.getElementById('n3')
  let res = document.getElementById('res')
  
  if(num1.value.length == 0 || num2.value.length == 0 || num3.value.length == 0){
    alert('[ERRO] VERIFIQUE OS DADOS!!!')
  }else{
    
    res.innerHTML = 'Contando'
    
    let i = Number(num1.value)
    let p = Number(num2.value)
    let f = Number(num3.value)
    
    if(i < f){
      for(let c = i ;c <= f ;c += p){
        
        res.innerHTML += ` ${c} ️\u{1F449}`
      }
    }else{
      for(let c = i ;c >= f ;c -= p){
        
        res.innerHTML += ` ${c} \u{1F449} `
        
      }
      
    }
    
    res.innerHTML += ` \u{1F4A3} `
    
  }
}