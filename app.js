
let btnGiraffe = document.getElementById('btnFour');
let btnCarre = document.getElementById('btnOne');
let btnCat = document.getElementById('btnTwo');
let btnButterfly = document.getElementById('btnThree');
let btnAvion = document.getElementById('btnFive');
let btnBird = document.getElementById('btnSix');
let btnSecret = document.getElementById('btnSeven');
let figures = document.querySelectorAll('.figure');


btnCarre.innerHTML = 'Carré';
btnCat.innerHTML= 'Chat';
btnButterfly.innerHTML= 'Pappillon';
btnGiraffe.innerHTML = 'Giraffe';
btnAvion.innerHTML = 'Avion';
btnBird.innerHTML = 'Oiseau';
btnSecret.innerHTML = 'Secret';



function animals(classe) {
    figures.forEach(elements => {
        elements.classList.remove('giraffe', 'cat','butterfly', 'bird','avion' ,'carre','secret')
        elements.classList.add (classe)
    })
}
btnCarre.addEventListener('click', () => {
    animals('carre')
    
})
btnGiraffe.addEventListener('click', () => {
    animals('giraffe')
})
btnCat.addEventListener('click', () => {
   
    animals('cat')
})
btnButterfly.addEventListener('click', () => {
    animals('butterfly')
})

btnBird.addEventListener('click', () => {
    animals('bird')
})

btnAvion.addEventListener('click', () => {
    animals('avion') 
})

btnSecret.addEventListener('click', () => {
    animals('secret')
})