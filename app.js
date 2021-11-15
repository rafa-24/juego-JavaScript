document.addEventListener('DOMContentLoaded', () => {
 
    var arrayCarta = [
        {
            nombre: 'cheeseburger',
            imagen: 'imagenes/cheeseburger.png'
        },
        {
            nombre: 'fries',
            imagen: 'imagenes/fries.png'
        },
        {
            nombre: 'hotdog',
            imagen: 'imagenes/hotdog.png'
        },
        {
            nombre: 'icecream',
            imagen: 'imagenes/ice-cream.png'
        },
        {
            nombre: 'milkshake',
            imagen: 'imagenes/milkshake.png'
        },
        {
            nombre: 'pizza',
            imagen: 'imagenes/pizza.png'
        },
        {
            nombre: 'cheeseburger',
            imagen: 'imagenes/cheeseburger.png'
        },
        {
            nombre: 'fries',
            imagen: 'imagenes/fries.png'
        },
        {
            nombre: 'hotdog',
            imagen: 'imagenes/hotdog.png'
        },
        {
            nombre: 'icecream',
            imagen: 'imagenes/ice-cream.png'
        },
        {
            nombre: 'milkshake',
            imagen: 'imagenes/milkshake.png'
        },
        {
            nombre: 'pizza',
            imagen: 'imagenes/pizza.png'
        },

    ]


    arrayCarta.sort(() => 0.5 - Math.random());

    let cuadroCartas = document.querySelector('.cuadro-cartas');
    let puntuacion = document.querySelector('#puntuacion');
    let tarjetasElegidas = [];
    let tarjetasElegidasId = [];
    let tarjetasGanadoras = [];




    function createBoard() {
        for (let i = 0; i < arrayCarta.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'imagenes/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            cuadroCartas.appendChild(card);
        }
    }

    function comprobarSiCoincide() {
        const cartas = document.querySelectorAll('img');
        let primeraCartaId = tarjetasElegidasId[0];
        let segundaCartaId = tarjetasElegidasId[1];

        if (primeraCartaId == segundaCartaId) {
            cartas[primeraCartaId].setAttribute('src', 'imagenes/blank.png');
            cartas[segundaCartaId].setAttribute('src', 'imagenes/blank.png');
            alert('Has hecho click en la misma Imagen genial :)');
        } else if (tarjetasElegidas[0] === tarjetasElegidas[1]) {
            alert('Has encontrado una coincidencia :)');
            cartas[primeraCartaId].setAttribute('src', 'imagenes/white.png');
            cartas[segundaCartaId].setAttribute('src', 'imagenes/white.png');
            cartas[primeraCartaId].removeEventListener('click', flipCard);
            cartas[segundaCartaId].removeEventListener('click', flipCard);
            tarjetasGanadoras.push(tarjetasElegidas);
        } else {
            cartas[primeraCartaId].setAttribute('src', 'imagenes/blank.png');
            cartas[segundaCartaId].setAttribute('src', 'imagenes/blank.png');
            console.log('Lo siento, intenta de nuevo');
        }
        tarjetasElegidas = [];
        tarjetasElegidasId = [];
        puntuacion.textContent = tarjetasGanadoras.length;
        if (tarjetasGanadoras.length === arrayCarta.length / 2) {
            alert("Felicidades has ganado");
        }
    }


    function flipCard() {
        let cardId = this.getAttribute('data-id');
        tarjetasElegidas.push(arrayCarta[cardId].nombre);
        tarjetasElegidasId.push(cardId);
        this.setAttribute('src', arrayCarta[cardId].imagen);
        if (tarjetasElegidas.length === 2) {
            setTimeout(comprobarSiCoincide, 500);

        }
    }

    createBoard();

});
