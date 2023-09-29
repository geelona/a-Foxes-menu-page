import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    const FilterButtons = document.querySelectorAll('.filter-button');
    const ElementsList = document.querySelectorAll('.element');
    let FilterValue = 'all';

    FilterButtons.forEach((button) => {

        if (button.getAttribute('filter-data') == FilterValue) {
            button.classList.add('active');
        }

        button.addEventListener('click', () => {
            FilterValue = button.getAttribute('filter-data');

            console.log(FilterValue);

            FilterButtons.forEach((btn) => {
                btn.classList.remove('active');
            });
            button.classList.add('active');

            ElementsList.forEach((element) => {
                if (FilterValue == 'all') {
                    element.style.display = 'flex';
                }
                else {
                    if (element.classList.contains(FilterValue)) {
                        element.style.display = 'flex';
                    }
                    else {
                        element.style.display = 'none';
                    }
                }
            })
        })
    })
});