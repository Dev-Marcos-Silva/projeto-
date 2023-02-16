function carregar(){
  let msg = document.getElementById('msg')
  let img = document.getElementById('img')
  let horas = new Date()
  let hora = horas.getHours()
  msg.innerHTML = `Horario atual ${hora}:horas`
  
  if(hora >= 0 && hora < 12){
    //Bom Dia 
    img.src = '/projeto-3/img/manha.jpg'
    
    document.body.style.backgroundColor = '#8C9DEA'
  }
  else if(hora <= 18){
    //Boa Tarde 
    img.src = '/projeto-3/img/tarde.jpg'
    
    document.body.style.backgroundColor = '#C67B6B'
  }
  else{
    //Boa Noite 
    img.src = '/projeto-3/img/noite.jpg'
    
    document.body.style.backgroundColor = '#0E0E26'
  }
}