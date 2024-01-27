const scrollerElWrapper = document.querySelector(".section-content__experience-scroller")

const skillStack = [
    [
        'HTML',
        'CSS',
        'JavaScript',
        'Vite',
        'Vue',
        'Nuxt',
        'UnoCSS',
        'TypeScript',
        'GraphQL',
    ],
    [
        'Linux',
        'MacOS',
        'VSCode',
        'zsh',
        'Netlify',
        'GitHub',
        'Obsidian',
    ]
]

skillStack.forEach((group, index) => {
    const scrollerEl = document.createElement('div')
    scrollerEl.classList.add('experience__scroller')
    index % 2 === 0
        ? scrollerEl.setAttribute('data-direction', 'forwards')
        : scrollerEl.setAttribute('data-direction', 'reverse')

    const skillListUl = document.createElement('ul')
    skillListUl.classList.add('skill__list')

    group.forEach(item => {
        const skillItemLi = document.createElement('li')
        skillItemLi.classList.add('skill__item')
        skillItemLi.textContent = item

        skillListUl.appendChild(skillItemLi)
    })

    scrollerEl.appendChild(skillListUl)
    scrollerElWrapper.appendChild(scrollerEl)
})

const scrollerEls = document.querySelectorAll(".experience__scroller")

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollerEls.forEach((scroller) => {
        // add data-animated="true" to every `.experience-scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.skill__list`
        const scrollerInner = scroller.querySelector(".skill__list");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.skill__list`
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    })
}