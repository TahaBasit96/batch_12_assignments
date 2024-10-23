// Q3 :Declear an initalize ana string array

var string = ["karacki" , "hyderabad" , "larkana" , "sukher"]

document.write("declearation and initalization of string array : " + string);


// Q3 :Declear an initalize a numaric array

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

document.write("declearation and initalization of numaric array : " + number);


// Q5 :Declear an initalize a boolean array

var boolean = [true , false]

document.write("declearation and initalization of boolean array : " + boolean);



var mixed = [true , false,1,2,3,4,5,"karachi","hyderabad"]

document.write("declearation and initalization of mixed array : " + mixed);




// Q7 : Store All Mobile Network in Array:

// Declear and initalize an array and store avilable mobile network in Pakistan.

var network = ["<br> u-fone ", " <br> Telenor ", " <br> Zong", " <br>Warid/jazz  "]

document.write("<i><u> Avilable Mobile Network in Paistan : </i></U>" + network);


// Q8 : Show qualification list in your browser:

//Declear and initalize an array and store avilable education and qualification in Pakistan.
//and show the listed qualification in your browser

var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PHD"]
 document.write("<i><u> qualificaon and education in Pakistan</u></i>  :  " + qualification);



 //Q9 : Display the length and element of array in browser:

//Declear and initalize an empty array to store top movies name of 2015. Add movies
//name one by one in an array. Display the length and elemrnt of array in browser:
//use array length method

var movies = []
 
movies.push(" Avenger : Age of Ultron ")
document.write("push 1st name in arry : " + movies)

movies.push("Spectre")
document.write("<br><br> push 2nd name in arry : " + movies)

movies.push("Jurassic World")
document.write("<br><br> push 3rd name in arry : " + movies)

movies.push("Inside Out")
document.write("<br><br> push 4th name in arry : " + movies)

document.write(" <br><br><br><br>  <h2>Top Movies of 2015</h2>")
document.write(movies)

document.write("<br><br> <b>Length of the Array : </b>" + movies.length);



// Q10 : Declear and initalize a string array
// Declear and initalize an array with yor favourit cars
//First index of array
//Car at first idex of array



var car = ["Audi", "Volvo","Ford","Lamborgani"]

document.write(car )

document.write( "<br><br> First index of array --> " + car.indexOf("Audi"))

document.write( "<br><br>Car at first index of array --> " + car[0])

document.write( "<br><br> Last index of array --> " + car.indexOf("Lamborgani"))

document.write( "<br><br>Car at first index of array --> " + car[car.length-1])


//  Q11 : Dispalay the score  percentage of students

// Write a program to store 3 student name in an array . Take another array to store 
// these student score. Assume the total marks are 500 for each student, dispaly the 
// score and percentage of students 

var studentName = ["stdent-1" , "student-2" , "student-3"]

var number = [320 , 230 , 480]

var p1 = (number[0] / 500)*100;

document.write("score of " +studentName[0] + " is " + number[0] +" and percentage is " + p1)

var p2 = (number[1] / 500)*100;

document.write("<br><br>score of " +studentName[1] + " is " + number[1] +
" and percentage is " + p2)

var p3 = (number[2] / 500)*100;

document.write("<br><br>score of " +studentName[2] + " is " + number[2] +
" and percentage is " + p3)



// q#14

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.write(fruits.sort())

var fruit = ["strawberry" , "apple" , "orange" , "banana"]
document.write(fruit.sort())