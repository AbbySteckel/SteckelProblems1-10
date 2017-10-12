//Abby Steckel, JavaScript Problems 1-10, 10/12/17

function sleepIn(weekday,vacation) {
   if(weekday!=true||vacation==true){
       return true;
   }else{
       return false;
   }
}

function monkeyTrouble(a_smile,b_smile){
    if(a_smile==true&&b_smile==true){
        return true
    }
    if (a_smile == false && b_smile == false) {
        return true
    }
    return false
}


function string_times(string,n){
    if (n==0){
        return false;
    }else{
        var word="";
        for(var i=0; i<n; i++){
            word+=string;
        }
    }
    return word;
}

function front_times(string,n){
    if (n==0){
        return false;
    }else{
        var word = "";
        for(var i=0;i<n;i++){
            word+=string.substring(0,3);
        }

    }
    return word;
}

function string_bits(string){
    var word = string.substring (0,1);
    for (var i=1; i<string.length; i+=2){
       word+=string.substring(i+1,i+2)
    }
    return word;
}

function caughtSpeeding(speed,birthday){
    if (birthday == false){
        if (speed<=60){
            return 0;
        }
        if (61<=speed&& speed<=80){
            return 1;
        }
        if (speed>=81) {
            return 2;
        }
    }
    if (birthday==true){
        if (speed<=65){
            return 0;
        }
        if (66<=speed && speed<=85){
            return 1;
        }
        if (speed>85){
            return 2;
        }
    }

}

function fizz_buzz(string){
    if (string%3==0 && string%5==0) {
        return "FizzBuzz";
    }
    if (string%3==0){
        return "Fizz";
    }
    if (string%5==0){
        return "Buzz";
    }else{
        return string+"!";
    }
}

function teaParty(tea,candy){
    if (tea<5||candy<5){
        return 0;
    }
    if (tea/candy>=2 || candy/tea>=2){
        return 2;
    }
    if(tea>=5 && candy>=5){
        return 1;
    }
}

function blackjack(x,y){
    if (x>21 && y>21){
        return 0;
    }
    if (x>21){
        return y;
    }
    if (y>21){
        return x;
    }
    if (x>y){
        return x;
    }
    if (x<y){
        return y;
    }
}

function loneSum(a,b,c){
    if(a==b && b==c){
        return 0;
    }
    if(a==b){
        return c;
    }
    if(b==c){
        return a;
    }
    if(a==c){
        return b;
    }else{
        return a+b+c;
    }
}

function tester() {

    document.getElementById("output").innerHTML = loneSum(3,3,4);
    document.getElementById("output1").innerHTML = loneSum(21,4,3);
}

