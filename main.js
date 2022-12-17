// https://www.toptal.com/developers/keycode/for/enter

const touches = [ ... document.querySelectorAll('.button')];
const listKeyCodes = touches.map(touche =>touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
});

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
});

const calculer = (valeur) => {
    if(listKeyCodes.includes(valeur)){
        switch (valeur) {
            case '53':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;  
                break;      
            default:
                const indexKeyCode = listKeyCodes.indexOf(valeur);
                const touche = touches[indexKeyCode];
                ecran.textContent += touche.innerHTML;
                break;
        }
    }
}