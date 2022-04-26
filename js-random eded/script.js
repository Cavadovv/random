
let rdm = Math.floor(Math.random() * 10);
console.log(rdm)

let cavab = prompt('1 ve 10 arasinda bir reqem secin. Tesadufi secilmis  dogru reqemi secseniz hediyye qazanacagsiniz. 3 sansiniz var');



if (cavab == rdm) {
    alert('tebrikler. hediyye qazandiniz')
}

else if (cavab > rdm) {
    prompt('daha kicik reqem secin')
}

else {
    prompt('daha boyuk reqem secin')
};

