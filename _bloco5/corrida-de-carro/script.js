let button = document.getElementById('start-race-btn');
let car1 = document.querySelector('.car1');
let car2 = document.querySelector('.car2');
car1.style.marginLeft = '0px';
car2.style.marginLeft = '0px';
let widthCars = parseInt('200px');


button.addEventListener('click', function() {

  car1.style.marginLeft = parseInt(car1.style.marginLeft) + (Math.random() * 100) + 'px';
  car2.style.marginLeft = parseInt(car2.style.marginLeft) + (Math.random() * 100) + 'px';

  if (parseInt(car1.style.marginLeft) > (window.innerWidth - widthCars)) {
    alert('Carro Vermelho é o Ganhador!!!');
    resetCars(car1, car2);
  }

  if (parseInt(car2.style.marginLeft) > (window.innerWidth - widthCars)) {
    alert('Carro Verde é o Ganhador!!!');
    resetCars(car1, car2);
  }
});

function resetCars (car1, car2) {
  car1.style.marginLeft = '0px';
  car2.style.marginLeft = '0px';
}
