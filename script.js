const button = document.querySelector("button").addEventListener("click", function(){
    retirer();
    const chapeaux = document.querySelectorAll(".chapeau ul");
    const poules = document.querySelectorAll(".poules ul");
    
    chapeaux.forEach(chapeau => {
        const equipes = Array.from(chapeau.querySelectorAll("li"));
        shuffleArray(equipes);
        equipes.forEach((equipe, index) => {
            poules[index % poules.length].appendChild(equipe.cloneNode(true));
        });
    });
    

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
})

function retirer(){
    const h3Elements = document.querySelectorAll(".poules h3");

    h3Elements.forEach(h3 => {
        let sibling = h3.nextElementSibling;
        while (sibling) {
            if (sibling.tagName.toLowerCase() !== 'li') {
                break;
            }
            const nextSibling = sibling.nextElementSibling;
            sibling.remove();
            sibling = nextSibling;
        }
    });
}