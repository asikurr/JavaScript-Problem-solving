// 1.Problem -  feetToMile
function feetToMile(feet){
    if(feet<=0){
        return "Please enter valid feet number."
    }else{
        let mile = feet/5280; // 5280 feet == 1 mile
        return feet + " feet = " +mile.toFixed(7) + " Mile.";// using toFixed(7) according to google calculator.
    }
}
const TotalMile = feetToMile(1);
console.log(TotalMile);
//input : 280
// Output :  0.0530303 Mile.
// Solved Problem 1. feetToMile ///


// 2.Problem -  woodCalculator
function woodCalculator(chair, table , bed){
    let woodNeedForChair = 1;
    let woodNeedForTable = 3;
    let woodNeedForBed = 5;
    if(chair<=0 || table<=0 || bed<=0){// valided for negative value
        return "Enter valid information Like chair, table , bed Number."
    }
    woodNeedForChair = woodNeedForChair * chair;
    woodNeedForTable = woodNeedForTable * table;
    woodNeedForBed = woodNeedForBed * bed;

    let Total = woodNeedForChair + woodNeedForTable + woodNeedForBed;
  
     return chair +" chair needed " + woodNeedForChair +" Cubic feet wood.\n"+ 
     table +" table needed " + woodNeedForTable +" Cubic feet wood.\n"+
     bed +" bed needed " + woodNeedForBed +" Cubic feet wood.\n"+
     "Total "+ chair + " chair, "+ table + " table, " +bed + " bed needs " + Total + " Cubic feet Wood."
}
const woodNeeded = woodCalculator(5,1,1);
console.log(woodNeeded);
//input : 3,6,12
// Output :  3,18,60 or 81
// Solved Problem 2. woodCalculator //


// 3.Problem -  brickCalculator
function brickCalculator(floor){
    if(floor<=0){
        return "Please enter valid floor number.";
    }else if(floor<=10){
        let brickPerFeet = 1000;
        let brickfirstFloor = 15 * brickPerFeet;
        let brickFirstTenFloor = floor * brickfirstFloor
        return brickFirstTenFloor;
    }else if(floor>10 && floor<=20){
        let brickPerFeet = 1000;
        let brickFirstTenFloor = 15000*10;//first 10 floor bricks needed
        let brickElevenToTwentyPerFloor = 12 * brickPerFeet;
        let brickNeedElevenToTwentyFloor = (floor-10) * brickElevenToTwentyPerFloor;
        let totalBrickNeedElevenToTwentyFloor = brickFirstTenFloor + brickNeedElevenToTwentyFloor;
        return totalBrickNeedElevenToTwentyFloor;
    }else{
        let brickPerFeet = 1000;
        let brickFirstTwentyFloor = 15000*10 + 10*12000;//first 20 floor bricks needed
        let brickNeedAbovePerFloor = 10 * brickPerFeet;
        let brickNeedAboveFloor = (floor-20) * brickNeedAbovePerFloor;
        let totlaBrickNeedAboveFloor = brickFirstTwentyFloor + brickNeedAboveFloor;
        return totlaBrickNeedAboveFloor;
    }
}
const totalBrick = brickCalculator(2);
console.log(totalBrick);
//input : 5,15,25
// Output :  75000,210000,320000
// Solved Problem 3. brickCalculator //

// 4.Problem -  tinyFriends
function tinyFriends(friends){
    let minLengthName = friends[0];
    if(minLengthName.length ==  ""){ //if friends Array is empty [""]
        return "Enter your friend name."
    }
    for(i=0; i<friends.length; i++){
        let frindsName = friends[i];
        if(frindsName.length<minLengthName.length){
            minLengthName = frindsName;
        }
    }
    return "Your tinyFriend Name is : "+minLengthName;
}
const friends = ["Asikur","Rahaman", "Rafi", "Farhan"]; 
console.log(tinyFriends(friends))
//input : ["Asikur","Rahaman", "Rafi", "Farhan"]
// Output :  Rafi
// Solved Problem 4. tinyFriends //

