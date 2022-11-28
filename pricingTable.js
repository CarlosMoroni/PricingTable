
function card1() {
    
    const cardFree = document.getElementById('free-card')
    const header = document.getElementById('header-free')
    const freeButton = document.getElementById('free-button')
    
    cardFree.addEventListener('mouseover', () => {
        header.classList.add('animacao')
        freeButton.classList.add('button-animacao')
        
        cardFree.addEventListener('mouseout', () => {
          header.classList.remove('animacao')
          freeButton.classList.remove('button-animacao')
        })
    })
    
}

card1()

function card2() {
    
    const basico = document.getElementById('basico-card')
    const header = document.getElementById('header-basico')
    const basicoButton = document.getElementById('basico-button')
    
    basico.addEventListener('mouseover', () => {
        header.classList.add('animacao')
        basicoButton.classList.add('button-animacao')
        
        basico.addEventListener('mouseout', () => {
          header.classList.remove('animacao')
          basicoButton.classList.remove('button-animacao')
        })
    })
    
}

card2()


function card3() {
    
    const profissional = document.getElementById('profissional-card')
    const header = document.getElementById('header-profissional')
    const profissionalButton = document.getElementById('profissional-button')
    
    profissional.addEventListener('mouseover', () => {
        header.classList.add('animacao')
        profissionalButton.classList.add('button-animacao')
        
        profissional.addEventListener('mouseout', () => {
          header.classList.remove('animacao')
          profissionalButton.classList.remove('button-animacao')
        })
    })
    
}

card3()
