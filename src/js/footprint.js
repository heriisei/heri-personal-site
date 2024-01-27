import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

document.getElementById('map').addEventListener('wheel', (e) => {
    e.stopPropagation()
})

const selectedImageRef = [0]
const selectedImageCaption = ['']
const iconSize = [60, 60]
const footPrints = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'message': 'Blok M',
                'imageRef': '1',
                'iconSize': iconSize,
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [106.79776042699817, -6.245729042734989],
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Monumen Nasional',
                'imageRef': '4',
                'iconSize': iconSize,
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [106.82661294937135, -6.176011635695518],
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Gelora Bung Karno',
                'imageRef': '7',
                'iconSize': iconSize,
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [106.80661439895631, -6.222003869600826],
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Raden Sadjad Airport',
                'imageRef': '2',
                'iconSize': iconSize,
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [108.38759422302248, 3.9055299448858425],
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Alif Stone Park',
                'imageRef': '5',
                'iconSize': iconSize,
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [108.37539553642273, 3.9867045254959277],
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Pulau Senoa',
                'imageRef': '8',
                'iconSize': iconSize,
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [108.41532021760942, 4.005407585659526],
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Desa Harkatjaya',
                'imageRef': '3',
                'iconSize': iconSize,
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [106.51819646358491, -6.597798454383461],
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'SD Negeri Sukajaya 03',
                'imageRef': '6',
                'iconSize': iconSize,
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [106.51330679655078, -6.600963805202569],
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'SD Negeri Sukajaya 03',
                'imageRef': '9',
                'iconSize': iconSize,
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [106.51330679655078, -6.600963805202569],
            }
        },
    ]
}

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
console.log(import.meta.env.VITE_MAPBOX_TOKEN)
const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v12', // style URL
	center: footPrints.features[0].geometry.coordinates, // starting position [lng, lat]
	zoom: 4, // starting zoom
});

for (const marker of footPrints.features) {
    const el = document.createElement('div')
    const [ width, height ] = marker.properties.iconSize
    el.className = 'marker'
    el.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M7 2h10v2H7zM5 6V4h2v2zm0 8H3V6h2zm2 2H5v-2h2zm2 2H7v-2h2zm2 2H9v-2h2zm2 0v2h-2v-2zm2-2v2h-2v-2zm2-2v2h-2v-2zm2-2v2h-2v-2zm0-8h2v8h-2zm0 0V4h-2v2zm-5 2h-4v4h4z'/%3E%3C/svg%3E")`
    el.style.width = `${width}px`
    el.style.height = `${height}px`
    el.style.backgroundSize = '100%'
    el.style.cursor = 'pointer'

    el.addEventListener('click', () => {
        if (selectedImageRef[0] > 0) unpreviewGalleryImage()
        if (selectedImageRef[0] === marker.properties.imageRef) {
            selectedImageRef[0] = 0
            selectedImageCaption[0] = ''
        } else {
            selectedImageRef[0] = marker.properties.imageRef
            selectedImageCaption[0] = marker.properties.message
            previewGalleryImage()
        }

    })

    const popup = new mapboxgl.Popup({ offset: 25 }).setText(marker.properties.message);

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popup)
        .addTo(map)

}


function unpreviewGalleryImage(imageRef) {
    const targetImage = document.querySelector(`.gallery-item[data-ref="${imageRef ?? selectedImageRef[0]}"`)

    targetImage.classList.remove('preview')
}

function previewGalleryImage(imageRef) {
    const targetImage = document.querySelector(`.gallery-item[data-ref="${imageRef ?? selectedImageRef[0]}"`)

    targetImage.classList.add('preview')
    
    const figcaptionEl = targetImage.querySelector('figcaption')
    figcaptionEl.textContent = selectedImageCaption[0]
}

export default {
    selectedImageRef,
    selectedImageCaption,
}