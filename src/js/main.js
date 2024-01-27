import './header.js'
import './experience.js'
import './gallery.js'
import './footprint.js'

document.addEventListener('wheel', (e) => {
    const postList = document.querySelector('.scroll-container')
    postList.scrollLeft += e.deltaY + e.deltaX
})

function executeScroll(idHash) {
    const targetEl = document.getElementById(idHash)
    if (targetEl) {
        targetEl.scrollIntoView({ inline: 'start', behavior: 'smooth' })
    }
        
} 

document.addEventListener('DOMContentLoaded', () => {
    const idHash = window.location.hash.slice(1)
    executeScroll(idHash)
})

window.onpopstate = (e) => {
    const idHash = window.location.hash.slice(1)
    executeScroll(idHash)
}

const headerAnchorEls = document.querySelectorAll('.header-main__nav-item a')

headerAnchorEls.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault()
        const idHash = e.target.hash.slice(1)
        executeScroll(idHash)
        
        const url = new URL(location)
        url.hash = idHash
        history.pushState({}, "", url)
    })
})