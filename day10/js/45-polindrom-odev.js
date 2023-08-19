


function checkPoli(){

    const inputEl = document.getElementById(`number`).value;
    const reverse = inputEl.split('').reverse().join('');

    if(inputEl === reverse){
        document.getElementById('result').innerText = ` ${inputEl} sayisi polindromdur`
    }else {
        document.getElementById('result').innerText = ` ${inputEl}  sayisi polindrom değildir`
    }

    

}