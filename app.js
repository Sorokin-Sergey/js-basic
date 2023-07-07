/*
    Задание для упражнения:
    Пользователь:
    Возраст
    Наличие работы
    Деньги
    Нужно проверить может ли он купить новый MacBook за 2000$? Он может брать не только свои деньги, но и взять кредит. Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 100$ если ему просто больше 24-х лет и 0 в ином случае. Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false.
*/

class User {
    constructor (name, age, hasWork, money) {
        this.name = name;
        this.age = age;
        this.hasWork = hasWork;
        this.money = money;
    }
    
    getCredit = () => {
        if (this.age > 24) {
            return this.hasWork ? 500 : 100;
        } else {
            return 0;
        }
    }

    canBuy = costLaptop => (this.money + this.getCredit()) >= costLaptop
}

const vasya = new User('Вася', 25, true, 1600);

console.log(vasya.canBuy(2000));