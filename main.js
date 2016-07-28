var array = [1,2,4,7,9]

function sum(a,b){
  console.log(a+b);
}
//this is my return function to return the sum of the array
function returnArray(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum;
  //console.log(sum);
}
//returnArray(array);

//this is my function to change celsius to fahrenheit and the reverse
function cToF(celsius) {
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
}
//cToF(20);
//sfToC(100);

//this is my function to return the vowel length
function getVowel(str) {
  var vowelsCount = 0;

  //turn the input into a string
  var string = str.toString();

  //loop through the string
  for (var i = 0; i <= string.length - 1; i++) {

  //if a vowel, add to vowel count
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  console.log(vowelsCount);
}
//getVowel("CameronPacker");

//this functions rolls the dice
function rolldice(){
    var x = Math.floor(Math.random() * ((6-1)+1) + 1);
    var y = Math.floor(Math.random() * ((6-1)+1) + 1);
    var array = []
    array.push(x,y)
console.log(array)
}
//rolldice();

//this function get the average of an array

function getAverage(){
 var avg = returnArray(array) / 5;
 console.log(avg)
}
getAverage();
