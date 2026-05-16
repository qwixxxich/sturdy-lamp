let OFFER_CATEGORIES = {
    mobile: [
        {
            title: "Альфа-выгодная связь",
            image: "assets/images/1.jpg",
        },
        {
            title: "Безлимитный интернет",
            image: "assets/images/2.jpg",
        },
        {
            title: "Оформить сим",
            image: "assets/images/3.jpeg",
        },
    ],
    travel: [
        {
            title: "От 5% до 10% на авиабилеты",
            image: "assets/images/4.jpeg",
        },
        {
            title: "10% за туры",
            image: "assets/images/5.jpeg",
        },
        {
            title: "Билеты с кэшбэком в Альфа-Тревел",
            image: "assets/images/6.jpeg",
        },
        {
            title: "В путешествие",
            image: "assets/images/7.jpg",
        },
        {
            title: "10% за ж/д билеты",
            image: "assets/images/1.jpg",
        },
        {
            title: "10% за отели",
            image: "assets/images/2.jpg",
        },
    ],
    events: [
        {
            title: "Персональные подборки и скидки",
            image: "assets/images/3.jpeg",
        },
        {
            title: "Купить билет",
            image: "assets/images/4.jpeg",
        },
        {
            title: "Культурная жизнь в новом сервисе Афиша",
            image: "assets/images/5.jpeg",
        },
    ],
    fuel: [
        {
            title: "Без очередей и кассиров",
            image: "assets/images/6.jpeg",
        },
        {
            title: "Найти заправку",
            image: "assets/images/7.jpg",
        },
        {
            title: "Кэшбэк до 7% на АЗС",
            image: "assets/images/1.jpg",
        },
    ],
    share: [
        {
            title: "Забирайте покупки за 1/4 цены",
            image: "assets/images/2.jpg",
        },
        {
            title: "Никаких переплат",
            image: "assets/images/3.jpeg",
        },
        {
            title: "40 000 магазинов",
            image: "assets/images/4.jpeg",
        },
        {
            title: "Скидки от партнёров",
            image: "assets/images/5.jpeg",
        },
    ],
    insurance: [
        {
            title: "Страховой полис онлайн",
            image: "assets/images/6.jpeg",
        },
        {
            title: "Страхование для всех",
            image: "assets/images/7.jpg",
        },
        {
            title: "Выбрать свой полис",
            image: "assets/images/1.jpg",
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
    offerEl.classList.add("item");
    offerEl.style.flexGrow = grow;
    setCardImage(offerEl, offer.image);

    let titleEl = document.createElement("h3");
    titleEl.textContent = offer.title;
    offerEl.appendChild(titleEl);

    if (isAction) {
        let arrowEl = document.createElement("div");
        arrowEl.classList.add("arrow");
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
        columnEl.classList.add("col");
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
