const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");//color class 선택

btn.addEventListener("click", () => {
    //random color
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        const number = getRandomNumber();
        hexColor += hex[number];
    }

    document.body.style.backgroundColor = hexColor;
    document.textContent = hexColor;
});

const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * hex.length);//Math.floor 소수점 이하 생략
    return randomNumber;
};
