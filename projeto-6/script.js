function tabuada (){
 
  let nume = document.getElementById('num').value
  
  let tab = document.getElementById('tab')
   
  if(nume.length == 0){
    
    alert('[ERRO] verifique os dados')
    
  }else{
    let n = Number(num.value)
    
    tab.innerHTML = ''
    
    let c = 1
    while(c <= 10){
      let item = document.createElement('option')
      item.text = `${n}*${c}=${n*c}`
      
      item.value = `tab${c}`
      
      tab.appendChild(item)
      
      c++
    }
    
  }
  
}