const allSliders = document.querySelectorAll('.slider');
const eightPointSliders = document.querySelectorAll('.eight-point-slider');
const fourPointDisplay = document.querySelector('.sliders-container');
const eightPointDisplay = document.querySelector('.full-control-sliders');
const eightPointValues = document.querySelector('[data-radius-values-eight-points]');
const radiusValues = document.querySelector('[data-radius-values]');
const generatedShape = document.querySelector('.generated-shape');
const customSizeBtn = document.getElementById("custom-size-btn");
const fullControlBtn = document.getElementById("full-control-btn");
const btnSwitcher = document.querySelector(".btn-switcher");
const fullControlBtnSwitcher = document.querySelector(".full-control-btn-switcher");
const customDimensions = document.querySelector('.dimensions-inputs-container');
const shapeWidth = document.getElementById("width");
const shapeHeight = document.getElementById("height");

var topLeft = 0;
let topRight = 0;
let bottomRight = 0;
let bottomLeft = 0;

allSliders.forEach(slider => {
    slider.addEventListener('input', fourPointControl)
})

function fourPointControl() {
    if(this.dataset.shapeCorner === 'top-left') {
        topLeft = this.value;
        radiusValues.innerHTML = `${this.value}% ${topRight}% ${bottomRight}% ${bottomLeft}%`;
        generatedShape.style.borderRadius = `${this.value}% ${topRight}% ${bottomRight}% ${bottomLeft}%`;

    }
    else if(this.dataset.shapeCorner === 'top-right') {
        topRight = this.value;
        radiusValues.innerHTML = `${topLeft}% ${this.value}% ${bottomRight}% ${bottomLeft}%`;
        generatedShape.style.borderRadius = `${topLeft}% ${this.value}% ${bottomRight}% ${bottomLeft}%`;
    }
    else if(this.dataset.shapeCorner === 'bottom-right') {
        bottomRight = this.value;
        radiusValues.innerHTML = `${topLeft}% ${topRight}% ${this.value}% ${bottomLeft}%`;
        generatedShape.style.borderRadius = `${topLeft}% ${topRight}% ${this.value}% ${bottomLeft}%`;
    }
    else if(this.dataset.shapeCorner === 'bottom-left') {
        bottomLeft = this.value;
        radiusValues.innerHTML = `${topLeft}% ${topRight}% ${bottomRight}% ${this.value}%`;
        generatedShape.style.borderRadius = `${topLeft}% ${topRight}% ${bottomRight}% ${this.value}%`;
    }
}

function eightPointControl() {
    console.log('hello')
}

customSizeBtn.addEventListener('click', () => {
    btnSwitcher.classList.toggle('btn-switcher-active');
    customDimensions.classList.toggle('custom-dimensions-active');
})

fullControlBtn.addEventListener('click',() => {
    fullControlBtnSwitcher.classList.toggle('btn-switcher-active');
    fourPointDisplay.classList.toggle('toggleDisplay');
    
    if(window.getComputedStyle(eightPointValues,null).display === 'none') {
        radiusValues.style.display = "none";
        eightPointValues.style.display = "flex";
    } else {
        radiusValues.style.display = "flex";
        eightPointValues.style.display = "none";
    }
    generatedShape.style.borderRadius = `${0}% ${0}% ${0}% ${0}%`;
    
    allSliders.forEach(slider => {
        slider.value = '0';
    })

    radiusValues.innerHTML = `${0}% ${0}% ${0}% ${0}%`;

    eightPointSliders.forEach(eightPointSlider => {
        eightPointSlider.addEventListener('input', eightPointControl)
    })
    //If you access to a DOM Element via JS(using for example getElementById) you'll not be able to read the computed style of that element, because it is defined inside the CSS file. To avoid this, you have to use property getComputedStyle(or currentStyle for IE). StackOverflow
    if(window.getComputedStyle(eightPointDisplay,null).display === 'none') {
        eightPointDisplay.style.display = "block";
    } else {
        eightPointDisplay.style.display = "none";
    }
})


shapeWidth.addEventListener('input', (ev) => {
    generatedShape.style.width = ev.target.value + 'px';
})

shapeHeight.addEventListener('input', (ev) => {
    generatedShape.style.height = ev.target.value + 'px';
})
