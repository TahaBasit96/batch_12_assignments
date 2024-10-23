var a = String ("This is quetion no 1 of chapther 21 to 25 assignment.")
                document.write("String => " + a + " <br><br> string length is : " + a.length);


                
               var a = String ("This is quetion no 2 of chapther 21 to 25 assignment.")
               document.write("Given String => " + a + " <br><br> string in UpperCase : ")
        
               for (var i=0; i<a.length; i++){

                b = a[i].toUpperCase()

                document.write(b)
            
               };


               var a = String ("THIS IS QUETION NO 3 OF CHAPTHER 21 TO 25 ASSIGNMENT.")
               document.write("Given String => " + a + " <br><br> string in UpperCase : ")
        
               for (var i=0; i<a.length; i++){

                b = a[i].toLowerCase()

                document.write(b)
            
               };
        
               var a = String(" A paragraph is defined as “a group of sentences or a single sentence that forms a unit” ")

               for (var i = 0; i < a.length; i++) {

                   if (a.charAt(i) == "“") {
                       document.write(" searching for special character=    “ <br> this character is present at index number : " + i)
                   }
               };



               var a = String(" A paragraph is defined as “a group of sentences or a single sentence that forms a unit” ")
               document.write("making a substring from index no 27 to 88 ===> ")
                document.write( a.substring(27,88))


                var a = "A paragraph is defined as a group of sentences or a single sentence that forms a unit";
                var updated;
                var ary;

                 ary = a.split(" "); //converting string in an array
               
                for (var i = 0; i < ary.length; i++) {
                    var word = ary[i]; //puting evry elemnt in word (variable)
                    ary[i] = word[0].toUpperCase() + word.slice(1);
                }

               
                updated = ary.join(" "); //again converting array into string
                document.write(updated);

                var a = String("   engr.ather.93@gmail.com   ")

                document.write("string => "+ a )
                document.write(" <br> string length with white space => " + a.length)
 document.write(" <br> string length without white spce  => " + a.trim().length);





 var a = "aaaabbbbbbbcddddeefghl";
                var c = 0;
                var word;

                //c= a.lastIndexOf("a")


                 for (var i = 0; i <= a.length; i++){
                    b=i+1;
                     if(a[i] == a[b]){
                        word = a[i]
                    c= a.lastIndexOf(word)
                     }
                     
                document.write(c)
                 }

             



                