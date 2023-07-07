/*
    Дан произвольный url вида - https://purpleschool.ru/course/javascript
    Нужно сделать функцию, которая выводит в консоль:
    Протокол (https)
    Доменное имя (purpleschool.ru)
    Путь внутри сайта (/course/javascript)
*/

const url = 'https://purpleschool.ru/course/javascript';

function parseUrl (url) {
    const [protocol, _, host, ...path] = url.split('/');

    return [protocol.split(':')[0], host, '/' + path.join('/')];
}

const [http, domain, ext] = parseUrl(url);
console.log(http, domain, ext);