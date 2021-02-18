// 1)
function numCounter(array){
  var oddNum=0;
  var evenNum=0;
  var zeroNum=0;
  for(var i=0;i<arr.length;i++){
  if(typeof arr[i]=== "number" || !isNaN(arr[i])){
    if(arr[i]===0){
       zeroNum++;
    }else
    if(arr[i]%2==1){
      oddNum++;
    }
    else if(arr[i]%2===0){
       evenNum++; 
    }
    
  }
}
  console.log("num of odd: "+oddNum+ ", num of even: "+evenNum+", num of zeros: "+zeroNum);
}

var arr=[1,2,"boy",10,11,0,0,3,4];
numCounter(arr);
// 2.
var prime=true;
function primeNum(number){
  if(number===0 ||number===1||number>1000){
    console.log('Invalid input');
  }else if(number>1){
    for(var j=2;j<number;j++){
      if(number%j===0){
        prime=false;
        break;
      }
    }
  }
  if(prime){
    console.log(number+" is a prime");
  } else
    console.log(number+" is not a prime");
}
       
var input=+prompt('Число: ');
if(typeof input !== "number" || isNaN(input)){
console.log("Invalid input")
} else
  primeNum(input);


// 3.
function add(a){
  return function(b){
    return a+b;
  };
}
console.log(add(3)(4));
// 4.
var num1=+prompt('1st num: ');
var num2=+prompt('2nd num: ');
function output(a,b){
  for(var i=a;i<=b;i++){
    console.log(i);
  }
}
var intervalid=setInterval(output,1000,num1,num2);

setTimeout(function(){
  clearInterval( intervalid);
},num2-num1+1);

output(num1,num2);

//  5.
 var arrowFunc=(x,n)=>{
  var res=1;
  for(var i=0;i<n;i++){
    res*=x;
  }
  return res;
}
var num1=+prompt('1st num: ');
var num2=+prompt('Степень: ');
console.log(arrowFunc(num1,num2));
