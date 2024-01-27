import confetti from 'canvas-confetti'

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

    if (newIndex === 0) {
        const canvasConfetti = document.getElementById('confetti-canvas')

        canvasConfetti.confetti = canvasConfetti?.confetti || confetti.create(canvasConfetti, {
            resize: true,
        })

        var end = Date.now() + (15 * 1000);

        if (window.innerWidth >= 768) {
            // canvasConfetti.confetti({
            //     particleCount: 100,
            //     spread: 40,
            //     origin: { y: 1, x: 1},
            // })
            (function frame() {
                canvasConfetti.confetti({
                    particleCount: 4,
                    spread: 40,
                    angle: 120,
                    origin: { y: 1, x: 1},
                });
    
                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        } else {            
            var colors = ['#3730a3', '#ffffff'];

            (function frame() {
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors
                });
                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: colors
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        }

    }

    activeHeaderDescIndex = newIndex
    
    headerDescTextEl.innerHTML = `${headerDescItems[activeHeaderDescIndex]}`
}

renderHeaderDesc()

const headerDescBtnEl = document.querySelector('.header-main__desc button')

headerDescBtnEl.addEventListener('click', () => renderHeaderDesc())