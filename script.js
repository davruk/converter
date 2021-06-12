let resultInfo = document.getElementById("resultInfo");
let convertButton = document.getElementById("convertButton");  // convert to miles button
let ratio = 0.621

function convertToMiles() {
    let km = parseFloat(document.getElementById("km").value);  // use .value to get the value from an input box
    let miles = km * ratio;  // ratio in miles
    resultInfo.textContent = km + " km is " + miles + " miles ";  // displaying the result
}
convertButton.addEventListener("click", convertToMiles);  //listening to click event