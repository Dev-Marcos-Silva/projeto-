function verificar (){
  
  let ano = new Date().getFullYear()

  let res = document.querySelector('div#res')
  
  let fano = document.getElementById('fano').value
  
  let img = document.createElement('img')
  img.setAttribute('id','foto')
  
  
  
  if(fano.length == 0 || fano > ano){
    alert(`[ERRO] verifique os dados e tente novamente !`)
  }else{
    let fsex = document.getElementsByName('sex')
    
    let idade = ano - Number(fano)
    
    let genero = ''
    
    if(fsex[0].checked){
      genero = 'Homem'
      
      if(idade >= 0 && idade <= 10){
        //criança 
        img.setAttribute('src','/projeto-4/img/crianca_m.JPG')
      }
      else if(idade <= 21){
        //jovem
         img.setAttribute('src','/projeto-4/img/jovem_m.JPG')
      }
      else if(idade <= 60){
        //adulto 
        img.setAttribute('src','/projeto-4/img/homem.JPG')
      }
      else{
        //idoso 
        img.setAttribute('src','/projeto-4/img/idoso.JPG')
      }
   
    }
    else if(fsex[1].checked){
      genero = 'Mulher'
      
      if(idade >= 0 && idade <= 10){
        //crianças
        img.setAttribute('src','/projeto-4/img/crianca_f.JPG')
      }
      else if(idade <= 21){
        //jovem
        img.setAttribute('src','/projeto-4/img/jovem_f.JPG')
      }
      else if(idade <= 60){
        //adulto 
         img.setAttribute('src','/projeto-4/img/mulher.JPG')
      }
      else{
        //idoso 
        img.setAttribute('src','/projeto-4/img/idosa.JPG')
        
      }
   
    }
    
    res.style.textAlign = 'center'
    
    res.innerHTML = `Detectamos ${genero} de ${idade} anos <br>`
    
    res.appendChild(img)
  }
}