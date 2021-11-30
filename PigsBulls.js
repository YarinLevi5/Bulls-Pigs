let digits = document.querySelectorAll('#numChoose');
let digit1 = digits[0].value;
let digit2 = digits[1].value;
let digit3 = digits[2].value;
let digit4 = digits[3].value;
let numsPlayer = digit1 + digit2 + digit3 + digit4;
// console.log(numsPlayer);

let arrayOfnumsPlayer = [];
let checkArray = [];
let flag = false;
let i = 0;

function checkNums() {
    while (numsPlayer) {
        let digit = numsPlayer % 10;
        if (arrayOfnumsPlayer[digit]) {
            flag = true
        } else {
            arrayOfnumsPlayer[digit] = true;
            checkArray[i] = digit;
        }
        numsPlayer = Math.floor(numsPlayer / 10);
        i++
    }
}
checkNums();

let showBtn = document.querySelector('button');
showBtn.addEventListener('click', () => {
    if (flag) {
        console.log("Try Again");
    } else {
        let j = 0;
        let bulls = 0;
        let pigs = 0;
        let randomNums = Math.floor(Math.random() * 9000 + 1000);
        let wrap = document.querySelector('.wrap');
        let text = document.createElement('p');
        text.textContent = `Random nums : ${randomNums}`;
        wrap.appendChild(text);
        while (randomNums) {
            let num = randomNums % 10;
            if (num === checkArray[j]) {
                bulls++
            } else {
                for (let i = 0; i < checkArray.length; i++) {
                    if (num === checkArray[i]) {
                        pigs++
                    }
                }
            }
            randomNums = Math.floor(randomNums / 10);
            j++
        }
        let score = document.createElement('p');
        score.innerText += `bulls : ${bulls}, pigs: ${pigs}`;
        wrap.appendChild(score);
    }
    resetNums();
});

function resetNums() {
    for (let i = 0; i < digits.length; i++) {
        digits[i].value = "";
    }
}