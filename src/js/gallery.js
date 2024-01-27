import footprint from './footprint'

const galleryWrapperEl = document.querySelector('.section-content__gallery')

const galleryUlEl = document.createElement('ul')
galleryUlEl.style.position = 'relative'
galleryUlEl.style.overflow = 'hidden'

for (let index = 1; index <= 9; index++) {
    const imageLiEl = document.createElement('li')
    const figureEl = document.createElement('figure')
    const imageEl = document.createElement('img')
    const figCaptionEl = document.createElement('figcaption')

    imageLiEl.classList.add('gallery-item')
    imageLiEl.setAttribute('data-ref', index)
    imageLiEl.appendChild(figureEl)
    figureEl.appendChild(imageEl)
    figureEl.appendChild(figCaptionEl)
    imageEl.setAttribute('alt', `#${index} image`)
    imageEl.width = 200
    imageEl.heigh = 200
    imageEl.src = `/images/img-${index}.webp`

    galleryUlEl.appendChild(imageLiEl)

    imageLiEl.addEventListener('click', (e) => {
        document.querySelector('.gallery-item.preview')?.classList.remove('preview')
        footprint.selectedImageRef[0] = 0
        footprint.selectedImageCaption[0] = ''
    })
}

galleryWrapperEl.appendChild(galleryUlEl)
