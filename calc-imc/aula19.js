function meuForm() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeInfoPessoa(event) {

        event.preventDefault();
        let peso = +form.querySelector('.peso').value;
        let altura = +form.querySelector('.altura').value;
        
        const imc = somarImc(peso, altura);

        if (imc <= 18.5) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} : ABAIXO DO PESO!</p>`;
            return
        }
        if (imc >= 18.5 && imc <= 24.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} : PESO NORMAL</p>`;
            return
        }
        if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} : SOBREPESO</p>`;
            return
        }
        if (imc >= 30 && imc <= 34.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} : OBESIDADE GRAU 1</p>`;
            return
        }
        if (imc >= 35 && imc <= 39.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} : OBESIDADE GRAU 2</p>`;
            return
        }
        if (imc > 40) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} : OBESIDADE GRAU 3</p>`;
            return
        }
            resultado.innerHTML = `<p>Digite as informações corretas!</p>`; 

    }
    form.addEventListener('submit', recebeInfoPessoa);
}

function somarImc(peso, altura) {
    const imc = peso / (altura * altura);
    altura = parseFloat(altura);
    return imc.toFixed(2);
}

meuForm();