import React from 'react'
import "./HomePage.css"



function HomePage() {
  return (
    <div className='divPai'>
      
      <div className="tituloLogo">
        <div className='siteLogo'>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 5h-7L8 19l-3-6H3m11 0l6 6m-6 0l6-6"/></svg>
        </div>
        <span>Conversão Total</span>
      </div>
      
      <div className='selecaoConversao'>
        <span>Seleção de conversão</span>
        
        <div className="buttonsSelecao">
          <button>Peso</button>
          <button>Volume</button>
          <button>Temperatura</button>
          <button>Tempo</button>
          <button>Velocidade</button>
          <button>Comprimento</button>
        </div>
      </div>



    </div>         
  )
}

export default HomePage