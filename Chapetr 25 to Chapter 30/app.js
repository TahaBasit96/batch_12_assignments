var a = String("A paragraph is defined as “a group of sentences or a single sentence that forms a unit”")

var small_letter = a.toLowerCase();

var vowel_Counter = 0;
var consonant_Counter = 0;
var char_Counter = 0;

for (var i = 0; i < small_letter.length; i++) {

    if (small_letter.charAt(i) == "a" ||
        small_letter.charAt(i) == "e" ||
        small_letter.charAt(i) == "i" ||
        small_letter.charAt(i) == "o" ||
        small_letter.charAt(i) == "u") { vowel_Counter = vowel_Counter + 1 }

    else if (small_letter.charAt(i) == "“" ||
        small_letter.charAt(i) == "”" ||
        small_letter.charAt(i) == " ") { char_Counter = char_Counter + 1; }
}

// subtracting vowels and spaces and special chracter in total length
consonant_Counter = small_letter.length - vowel_Counter - char_Counter;
document.write("Given String ==>  " + small_letter + "<br>")
document.write(`There are ${vowel_Counter} vowels  and ${consonant_Counter} in this string`);




var a = String("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")
document.write("making a substring from specified index no 27 to end of the srting ===> ")
document.write(a.substring(15, a.length));



var a = String ("Hellow! World!")
            
//    for (var i=0; i<a.length; i++)
//    {
//          for(var j=0; j<a.length; j++)
//          {
//         document.write( i +"  "+ j)

//        // document.write( a[i] +"  "+ a[j])

//          if(a[i] == a[j] ){

//             document.write( "*")}
            
        //     // for(var k=0; k<b.length; k++ ){
        //     //     if (a[i] == b[k]){ break; }
        //     //     else{ b.push(a[i])}
        //     // }

        // }
//     }

//    };





var a = String("Java is a popular programming language, created in 1995.")
                var b = a.split(" ")
                document.write("Given string => " + a)
                document.write("<br> length of string => " + b.length);






                var a = String("Java is a popular programming language, created in 1995.")
                var z = String ("created in 1995. ") 
                // this is substring which we have to delete
                
                var b = a.replace("created in 1995.", " ")
                // removing substring by replace method

                document.write("Given string => " + a)
                document.write("<br> length of string => " + a.length)

                document.write("<br><br>after removing substring => " + b)
                document.write("<br> length of string => " + b.length);




                var a = "Java is created in  _ 1995";

                var ary = a.split(" ")

                document.write(ary + " <br>")

                for (var i = 0; i <=ary.length; i++) 
                 { 
                    document.write(ary[i] + " => "+typeof(ary[i] )+ "<br>");





                    var a = String("Java is a popular programming language and created in 1995.")
                
                
                    //var a = "A paragraph is defined as a group of sentences or a single sentence that forms a unit";
                    var updated;
                    var ary;
    
                     ary = a.split(" "); //converting string in an array
                   
                    for (var i = 0; i < ary.length; i++) {
                        var word = ary[i]; //puting evry elemnt in word (variable)
                        ary[i] = word[0].toUpperCase() + word.slice(1);
                    }
    
                   
                    updated = ary.join(" "); //again converting array into string
                    document.write(updated);
    



                 };





                 
            




