let OFFER_CATEGORIES = {
    mobile: [
        {
            title: "Альфа-выгодная связь",
        },
        {
            title: "Безлимитный интернет",
        },
        {
            title: "Оформить сим",
        },
    ],
    travel: [
        {
            title: "От 5% до 10% на авиабилеты",
        },
        {
            title: "10% за туры",
        },
        {
            title: "Билеты с кэшбэком в Альфа-Тревел",
        },
        {
            title: "В путешествие",
        },
        {
            title: "10% за ж/д билеты",
        },
        {
            title: "10% за отели",
        },
    ],
    events: [
        {
            title: "Персональные подборки и скидки",
        },
        {
            title: "Купить билет",
        },
        {
            title: "Культурная жизнь в новом сервисе Афиша",
        },
    ],
    fuel: [
        {
            title: "Без очередей и кассиров",
        },
        {
            title: "Найти заправку",
        },
        {
            title: "Кэшбэк до 7% на АЗС",
        },
    ],
    share: [
        {
            title: "Забирайте покупки за 1/4 цены",
        },
        {
            title: "Никаких переплат",
        },
        {
            title: "40 000 магазинов",
        },
        {
            title: "Скидки от партнёров",
        },
    ],
    insurance: [
        {
            title: "Страховой полис онлайн",
        },
        {
            title: "Страхование для всех",
        },
        {
            title: "Выбрать свой полис",
        },
    ],
};

let OFFER_LAYOUTS = {
    mobile: [[0], [1, 2]],
    travel: [[0, 1], [2, 3], [4, 5]],
    events: [[0, 1], [2]],
    fuel: [[0, 1], [2]],
    share: [[0], [1, 2], [3]],
    insurance: [[0], [1, 2]],
};

let OFFER_ACTION_INDEX = {
    mobile: 2,
    travel: 3,
    events: 1,
    fuel: 1,
    share: 2,
    insurance: 2,
};

let OFFER_COLUMN_GROW = {
    mobile: [1, 1.5],
    travel: [1, 2, 1],
    insurance: [1, 1.45],
};

let OFFER_CARD_GROW = {
    mobile: [[1], [8, 1]],
    travel: [[1, 1], [8, 1], [1, 1]],
    events: [[8, 1], [1]],
    fuel: [[8, 1], [1]],
    share: [[1], [8, 1], [1]],
    insurance: [[1], [8, 1]],
};

let offerButtons = document.querySelectorAll("[data-offer-category]");
let offersContainer = document.querySelector("[data-offers-container]");
let offerBackground = document.querySelector("[data-offer-background]");

function createOfferCard(offer, isAction, grow) {
    let offerEl = document.createElement("div");
    offerEl.classList.add("offer-card");
    offerEl.style.flexGrow = grow;

    let titleEl = document.createElement("h3");
    titleEl.textContent = offer.title;
    offerEl.appendChild(titleEl);

    if (isAction) {
        let arrowEl = document.createElement("div");
        arrowEl.classList.add("offer-arrow");
        arrowEl.textContent = "→";
        offerEl.appendChild(arrowEl);
    }

    return offerEl;
}

function renderOffers(category) {
    let offers = OFFER_CATEGORIES[category];
    let layout = OFFER_LAYOUTS[category];
    let actionIndex = OFFER_ACTION_INDEX[category];

    offersContainer.innerHTML = "";
    offersContainer.dataset.offerLayout = category;

    layout.forEach((column, columnIndex) => {
        let columnEl = document.createElement("div");
        columnEl.classList.add("offer-column");
        columnEl.style.flexGrow = OFFER_COLUMN_GROW[category]?.[columnIndex] || 1;

        column.forEach((offerIndex, rowIndex) => {
            columnEl.appendChild(createOfferCard(
                offers[offerIndex],
                offerIndex === actionIndex,
                OFFER_CARD_GROW[category]?.[columnIndex]?.[rowIndex] || 1,
            ));
        })

        offersContainer.appendChild(columnEl);
    })
}

function updateActiveOffer(activeButton, activeIndex) {
    offerButtons.forEach((button) => {
        button.classList.toggle("active", button === activeButton);
    })

    offerBackground.style.left = `${activeIndex * (100 / offerButtons.length)}%`;
}

offerButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        updateActiveOffer(button, index);
        renderOffers(button.dataset.offerCategory);
    })
})

updateActiveOffer(offerButtons[0], 0);
renderOffers("mobile");
