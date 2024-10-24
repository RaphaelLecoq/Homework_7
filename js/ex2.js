const houses = [
    {
        code: "ST",
        name: "Stark"
    },
    {
        code: "LA",
        name: "Lannister"
    },
    {
        code: "BA",
        name: "Baratheon"
    },
    {
        code: "TA",
        name: "Targaryen"
    }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
    switch (houseCode) {
        case "ST":
            return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return []; // Empty array
    }
};

const houseSelect = document.getElementById('house');

const  dropdownList= () => {
    houses.forEach((house) => {
        const option = document.createElement('option');
        option.value = house.code;

        option.textContent = house.name;
        houseSelect.appendChild(option);
    })
}

const  displayCharacters = () => {
    const charactersList = document.getElementById('characters');
    charactersList.innerHTML = '';
    const selectedHouse = houseSelect.value;
    const characters = getCharacters(selectedHouse);
    
    characters.forEach((character) => {
        const items = document.createElement('li');
        items.textContent = character;
        charactersList.appendChild(items);
    })
}

window.onload = dropdownList;

document.getElementById('house').addEventListener('change', displayCharacters);
