function imgSlider(anything){
    document.querySelector('.Starbucks').src = anything;
}

function changeColorCircle(color) {
    const circles = document.querySelectorAll('.circle-top, .circle-bottom, .name');
    circles.forEach(circle => {
        circle.style.background = color;
    });
}

