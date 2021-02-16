function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var start = new Date().getTime();
function appear() {
    start = new Date().getTime();
    document.getElementById("div").style.display = "block"
    var width = (Math.random() * 700) + 50;
    var top = Math.random() * 500;
    var left = Math.random() * 700;
    if (Math.random() < 0.3) {
        document.getElementById("div").style.borderRadius = 0 + "%";
    }
    else {
        document.getElementById('div').style.borderRadius = 51 + "%";
    }
    document.getElementById("div").style.height = width + "px";
    document.getElementById("div").style.width = width + "px";
    document.getElementById("div").style.top = top + "px";
    document.getElementById("div").style.left = left + "px";
    document.getElementById("div").style.background = getRandomColor();
}

// Все элементы случайности находятся в первой функции из-за того что она появляет квадрат
function infinitedivappear() {
    setTimeout(appear, Math.random() * 1000)
};
infinitedivappear();
// Функция инфинит...сдесь нужна для того что-бы див(квадрат,круг) вообще появился
document.getElementById("div").onclick = function () {
    var end = new Date().getTime();
    var result = end - start;
    document.getElementById("h3").innerHTML = result / 1000 + "sec";
    var massResult = [new result];
    console.log(result);

    document.getElementById("div").style.display = "none";
    infinitedivappear();

}