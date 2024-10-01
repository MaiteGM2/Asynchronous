function generateRandomNumber (time) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 10));
        }, time);
    });
};

function loadResult(){
    let loader = document.getElementById('loader');
    let result = document.getElementById("result");
    let time = 5000;

    result.style.display = 'none';
    loader.style.display = 'block';

    generateRandomNumber(time).then((num) => result.innerHTML = num).finally((num) => showResult(num));
}

function showResult (num){
    let result = document.getElementById("result");
    let loader = document.getElementById('loader');

    loader.style.display = 'none';
    result.style.display = 'block';
}

let button = document.getElementById("generate-btn");
button.addEventListener("click", loadResult);