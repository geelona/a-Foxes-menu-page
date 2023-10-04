import '../scss/style.scss';

function toHtml(fox) {
    return `
    <div class="element">
        <img src="${fox.imageSrc}" alt="${fox.imageAlt}">
        <div class="text-wrapper">
            <div class="title">
                <h2>${fox.textWrapper.title}</h2>
                <div class="likes">
                    <img src="${fox.textWrapper.likes.imgSrc}" alt="${fox.textWrapper.likes.imgAlt}">
                    <p>${fox.textWrapper.likes.count}</p>
                </div>
            </div>
            <p>${fox.description}</p>
            <a href="${fox.aHref}">${fox.aText}</a>
        </div>
    </div>
    `
}

async function getFoxElements(FilterValue) {
    try {
        const response = await fetch('../json/foxes.json')
        const data = await response.json()

        document.querySelector('.filter-elements-container').innerHTML = ''
        
        if (FilterValue !== 'all') {
           data.foxes.forEach((fox) => {
            if (fox.name == FilterValue) {
                document.querySelector('.filter-elements-container').innerHTML += toHtml(fox)
            }
           })
        } else {
            data.foxes.forEach((fox) => {
                document.querySelector('.filter-elements-container').innerHTML += toHtml(fox)
            })
        }
    } catch (error) {
        console.error(error)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const FilterButtons = document.querySelectorAll('.filter-button');
    let FilterValue = 'all';

    FilterButtons.forEach((button) => {
        if (button.getAttribute('filter-data') == FilterValue) {
            button.classList.add('active')
            getFoxElements(FilterValue)
        }
    })

    FilterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            FilterButtons.forEach((button) => {
                button.classList.remove('active')
            })
            button.classList.add('active')
            FilterValue = button.getAttribute('filter-data')

            getFoxElements(FilterValue)
        })
    })
})