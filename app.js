// Отсортировать пользователей по возрасту

// const users = [
//     {name: 'Вася', age: 30},
//     {name: 'Катя', age: 18},
//     {name: 'Аня', age: 40},
//     {name: 'Петя', age: 25},
// ];

// users.sort((a, b) => a.age - b.age);


// Преобразовать объекты до вида
// { fullName: '', skillNum }

const users = [
    {
        name: 'Вася',
        surname: 'Пупкин',
        age: 30,
        skills: ['Разработка', 'Dev0ps']
    },
    {
        name: 'Катя',
        surname: 'Белова',
        age: 18,
        skills: ['Дизайн']
    },
]

const newUsers = users.map(user => {
    return {
        fullName: `${user.name} ${user.surname}`,
        skillNum: user.skills.length
    }
});

console.log(newUsers);