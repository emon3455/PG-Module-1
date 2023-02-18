// common functions start:

// get number type data from input
function getInputValueByID(elementId){
    const inputF = document.getElementById(elementId);
    const inputV = parseFloat(inputF.value);

    inputF.value = "";

    return inputV;
}

// get number type data from element
function getElementNumberValueByID(elementId){
   const htmlElement = document.getElementById(elementId);
   const values = parseFloat(htmlElement.innerText);

   return values;
}
// to get the element value from text field
function getElementValueByID(elementId){
   const htmlElement = document.getElementById(elementId);
   const values = htmlElement.innerText;

   return values;
}

//  to display on the table
function showInfo(count, name, areas){
    let tBody = document.getElementById("tBody");
    let tRow  = document.createElement("tr");
    tRow.innerHTML=`
    
    <td> ${count}.  ${name} </td>
    <td> ${areas}cm<sup>2</sup> </td>
    <td> 
     <button class=" bg-sky-600 border-none p-2 text-white rounded-lg hover:bg-sky-800 ">Convert To cm<sup>2</sup>
     </button>
    </td> `;
    
    tBody.appendChild(tRow);

}


