// ------------------------
// Cards
// --------------------------


// ------------------------
// Traingle
// ----------------------

let serial = 0;


document.getElementById('btn-triangle').addEventListener('click', function(){

    serial += 1;

    const traingleValue1 = value1('triangle-first-value');
    
    const traingleValue2 = value2('triangle-second-value');
    
        const traingleResult = calculationPart1(traingleValue1, traingleValue2).toFixed(2);
    
        console.log(traingleResult);
   tableShow('triangle-name', traingleResult);
    
   

    
    }) 


// -----------------------
// Ellipse
// ----------------------


document.getElementById('btn-ellipse').addEventListener('click', function(){

    serial += 1;
    const ellipseValue1 = value1('ellipse-first-value');
    
    const ellipseValue2 = value2('ellipse-second-value');
    const ellipseResult = calculationPart3(ellipseValue1, ellipseValue2).toFixed(2);
    
     console.log(ellipseResult);
tableShow('ellipse-name', ellipseResult);

    
    
    }) 

// ------------------------
// Parallelogram
// -------------------------




document.getElementById('btn-parallelogram').addEventListener('click', function(){

    serial += 1;
    const parallelogramValue1 = value1('parallelogram-first-value');
    
    const parallelogramValue2 = value2('parallelogram-second-value');
    const parallelogramResult = calculationPart2(parallelogramValue1, parallelogramValue2).toFixed(2);
    
     console.log(parallelogramResult);

    tableShow('parallelogram-name', parallelogramResult);

    
    }) 


// ---------------------------
// Rhombus
// --------------------------


document.getElementById('btn-rhombus').addEventListener('click', function(){

    serial += 1;
    const rhombusValue1 = value1('rhombus-first-value');
    
    const rhombusValue2 = value2('rhombus-second-value');
    const rhombusResult = calculationPart1(rhombusValue1, rhombusValue2).toFixed(2);
    
     console.log(rhombusResult);

    tableShow('rhombus-name', rhombusResult);

    
    }) 


// ---------------------
// Pentagon
// ---------------------


document.getElementById('btn-pentagon').addEventListener('click', function(){

    serial += 1;
    const pentagonValue1 = value1('pentagon-first-value');
    
    const pentagonValue2 = value2('pentagon-second-value');
    const pentagonResult = calculationPart1(pentagonValue1, pentagonValue2).toFixed(2);
    
     console.log(pentagonResult);

    tableShow('pentagon-name', pentagonResult);

    
    }) 


// ------------------------
// Rectangle
// ------------------------


    document.getElementById('btn-rectangle').addEventListener('click', function(){
       
        serial += 1;
            const rectangleValue1 = value1('first-rectangle-value');
            
            const rectangleValue2 = value2('second-rectangle-value');
            const rectangleResult = calculationPart2(rectangleValue1, rectangleValue2).toFixed(2);
            console.log(rectangleResult);

            
            tableShow('rectangle-name', rectangleResult);



    })


//     --------------------------
// calculation function
// -------------------------------


function calculationPart1(part1, part2){
    const calculation1 = 0.5*part1*part2;
    return calculation1;

}
function calculationPart3(part1, part2){
    const calculation3 = 3.1416*part1*part2;
    return calculation3;

}
function calculationPart2(part1, part2){
    const calculation2 = part1*part2;
    return calculation2;

}



// ---------------------
// input funtion
// ---------------------



function value1(input1){
    const inputField1 = document.getElementById(input1);
    const inputValue1 = parseFloat(inputField1.value);
    inputField1.value = '';

    return inputValue1;
}
function value2(input2){
    const inputField2 = document.getElementById(input2);
    const inputValue2 = parseFloat(inputField2.value);
    inputField2.value = '';
    return inputValue2;
}


// ------------------
// Table Showed
// -------------------


function tableShow(mathName, mathResult){
    const name = document.getElementById(mathName).innerText;
    const tableBody = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${name}</td>
    <td>${mathResult} cm<sup>2</sup></td>
    <td><button class="px-2 py-2 bg-sky-600 rounded-lg">Covert to m<sup>2</sup></button> </td>
    
    
    
    `;
    tableBody.appendChild(tr);
    
}


// ---------------------
// Blog Added
// ---------------------

document.getElementById('blog').addEventListener('click', function(){
    window.location.href = 'blog.html';

})

// -------------------------------
// Random color
// -------------------------------

document.getElementById('random-color1').addEventListener('mouseenter', function(){

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const card1 = document.getElementById('random-color1');

    card1.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;


})
document.getElementById('random-color2').addEventListener('mouseenter', function(){

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const card2 = document.getElementById('random-color2');
    card2.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;


})
document.getElementById('random-color3').addEventListener('mouseenter', function(){

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const card3 = document.getElementById('random-color3');
    card3.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;


})
document.getElementById('random-color4').addEventListener('mouseenter', function(){

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const card4 = document.getElementById('random-color4');
    card4.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;


})
document.getElementById('random-color5').addEventListener('mouseenter', function(){

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const card5 = document.getElementById('random-color5');
    card5.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;


})
document.getElementById('random-color6').addEventListener('mouseenter', function(){

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const card6 = document.getElementById('random-color6');
    card6.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;


})




