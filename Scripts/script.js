// const sliderTopLeft = document.querySelector('.slider-top-left');
// const sliderTopRight = document.querySelector('.slider-top-right');
// const sliderBottomRight = document.querySelector('.slider-bottom-right');
// const sliderBottomLeft = document.querySelector('.slider-bottom-left');

const allSliders = document.querySelectorAll('.slider');
const radiusValues = document.querySelector('[data-radius-values]');
const generatedShape = document.querySelector('.generated-shape');
const customSizeBtn = document.getElementById("custom-size-btn");
const btnSwitcher = document.querySelector(".btn-switcher");
const customDimensions = document.querySelector('.dimensions-inputs-container');
const shapeWidth = document.getElementById("width");
const shapeHeight = document.getElementById("height");

var topLeft = 0;
let topRight = 0;
let bottomRight = 0;
let bottomLeft = 0;

allSliders.forEach(slider => {
    slider.addEventListener('input', function(ev) {
        
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
})
})

customSizeBtn.addEventListener('click', () => {
    btnSwitcher.classList.toggle('btn-switcher-active');
    customDimensions.classList.toggle('custom-dimensions-active');
})


shapeWidth.addEventListener('input', (ev) => {
    generatedShape.style.width = ev.target.value + 'px';
})

shapeHeight.addEventListener('input', (ev) => {
    generatedShape.style.height = ev.target.value + 'px';
})
