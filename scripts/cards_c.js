const CARD_CATEGORIES = {
    all: [
        {
            title: "test1",
            subtitle: "test subtitle1",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test2",
            subtitle: "test subtitle2",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test3",
            subtitle: "test subtitle3",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test4",
            subtitle: "test subtitle4",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test5",
            subtitle: "test subtitle5",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test6",
            subtitle: "test subtitle6",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test7",
            subtitle: "test subtitle7",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test8",
            subtitle: "test subtitle8",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
    ],
    "small-business": [
        {
            title: "1test",
            subtitle: "test subtitle1",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test2",
            subtitle: "test subtitle2",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test3",
            subtitle: "test subtitle3",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test4",
            subtitle: "test subtitle4",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test5",
            subtitle: "test subtitle5",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test6",
            subtitle: "test subtitle6",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test7",
            subtitle: "test subtitle7",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test8",
            subtitle: "test subtitle8",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
    ],
    "large-business": [
        {
            title: "test1",
            subtitle: "test subtitle1",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test2",
            subtitle: "test subtitle2",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test3",
            subtitle: "test subtitle3",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test4",
            subtitle: "test subtitle4",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test5",
            subtitle: "test subtitle5",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test6",
            subtitle: "test subtitle6",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test7",
            subtitle: "test subtitle7",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
        {
            title: "test8",
            subtitle: "test subtitle8",
            image:
                "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
            href: "#",
        },
    ],
};

let controlButtons = document.querySelectorAll("[data-card-category]");
let cardsContainer = document.querySelector("[data-cards-container]");

controlButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.cardCategory;
        const cards = CARD_CATEGORIES[category];

        cardsContainer.innerHTML = "";
        cards.forEach((card) => {
            let cardEl = document.createElement("div");
            cardEl.classList.add("card");
            cardEl.innerHTML = `
                    <p>${card.title}</p>
                    <p>${card.subtitle}</p>
                  `
            cardEl.style.backgroundImage = `url(${card.image})`
            cardsContainer.appendChild(cardEl)
        })
    })
})