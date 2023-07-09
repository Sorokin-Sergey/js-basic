/*
    Создание случайной карты и маскировка первых 12 символов
*/

const card = Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join('');
const secretCard = card.slice(-4).padStart(16, '*');

console.log(card);
console.log(secretCard);