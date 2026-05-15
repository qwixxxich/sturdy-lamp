let ABOUT_CATEGORIES = {
    achievements: [
        {
            title: "Альфа-Банк — лучший работодатель России",
        },
        {
            title: "Крупнейший частный банк",
        },
        {
            title: "Отзывы",
        },
    ],
    career: [
        {
            title: "Альфа-Будущее",
        },
        {
            title: "Вакансии в Альфа-Банке",
        },
        {
            title: "Свой в Альфе",
        },
    ],
};

let ABOUT_LAYOUTS = {
    achievements: [[0], [1, 2]],
    career: [[0], [1, 2]],
};

let ABOUT_COLUMN_GROW = {
    achievements: [1, 1],
    career: [1, 1],
};

let ABOUT_CARD_GROW = {
    achievements: [[1], [1, 1]],
    career: [[1], [1, 1]],
};

let aboutButtons = document.querySelectorAll("[data-about-category]");
let aboutContainer = document.querySelector("[data-about-container]");
let aboutBackground = document.querySelector("[data-about-background]");

function createAboutCard(card, grow, isMain) {
    let cardEl = document.createElement("div");
    cardEl.classList.add("item");
    cardEl.style.flexGrow = grow;

    if (isMain) {
        cardEl.classList.add("main");
    }

    let titleEl = document.createElement("h3");
    titleEl.textContent = card.title;
    cardEl.appendChild(titleEl);

    return cardEl;
}

function renderAbout(category) {
    let cards = ABOUT_CATEGORIES[category];
    let layout = ABOUT_LAYOUTS[category];

    aboutContainer.innerHTML = "";

    layout.forEach((column, columnIndex) => {
        let columnEl = document.createElement("div");
        columnEl.classList.add("col");
        columnEl.style.flexGrow = ABOUT_COLUMN_GROW[category]?.[columnIndex] || 1;

        column.forEach((cardIndex, rowIndex) => {
            columnEl.appendChild(createAboutCard(
                cards[cardIndex],
                ABOUT_CARD_GROW[category]?.[columnIndex]?.[rowIndex] || 1,
                cardIndex === 0,
            ));
        })

        aboutContainer.appendChild(columnEl);
    })
}

function updateActiveAbout(activeButton, activeIndex) {
    aboutButtons.forEach((button) => {
        button.classList.toggle("active", button === activeButton);
    })

    aboutBackground.style.left = `${activeIndex * (100 / aboutButtons.length)}%`;
}

aboutButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        updateActiveAbout(button, index);
        renderAbout(button.dataset.aboutCategory);
    })
})

updateActiveAbout(aboutButtons[0], 0);
renderAbout("achievements");
