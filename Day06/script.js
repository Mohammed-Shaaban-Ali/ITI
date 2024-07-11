function applyChanges() {
    var bgColor = document.getElementById('bgColorInput').value;
    var text = document.getElementById('textInput').value;
    var output = document.getElementById('output1');

    output.style.backgroundColor = bgColor;
    output.innerText = text;
}

function addNumbers() {
    var num1 = Number(document.getElementById('number1').value);
    var num2 = Number(document.getElementById('number2').value);
    var result = num1 + num2;

    var output = document.getElementById('outputSum');
    output.innerText = 'Sum: ' + result;
}

function multiplyNumbers() {
    var num1 = Number(document.getElementById('number1').value);
    var num2 = Number(document.getElementById('number2').value);
    var result = num1 * num2;

    var output = document.getElementById('outputMul');
    output.innerText = 'Product: ' + result;
}