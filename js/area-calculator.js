function calculateTriangleArea(){
    const base=getInputValue('triangle-base');
    const height=getInputValue('tirangle-height');
    if(isNaN(base)||isNaN(height)){
        alert('Please input number');
        return;
    }
    const area=.5*base*height;    
    setElementInnerText('triangle-area',area);
}

function calculateRectangleArea(){
    const length=getInputValue('rectangle-base');
    const  height=getInputValue('rectangle-height');
    if(isNaN(length)||isNaN(height)){
        alert('Please input number');
        return;
    }
    const area=length*height;
    setElementInnerText('rectangle-area',area);
}
function calculateParallelogramArea(){
    const base=getInputValue('parallelogram-base');
    const height=getInputValue('parallelogram-height');
    if(isNaN(base)||isNaN(height)){
        alert('Please input number');
        return;
    }
    const area=base*height;
    setElementInnerText('parallelogram-area',area);
}
function calculateRhombusleArea(){
    const length=getInputValue('first-diagonal');
    const height=getInputValue('second-diagonal');
    if(isNaN(length)||isNaN(height)){
        alert('Please input number');
        return;
    }
    const area=.5*length*height;
    setElementInnerText('rhombus-area',area);
}
function calculatePentagonArea(){
    const perimeter=getInputValue('pentagon-perimeter');
    const  height=getInputValue('pentagon-height');
    if(isNaN(perimeter)||isNaN(height)){
        alert('Please input number');
        return;
    }
    const area=.5*perimeter*height;
    setElementInnerText('pentagon-area',area);

}
function calculateEllipseArea(){
    const radious1=getInputValue('ellipse-base');
    const  radious2=getInputValue('ellipse-height');
    if(isNaN(radious1)||isNaN(radious2)){
        alert('Please input number');
        return;
    }    
    const area=Math.PI*radious1*radious2;
    const areaTwoDecimal=area.toFixed(3);
    setElementInnerText('ellipse-area',areaTwoDecimal);
}

function getInputValue(fieldId){    
    const inputField=document.getElementById(fieldId);
    const input=inputField.value;
    inputField.value='';    
    return parseFloat(input);
}
function setElementInnerText(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;
}