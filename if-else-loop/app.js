var num = prompt('Enter Number');
 if (num % 2 == 0) { document.write(`<b>Ans : </b> The number is even`) }
 else { document.write(`<b>Ans : </b> The number is odd `) };




// 2 . Positive/Negative Number Checker:
//    Ask the user to input a number. If the number is positive, show "The number is positive", if it's negative, show "The number is negative", and if it's zero, show "The number is zero".

var integer = prompt('enter number to check positive or negative')
 if(integer>0){document.write(`<br><br> The number is Positive `)}
 if(integer==0){document.write(`<br><br> The number is Zero`)}
 if(integer<0){document.write(`<br><br> The number is Negative `)};



 // 3. Maximum of Two Numbers:
//    Prompt the user to enter two numbers. Display the larger number.

var a = prompt(' enter 1st number');
var b = prompt(' enter 2nd number');
if(a>b){document.write(`<br>${a} `)}
else{document.write(`<br>${b} `)};


// 4. Minimum of Three Numbers:
//    Ask the user for three numbers. Display the smallest number.

var a = prompt('enter 1st number');
var b = prompt('enter 2ndnumber');
var c = prompt('enter 3rd number');
if(a<b && a<c ){document.write(`<br>${a}`)}
if(b<a && b<c ){document.write(`<br>${b}`)}
if(c<a && c<b ){document.write(`<br>${c}`)}



// 5. Factorial Calculator:
//    Request the user to input a number. Calculate its factorial and display the result.

var input = +prompt("enter number to caculate factorial")
var factorial = 1
for (var i = input; i >= 1; i--) {
    { factorial = factorial * i }
}
document.write(factorial + "<br>")


// 6  Grade Calculator:
// Ask the user to enter marks for three subjects. Calculate the average and display the grade according to the average (assuming each subject has equal weight).

var a = Number(prompt('Enter subject 1 Marks'))
var b = Number(prompt('Enter subject 2 Marks'))
var c = Number(prompt('Enter subject 3 Marks'))

var z = (a + b + c) / 3;

document.write(`${z} %`)

if (z < 40) { document.write(`<br>F grade`) }
else {
    if (z >= 40 && z < 50) { document.write(`<br> D Grade`) }
    else {
        if (z >= 50 && z < 60) { document.write(`<br> D Grade`) }
        else {
            if (z > 50 && z < 60) { document.write(`<br> c Grade`) }
            else {
                if (z >= 60 && z < 70) { document.write(`<br> B Grade`) }
                else {
                    if (z >= 70 && z < 80) { document.write(`<br> A Grade`) }
                    else {
                        if (z >= 80 && z <= 100) { document.write(`<br> A <sup>+</sup> Grade`) }
                    }
                }
            }
        }
    }
}





// 11. Temperature Converter:
//     Prompt the user to enter a temperature in Celsius. Convert it to Fahrenheit and display the result.

var temperature =Number( prompt(`Enter Temperature in Celsius`))
var f = (temperature * 9/5)+32;
document.write(`Temperature in Fahrenheit = ${f}`)



// 8. Triangle Type Identifier:
//     Ask the user for the lengths of three sides of a triangle. Determine if it's an equilateral, isosceles, or scalene triangle and display the result.

var side1 = Number(prompt(`Enter 1st side of triangle`))
var side2 = Number(prompt(`Enter 2nd side of triangle`))
var side3 = Number(prompt(`Enter 3rd side of triangle`))

document.write(`side -1 = ${side1} <br> side -2 = ${side2} <br> side -3 = ${side3} <br>`)

if (side1 === side2 && side1 === side3) {
    document.write(`this is Equilateral Triangle`)
}
else {
    if (side1 === side2 || side1 === side3 || side2 === side3) {
        document.write(`this is Isosceles Triangle`)
    }
    else {
        if (side1 != side2 && side1 != side3 && side2 != side3){
            document.write(`this is Scalene Triangle`)   
        }
        else{  document.write(`Insectr Value`) }
        }
}


// 13. Character Vowel/Consonant Checker:
//     Take a character from the user and determine if it's a vowel or a consonant. Display "Vowel" or "Consonant" accordingly.

var char = prompt(`Enter Alphabate`)

document.write("You type :" + char)

if (char === "a" || char === "A" || char === "e" || char === "E" ||
    char === "i" || char === "I" || char === "o" || char === "O" || 
    char === "u" || char === "U") { document.write(` <br><br> <i> Its a Vowel  </i>`) }
else { document.write(`<br><br> <i> Its a consonant  </i>`) }








