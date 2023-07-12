/* Реализовать методы увеличения и уменьшения баланса,
при котором каждая операция сохраняется в массив
operations в виде { reason: 'Оплата налогов', sum: -100 }.
Возвращается true, если успешно и false, если не зватает баланса.
Также реализовать метод вывода числа операций по кошельку
*/

const wallet = {
    balance: 0,
    operations: [],
    increase: function(reason, sum) {
        this.balance += sum;
        this.saveOperation(reason, sum);
        return true;
    },
    decrease: function(reason, sum) {
        if (this.balance < sum) {
            return false;
        }
        this.balance -= sum;
        this.saveOperation(reason, -sum);
        return true;
    },
    getCountOperations: function() {
        return this.operations.length;
    },
    saveOperation: function(reason, sum) {
        this.operations.push({
            reason,
            sum
        });
    }
};

console.log(wallet.getCountOperations());
console.log(wallet.decrease('Оплата налогов', 100));
console.log(wallet.getCountOperations());
console.log(wallet.increase('ЗП', 200));
console.log(wallet.getCountOperations());
console.log(wallet.decrease('Оплата налогов', 100));
console.log(wallet.getCountOperations());
console.log(wallet.balance);
console.log(wallet.operations);