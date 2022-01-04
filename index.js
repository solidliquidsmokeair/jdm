const carPic = document.getElementById('image-1');
const carMake = document.getElementById('car-make');
const carModel = document.getElementById('car-model');
const carYear = document.getElementById('car-year');
const carEngine = document.getElementById('car-engine');
const carBody = document.getElementById('car-body');
const carImage = document.getElementById('image-1')

const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

let car = [
    {
        id: 0,
        make: 'toyota',
        model: 'corolla',
        year: '2002',
        engine: '1.8-liter four-cylinder engine',
        body: 'sedan',
        image: 'corolla',
    },

    {
        id: 1,
        make: 'subaru',
        model: 'impreza',
        year: '2002',
        engine: '1.8-liter four-cylinder engine',
        body: 'sedan',
        image: 'impreza',
    },

    {
        id: 2,
        make: 'mazda',
        model: 'rx7',
        year: '2002',
        engine: '1.8-liter four-cylinder engine',
        body: 'sedan',
        image: 'rx7',
    },

    {
        id: 3,
        make: 'honda',
        model: 'civic',
        year: '2002',
        engine: '1.8-liter four-cylinder engine',
        body: 'sedan',
        image: 'civic',
    },

    
]

var count = 0


function showCar() {
    carMake.innerText = car[count].make
    carModel.innerText = car[count].model
    carImage.src = '/images/'+car[count].image+'.jpg'
}

function increaseCount() {
    count++
    showCar()

}

function decreaseCount() {
    count--
    showCar()

}

window.addEventListener('load', startUp = () => {

    carMake.innerText = count
    carModel.innerText = car[1].model
    

})

prevBtn.addEventListener('click', decreaseCount)
nextBtn.addEventListener('click', increaseCount)