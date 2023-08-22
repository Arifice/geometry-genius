function calculateTriangleArea(){
    const base=getInputValue('triangle-base');
    const height=getInputValue('tirangle-height');
    const area=.5*base*height;    
    setElementInnerText('triangle-area',area);
}

function calculateRectangleArea(){
    const length=getInputValue('rectangle-base');
    const  height=getInputValue('rectangle-height');
    const area=length*height;
    setElementInnerText('rectangle-area',area);
}
function calculateParallelogramArea(){
    const base=getInputValue('parallelogram-base');
    const height=getInputValue('parallelogram-height');
    const area=base*height;
    setElementInnerText('parallelogram-area',area);
}
function calculateRhombusleArea(){
    const length=getInputValue('first-diagonal');
    const height=getInputValue('second-diagonal');
    const area=.5*length*height;
    setElementInnerText('rhombus-area',area);
}
function calculatePentagonArea(){
    const length=getInputValue('pentagon-perimeter');
    const  height=getInputValue('pentagon-height');
    const area=.5*length*height;
    setElementInnerText('pentagon-area',area);

}
function calculateEllipseArea(){
    const length=getInputValue('ellipse-base');
    const  height=getInputValue('ellipse-height');
    const area=Math.PI*length*height;
    setElementInnerText('ellipse-area',area);
}

function getInputValue(fieldId){    
    const inputField=document.getElementById(fieldId);
    const input=inputField.value;
    if(isNaN(input)){
        alert('Invalid Input');
        return;
    }
    return parseFloat(input);
}
function setElementInnerText(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;
}