function playSound (keySoundSelector) {
    const x = document.querySelector(keySoundSelector);

    if (x == null) {
        console.log("Valor nulo ou indefinido");
        return;
    }

    if(x.localName === 'audio') {
        x.play();
    } else {
        console.log("Não é um áudio");
    }
    
}

const allKeys = document.querySelectorAll('.tecla');

for (let i = 0; i < allKeys.length; i++) {
    const key = allKeys[i];
    const keySoundClass = key.classList[1];
    const keySoundId = `#som_${keySoundClass}`;

    key.onclick = function () {
        playSound(keySoundId);
    }

    key.onkeydown = function (event) {  
        if(event.code == 'Space' || event.code == 'Enter') {
            key.classList.add('ativa');
        }   
    }

    key.onkeyup = function () {
        key.classList.remove('ativa');
    }
}

