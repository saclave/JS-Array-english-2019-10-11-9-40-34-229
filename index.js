// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
-- ANSWER -- 
a is a String while b is an array and a literal representation to be exact


---------------------------


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
-- ANSWER -- 
<!DOCTYPE html>
<html>
<body>

<p>JavaScript Arrays #1</p>

<script>
document.write('[');

var a = [1, 2, 3, 4, 5];

for(var x=0; x < a.length; x++){
var y = a[x] * 2;

if(x==a.length-1){
	document.write(y + ']');
    }else
    	document.write(y + ',');
}
</script>

</body>
</html>


------------------------


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'

-- ANSWER -- 
<!DOCTYPE html>
<html>
<body>

<p>JavaScript Arrays #2</p>

<script>
function loop(character){
var colors = ["Red", "Green", "White", "Black"];
var output = ''; 
for(var x=0; x < colors.length; x++){
	if(x==colors.length-1){
    	output = output + colors[x] + "'";
        }else{
			output = output + colors[x] + character;
       }
}

return output;
}

document.write("'" + loop(' '));
document.write("<br>'" + loop('+'));
document.write("<br>'" + loop(','));
</script>

</body>
</html>


---------------------------


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]


-- ANSWER -- 
<!DOCTYPE html>
<html>
<body>

<p>JavaScript Arrays #3</p>

<script>
function sortArray() {
var a = [5, 1, 8, 10, 4];
  console.log(a.sort(function(a, b){return b-a}));
  document.write('[' + a +']');
}
sortArray();
</script>

</body>
</html>



----------------------------


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'

-- ANSWER -- 
<!DOCTYPE html>
<html>
<body>

<p>JavaScript Arrays #4</p>

<script>
var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var ctr=0, maxCount=0;
var result='';
var x='', y='';

for (x=0; x<arr.length; x++) 
{
	for (y=x; y<arr.length; y++)
    {
    	if (arr[x] == arr[y]){
        	ctr++;  
            }
        if (maxCount<ctr){
        	maxCount=ctr;
            result = arr[x];
        }
    }
    
    ctr=0;  
}

document.write(result);
</script>

</body>
</html>