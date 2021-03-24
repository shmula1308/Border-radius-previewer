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
const copyToClipboardBtn = document.querySelector('.copy-to-clipboard-btn');

let topLeft = 0;
let topRight = 0;
let bottomRight = 0;
let bottomLeft = 0;

let topLeftH = 0;
let topLeftV = 0;
let topRightH = 0;
let topRightV = 0;
let bottomRightH = 0;
let bottomRightV = 0;
let bottomLeftH = 0;
let bottomLeftV = 0;



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
    if(this.dataset.shapeCorner === 'top-left-h') {
        topLeftH = this.value;
        eightPointValues.innerHTML = `${this.value}% ${topRightH}% ${bottomRightH}% ${bottomLeftH}% / ${topLeftV}% ${topRightV}% ${bottomRightV}% ${bottomLeftV}%`;
        generatedShape.style.borderRadius = `${this.value}% ${topRightH}% ${bottomRightH}% ${bottomLeftH}% / ${topLeftV}% ${topRightV}% ${bottomRightV}% ${bottomLeftV}%`;

    }
    else if(this.dataset.shapeCorner === 'top-left-v') {
        topLeftV = this.value;
        eightPointValues.innerHTML = `${topLeftH}% ${topRightH}% ${bottomRightH}% ${bottomLeftH}% / ${this.value}% ${topRightV}% ${bottomRightV}% ${bottomLeftV}%`;
        generatedShape.style.borderRadius = `${topLeftH}% ${topRightH}% ${bottomRightH}% ${bottomLeftH}% / ${this.value}% ${topRightV}% ${bottomRightV}% ${bottomLeftV}%`;
    }
    else if(this.dataset.shapeCorner === 'top-right-h') {
        topRightH = this.value;
        eightPointValues.innerHTML = `${topLeftH}% ${this.value}% ${bottomRightH}% ${bottomLeftH}% / ${topLeftV}% ${topRightV}% ${bottomRightV}% ${bottomLeftV}%`;
        generatedShape.style.borderRadius = `${topLeftH}% ${this.value}% ${bottomRightH}% ${bottomLeftH}% / ${topLeftV}% ${topRightV}% ${bottomRightV}% ${bottomLeftV}%`;
    }
    else if(this.dataset.shapeCorner === 'top-right-v') {
        topRightV = this.value;
        eightPointValues.innerHTML = `${topLeftH}% ${topRightH}% ${bottomRightH}% ${bottomLeftH}% / ${topLeftV}% ${this.value}% ${bottomRightV}% ${bottomLeftV}%`;
        generatedShape.style.borderRadius = `${topLeftH}% ${topRightH}% ${bottomRightH}% ${bottomLeftH}% / ${topLeftV}% ${this.value}% ${bottomRightV}% ${bottomLeftV}%`;
    }
    else if(this.dataset.shapeCorner === 'bottom-right-h') {
        bottomRightH = this.value;
        eightPointValues.innerHTML = `${topLeftH}% ${topRightH}% ${this.value}% ${bottomLeftH}% / ${topLeftV}% ${topRightV}% ${bottomRightV}% ${bottomLeftV}%`;
        generatedShape.style.borderRadius = `${topLeftH}% ${topRightH}% ${this.value}% ${bottomLeftH}% / ${topLeftV}% ${topRightV}% ${bottomRightV}% ${bottomLeftV}%`;
    }
    else if(this.dataset.shapeCorner === 'bottom-right-v') {
        bottomRightV = this.value;
        eightPointValues.innerHTML = `${topLeftH}% ${topRightH}% ${bottomRightH}% ${bottomLeftH}% / ${topLeftV}% ${topRightV}% ${this.value}% ${bottomLeftV}%`;
        generatedShape.style.borderRadius = `${topLeftH}% ${topRightH}% ${bottomRightH}% ${bottomLeftH}% / ${topLeftV}% ${topRightV}% ${this.value}% ${bottomLeftV}%`;
    }
    else if(this.dataset.shapeCorner === 'bottom-left-h') {
        bottomLeftH = this.value;
        eightPointValues.innerHTML = `${topLeftH}% ${topRightH}% ${bottomRightH}% ${this.value}% / ${topLeftV}% ${topRightV}% ${bottomRightV}% ${bottomLeftV}%`;
        generatedShape.style.borderRadius = `${topLeftH}% ${topRightH}% ${bottomRightH}% ${this.value}% / ${topLeftV}% ${topRightV}% ${bottomRightV}% ${bottomLeftV}%`;
    }
    else if(this.dataset.shapeCorner === 'bottom-left-v') {
        bottomLeftV = this.value;
        eightPointValues.innerHTML = `${topLeftH}% ${topRightH}% ${bottomRightH}% ${bottomLeftH}% / ${topLeftV}% ${topRightV}% ${bottomRightV}% ${this.value}%`;
        generatedShape.style.borderRadius = `${topLeftH}% ${topRightH}% ${bottomRightH}% ${bottomLeftH}% / ${topLeftV}% ${topRightV}% ${bottomRightV}% ${this.value}%`;
    }
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
    eightPointValues.innerHTML = `${0}% ${0}% ${0}% ${0}% / ${0}% ${0}% ${0}% ${0}%`;

    generatedShape.style.borderRadius = `${0}% ${0}% ${0}% ${0}%`;

     topLeft = 0;
     topRight = 0;
     bottomRight = 0;
     bottomLeft = 0;

     topLeftH = 0;
     topLeftV = 0;
     topRightH = 0;
     topRightV = 0;
     bottomRightH = 0;
     bottomRightV = 0;
     bottomLeftH = 0;
     bottomLeftV = 0;

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


// copyToClipboardBtn.addEventListener('click', copyToClipBoard);

// function copyToClipBoard() {
//    if(window.getComputedStyle(eightPointValues,null).display === 'none') {
    
//         let borderRadiusVal = document.querySelector('[data-radius-values]'); //select the element
//         let elementText = borderRadiusVal.textContent; //get the text content from the element
//         copyText(elementText); //use the copyText function below
      
      
//       //If you only want to put some Text in the Clipboard just use this function
//       // and pass the string to copied as the argument.
//       function copyText(text) {
//         navigator.clipboard.writeText(text);
//         alert('Copied the text:' + text);
//       }

//     } else {
//         let str = document.querySelector('[data-radius-values-eight-points]').innerHTML;
//         const el = document.createElement('textarea');
//         el.value = str;
//         el.select();
//         document.execCommand('copy');
//         alert('Copied the text:' + el.value);
//     }
// }