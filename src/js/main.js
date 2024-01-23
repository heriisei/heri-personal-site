document.addEventListener('wheel', (e) => {
    const postList = document.querySelector('.scroll-container')
    postList.scrollLeft += e.deltaY + e.deltaX
})