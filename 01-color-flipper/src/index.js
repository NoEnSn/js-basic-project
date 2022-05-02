const colors = ["green", "red", "rgba(133,120,200)", "#f1f5035"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");//color class 선택

btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    document.textContent = colors[randomNumber];
});

const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * colors.length);//Math.floor 소수점 이하 생략
    return randomNumber;
};


// https://github.com/applejjmango/js-basic-hancom/tree/main/01-color-flipper
