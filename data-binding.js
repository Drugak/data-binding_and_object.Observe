/**
 * Created by Noxval on 19.04.15.
 */

"use strict"

var contact = {
    alina: {
        phone: "12-12-12",
        adress: "odessa"
    }
};

var contact2 = {
    alina: {
        phone: "12-12-12",
        adress: "odessa"
    }
};

function contactInfoChange (changes) {
    changes.forEach(function(change) {
        console.log("Что изсенилось ?" , change.name);
        console.log(" Что со мной сделали ?" , change.type);
        console.log(change);
    });
}

Object.observe([contact, contact2] , contactInfoChange);


//************************************************************************************


// Объявляем простую модель
var model = {
    a: {}
};

// И отдельную переменную, которую мы позже будем использовать
// в геттере нашей модели

var _b= 2;

//Определяем новое свойство "b" в нашем обьекте "a"
//и устанавливаем ему геттер и сеттер

Object.defineProperty(model.a , 'b', {
    get: function () {
      return _b;git
    },
    set: function (b) {
        Object.getNotifier(this).notify({
            type: "update",
            name: 'b',
            oldValue: _b
        });

        console.log('set', b);

        _b = b;
    }
});

// Объявляем функцию наблюдения

function observer (changes) {
    changes.forEach(function (change, i) {
       console.log(change)
    });
}

// Начинаем наблюдать за изменениями model.a
Object.observe(model.a, observer);