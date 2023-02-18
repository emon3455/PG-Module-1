
// initializing the counter
let count = 0;


// Triangle
document.getElementById("triangle-calc-btn").addEventListener("click" ,  function(){

  const triangleBase = getInputValueByID("triangle-b-input");
  const triangleHeight = getInputValueByID("triangle-h-input");

  if(isNaN(triangleBase) || isNaN(triangleHeight) || triangleBase < 0 || triangleHeight < 0){
      alert("please enter an valid input");
      return;
  }

  const triangleArea = (0.5 * triangleBase * triangleHeight).toFixed(2);

  const name = getElementValueByID("triangle-name");

  count = count +1;

  showInfo(count , name, triangleArea);

});

// Rectangle
document.getElementById("rectangle-calc-btn").addEventListener("click", function(){

  const rectangleWidth = getInputValueByID("rectangle-w-input");
  const rectangleLength = getInputValueByID("rectangle-l-input");

  if(isNaN(rectangleWidth) || isNaN(rectangleLength) || rectangleWidth < 0 || rectangleLength < 0){
      alert("please enter an number(possitive)");
      return;
  }

  const rectangleArea = (rectangleWidth * rectangleLength).toFixed(2);

  const name = getElementValueByID("rectangle-name");
  count = count + 1;

  showInfo(count , name, rectangleArea);

});

// paralelogram:
document.getElementById("paralelogram-calc-btn").addEventListener("click" , function(){

  const base = getElementNumberValueByID("paralel0-b");
  const height = getElementNumberValueByID("paralelo-h");

  const area = (base * height).toFixed(2);

  const name = getElementValueByID("paralelo-name");

  count = count +1;

  showInfo(count , name, area);

});


// Rhombus:
document.getElementById("rhombus-calc-btn").addEventListener("click" , function(){

  const d1 = getElementNumberValueByID("rhombus-data1");
  const d2 = getElementNumberValueByID("rhombus-data2");
  const area = (0.5 * d1 * d2).toFixed(2);

  const name = getElementValueByID("rombos-name");

  count = count +1;
  showInfo(count , name, area);

});



// Pentagon:
document.getElementById("pentagon-calc-btn").addEventListener("click" , function(){

  const peremeter = getElementNumberValueByID("pentagon-p");
  const apothem = getElementNumberValueByID("pentagon-b");
  const area = (0.5 * peremeter * apothem).toFixed(2);

  const name = getElementValueByID("pentagon-name");

  count = count +1;
  showInfo(count , name, area);

});


// Ellipse:
document.getElementById("ellipse-calc-btn").addEventListener("click" , function(){

  const a = getElementNumberValueByID("ellip-a");
  const b = getElementNumberValueByID("ellip-b");
  const pie = 3.14;
  const area = (pie * a * b).toFixed(2);

  const name = getElementValueByID("ellip-name");

  count = count +1;
  showInfo(count , name, area);

});


// generating random color:
function generateRGBColor(){

  var first = Math.floor(Math.random() * 256);
  var sec = Math.floor(Math.random() * 256);
  var third = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + first + "," + sec + "," + third + ")";

  return bgColor;

}


// set the bg color on card background
const allCards = document.getElementById("cards").children;
console.log(allCards);
for (const card of allCards) {
    card.addEventListener("mouseover" , function(){
        const bgColor = generateRGBColor();
        card.style.backgroundColor = bgColor;
    });
}

