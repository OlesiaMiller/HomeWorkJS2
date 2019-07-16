/* eslint-disable no-nested-ternary */
/* eslint-disable sort-keys */
/* eslint-disable no-var */
/* eslint-disable require-jsdoc */
/* eslint-disable func-style */

var userObj={
    firstName: 'Olesia', 
    lastName: 'Miller',
    age: 27,
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    } 
};
console.log(userObj.fullName());




var defUpperStr = function(string) {
    return string.toUpperCase() || 'DEFAULT TEXT';
}



var arrNum = [];
var evenFn = function(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            arrNum.push(i);  
        };
    };
};
evenFn(10);
console.log(arrNum);


var weekFn = function(n) {
    switch(n) {
        case 1: 'Понедельник';
            break;
        case 2: 'Вторник';
            break;
        case 3: 'Среда';
            break;
        case 4: 'Четверг';
            break;
        case 5: 'Пятница';
            break;
        case 6: 'Суббота';
            break;
        case 7: 'Воскресенье';
            break;
        default: 'null';
    }
}
weekFn(10);



var ageClassification = function(n) {
    var result = (n<=24) ? 'детский возраст' : 
    (n>24 && n<45) ? 'молодой человек' :
    (n>45 && n<61) ? 'средний возраст' :
    (n>60 && n<76) ? 'пожилой возраст' :
    (n>75 && n<91) ? 'старческий возраст' :
    (n>90 && n<123) ? 'долгожители' : null;
console.log(result);    
}
ageClassification(200);



var oddFn = function(n) {
    var i = 1;
    var newArr = [];
    while (i<=n) {
        if (i % n != 0) {
            newArr.push(i);
        }
        i++;
    }
console.log(newArr);
}
oddFn(10);

function mainFunc (a, b, funk) {
    var cbAdd = a + b;
    var cbPow = Math.pow(a,b);
    var cbRandom = Math.random(a,b);
    funk(cbAdd, cbPow, cbRandom);
}
mainFunc(2,3,function(num1, num2, num3) {
    console.log('Сумма' + ' ' + num1 + ' ,' + 'Степень' + ' ' + num2+ ' ,' + 'Случайноe число' + ' ' + num3);
});

/*

 *
 */

/*
 * реализуйте следующие функции, которые будут осуществлять механизм callback в основной функции,
 * возвращая ей результат собственного вычисления...
 * для возведения в степень и получения произвольного значения можете воспользоваться методами объекта Math.
 */

// cbRandom(a, b) – вычисляет и возвращает произвольное целое число в диапазоне между a и b включительно.

// cbPow(a, b) – вычисляет и возвращает результат возведения числа a в степень b.

// cbAdd(a, b) – вычисляет и возвращает сумму двух чисел a и b.

/*
 * mainFunc() должна возвращать результат работы переданной ей возвратной функции, например:
 * mainFunc(2, 5, cbRandom) → случайно от 2 до 5 включительно
 * mainFunc(10, 30, cbRandom) → случайно 10..30 включительно
 * mainFunc(2, 5, cbPow) → 32
 * mainFunc(2, 5, cbAdd) → 7
 * mainFunc(2, 5, 'not a func') → false
 */