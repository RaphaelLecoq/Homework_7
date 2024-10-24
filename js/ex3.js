// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
];

const countryInput = document.getElementById('country');
const suggestions = document.getElementById('suggestions');

const displaySuggestions = (countriesFound) => {
    suggestions.innerHTML = '';

    countriesFound.forEach(country => {
        const suggestionsElement = document.createElement('div');
        suggestionsElement.classList.add('suggestion');
        suggestionsElement.textContent = country;

        suggestionsElement.addEventListener('click', () => {
            countryInput.value =country;

            suggestions.innerHTML = '';
        })
        suggestions.appendChild(suggestionsElement);
    })
}

const filter = (input) => {
    return countryList.filter(country => country.toLowerCase().startsWith(input.toLowerCase()));
}

countryInput.addEventListener('input', () => {
    const input = countryInput.value;

    if (input) {
        const countriesFoud = filter(input);

        if (countriesFoud.length > 0) {
            displaySuggestions(countriesFoud);
        } else {
            suggestions.innerHTML = '';
        }
    } else {
        suggestions.innerHTML = '';
    }
})
