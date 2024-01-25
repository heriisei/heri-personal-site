// SECTION - Hero section description element
const headerDescTextEl = document.querySelector('.header-main__desc p')

const headerDescItems = [
    'web developer',
    'street photographer',
    'foot traveler',
]

let activeHeaderDescIndex = 0
const renderHeaderDesc = () => {    
    let newIndex
    
    do {
        newIndex = Math.floor(Math.random() * headerDescItems.length)
    } while (newIndex === activeHeaderDescIndex)

    activeHeaderDescIndex = newIndex
    
    headerDescTextEl.innerHTML = `${headerDescItems[activeHeaderDescIndex]}`
}

renderHeaderDesc()

const headerDescBtnEl = document.querySelector('.header-main__desc button')

headerDescBtnEl.addEventListener('click', () => renderHeaderDesc())

// !SECTION