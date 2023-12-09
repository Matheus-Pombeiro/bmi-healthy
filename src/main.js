// Gets some HTML items
const theme = document.querySelector("[data-theme]");           // Theme
const form = document.querySelector("form");                    // Form elements
const inHeight = document.querySelector("[data-inHeight]");     
const inWeight = document.querySelector("[data-inWeight]");
const outBMI = document.querySelector("[data-outBMI]");         // Output

// Function to calc the BMI
const bmiCalc = (height, weight) => {

    const bmi = (weight / (height ** 2));   // Calc the BMI

    return bmi;

};

// Function to analyze the BMI result
const bmiResult = (bmi) => {

    let result = "";

    if (bmi < 18.5) {
        result = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        result = "Overweight";
    } else if (bmi >= 30 && 30 && bmi <= 39.9) {
        result = "Obesity"
    } else {
        result = "Severe Obesity";
    }

    return result;

};

// Listen to the form being sent
form.addEventListener("submit", (e) => {

    e.preventDefault();     // Prevents automatic submission of the form

    const height = inHeight.value;
    const weight = inWeight.value;

    if (height > 3) {
        alert("You need to put a ',' in the height, like '1,70'.");
        return;
    }

    console.log(bmiCalc(height, weight));

    console.log(bmiResult(bmiCalc(height, weight)));

    outBMI.innerHTML = `${bmiCalc(height, weight).toFixed(1)} - ${bmiResult(bmiCalc(height, weight))}`;

});