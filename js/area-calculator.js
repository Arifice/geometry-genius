function calculateTriangleArea(){
    const base=getInputValue('triangle-base');
    const height=getInputValue('tirangle-height');
    if(isNaN(base)||isNaN(height)){
        alert('Please input number');
        return;
    }
    const area=.5*base*height;    
    setElementInnerText('triangle-area',area);
    addToCalculationEntry('Triangle',area);
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
    addToCalculationEntry('Rectangle',area);
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
    addToCalculationEntry('Parallelogram',area);    
    
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
    addToCalculationEntry('Rhombus',area);
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
    addToCalculationEntry('Pentagon',area);

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
    addToCalculationEntry('Ellipse',areaTwoDecimal);
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
function addToCalculationEntry(shapeType,area){
    console.log(shapeType+ '   ' +area);
    const calculationEntry =document.getElementById('Calaculation-entry');
    const count=calculationEntry.childElementCount;
    const p=document.createElement('p');
    p.classList=('py-3');
    p.innerHTML=`${count+1}. ${shapeType}  =  ${area} cm<sup>2</sup> <button class="btn btn-success mx-2 btn-sm">Convert</button>`
    calculationEntry.appendChild(p);
}