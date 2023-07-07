/*
    Дан список задач
    const tasks = ['Задача 1'];

    Сделать функции:
    Добавление задачи в конец
    Удаление задачи по названию
    Перенос задачи в начало списка по названию
    ! Всегда меняем исходный массив
*/

class Tasks {
    constructor (tasks) {
        this.tasks = tasks;
    }

    addTask = taskName => this.tasks.push(taskName);

    removeTaskByName = taskName => {
        const index = this.tasks.indexOf(taskName);
        if (index == -1) {
            return;
        } else {
            return this.tasks.splice(index, 1);
        }
    }

    swapToFIrst = taskName => {
        const res = this.removeTaskByName(taskName);
        if (!res) {
            return;
        }
        this.tasks.unshift(taskName);
    }
}

const tasks = new Tasks(['Задача 1']);

tasks.addTask('Задача 2');
tasks.addTask('Задача 3');
console.log(tasks.tasks);
tasks.removeTaskByName('Задача 1');
tasks.removeTaskByName('Задача 10');
console.log(tasks.tasks);
tasks.addTask('Задача 1');
console.log(tasks.tasks);
tasks.swapToFIrst('Задача 1');
tasks.swapToFIrst('Задача 10');

console.log(tasks.tasks);