'use strict';

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY';
let globalActiveHabbitId;

/* page */
const page = {
    menu: document.querySelector('.menu__list'),
    header: {
        h1: document.querySelector('.h1'),
        progressPercent: document.querySelector('.progress__percent'),
        progresCoverBar: document.querySelector('.progress__cover-bar'),
    },
    body: {
        container: document.querySelector('.habbit__container'),
        nextDay: document.querySelector('.habbit__new-day')
    },
    popup: {
        index: document.getElementById('add-habbit__popup'),
        iconField: document.querySelector('.popup__form input[name="icon"]')
    }
}

/* utils */
function loadData() {
    const habbitsString = localStorage.getItem(HABBIT_KEY);
    const habbitsArray = JSON.parse(habbitsString);
    if (Array.isArray(habbitsArray)) {
        habbits = habbitsArray;
    }
}

function saveData() {
    localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

function togglePopup() {
    if (page.popup.index.classList.contains('cover_hidden')) {
        page.popup.index.classList.remove('cover_hidden');
    } else {
        page.popup.index.classList.add('cover_hidden');
    }
}

function resetForm(form, fields) {
    for (const field of fields) {
        form[field].value = '';
    }
}

function validateAndGetFormForm(form, fields) {
    const formData = new FormData(form);
    const res = {};
    for (const field of fields) {
        const fieldValue = formData.get(field);
        form[field].classList.remove('error');
        if (!fieldValue) {
            form[field].classList.add('error');
        }
        res[field] = fieldValue;
    }
    let isValid = true;
    for (const field of fields) {
        if (!res[field]) {
            isValid = false;
        }
    }
    if (!isValid) {
        return;
    }
    return res;
}

/* render */
function rerenderMenu(activeHabbit) {
    for (const habbit of habbits) {
        const existed = document.querySelector(`[data-habbit-id="${habbit.id}"]`);
        if (!existed) {
            //add
            const element = document.createElement('button');
            element.setAttribute('data-habbit-id', habbit.id);
            element.classList.add('menu__item');
            element.addEventListener('click', () => rerender(habbit.id));
            element.innerHTML = `<img src="/images/${habbit.icon}.svg" alt="${habbit.name}">`;
            if (activeHabbit.id === habbit.id) {
                element.classList.add('menu__item_active');
            }
            page.menu.appendChild(element);
            continue;
        }
        if (activeHabbit.id === habbit.id) {
            existed.classList.add('menu__item_active');
        } else {
            existed.classList.remove('menu__item_active');
        }
    }
}

function rerenderHead(activeHabbit) {
    page.header.h1.innerText = activeHabbit.name;
    const progress = activeHabbit.days.length / activeHabbit.target > 1
        ? 100
        : activeHabbit.days.length / activeHabbit.target * 100;
    page.header.progressPercent.innerText = progress.toFixed(0) + '%';
    page.header.progresCoverBar.style.width = progress.toFixed(0) + '%';
}

function rerenderBody(activeHabbit) {
    page.body.container.innerHTML = '';
    let dayNumber = 1;
    for (const index in activeHabbit.days) {
        const element = document.createElement('div');
        element.classList.add('habbit');
        element.innerHTML = `<div class="habbit__day">День ${Number(index) + 1}</div>
                        <div class="habbit__comment">${activeHabbit.days[index].comment}</div>
                        <form class="habbit__form-delete" onsubmit="deteleDay(event)">
                            <input type="hidden" name="index" value="${index}">
                            <button class="habbit__delete">
                                <img src="/images/delete.svg" alt="Удалить день ${Number(index) + 1}">
                            </button>
                        </form>`;

        page.body.container.appendChild(element);
        dayNumber++;
    }

    const nextDayTitle = page.body.nextDay.querySelector('.habbit__day')
    nextDayTitle.innerText = `День ${activeHabbit.days.length + 1}`;
}

function rerender(activeHabbitId) {
    const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId);
    if (!activeHabbit) {
        return;
    }
    globalActiveHabbitId = activeHabbitId;
    document.location.replace(document.location.pathname + '#' + globalActiveHabbitId);
    rerenderMenu(activeHabbit);
    rerenderHead(activeHabbit);
    rerenderBody(activeHabbit);
}

/* work with days */
function addDay(event) {
    event.preventDefault();
    const data = validateAndGetFormForm(event.target, ['comment']);
    if (!data) {
        return;
    }
    habbits = habbits.map(habbit => {
        if (habbit.id === globalActiveHabbitId) {
            return {
                ...habbit,
                days: habbit.days.concat([{ comment: data.comment }])
            }
        }
        return habbit;
    });
    resetForm(event.target, ['comment']);
    rerender(globalActiveHabbitId);
    saveData();
}

function deteleDay(event) {
    event.preventDefault();
    const data = validateAndGetFormForm(event.target, ['index']);
    if (!data) {
        return;
    }
    habbits = habbits.map(habbit => {
        if (habbit.id === globalActiveHabbitId) {
            return {
                ...habbit,
                days: habbit.days.filter((el, i) => i != data.index ? el : null)
            }
        }
        return habbit;
    });
    rerender(globalActiveHabbitId);
    saveData();
}

/* working with habbits */
function setIcon(context) {
    const icon = context.dataset.icon;
    page.popup.iconField.value = icon;
    const activeIcon = document.querySelector('.icon.icon_active');
    activeIcon.classList.remove('icon_active');
    context.classList.add('icon_active');
}

function addHabbit(event) {
    event.preventDefault();
    const data = validateAndGetFormForm(event.target, ['name', 'target', 'icon']);
    if (!data) {
        return;
    }
    const maxId = habbits.reduce((acc, habbit) => acc > habbit.id ? acc : habbit.id, 0);
    habbits.push({
        id: maxId + 1,
        icon: data.icon,
        name: data.name,
        target: data.target,
        days: []
    });
    resetForm(event.target, ['name', 'target']);
    togglePopup();
    rerender(maxId + 1);
}

/* init */
(() => {
    loadData();
    const hashId = Number(document.location.hash.replace('#', ''));
    const urlHabbit = habbits.find(habbit => habbit.id == hashId);
    if (urlHabbit) {
        rerender(urlHabbit.id);
    } else {
        rerender(habbits[0].id);

    }
})()