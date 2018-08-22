<!DOCTYPE html>

<html lang="en-us">

  <head>

    <meta charset="UTF-8">
    <title>Document</title>

  </head>

  <body>


<script type="text/javascript">

var numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,14,14,15];

//if divided by 3 fizz
//if divided by 5 buzz
//if divided by a5 fizzbuzz
for (i=0, i<numberArray.length, i++) {
    if (numberArray[i]%3 === 0){
        alert("fizz")
    };
    else if (numberArray[i]% 5 ===0) {
        alert("buzz");
    }
    else if (numberArray[i]%3===0 && numberArray[5] === 0)
    alert("fizzbuzz");
};

 </script>

</body>

</html>
