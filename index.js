// Code your solution in this file!
let yourSt;
function  distanceFromHqInBlocks(yourSt) {

        let distance;
            if (yourSt > 42){
            distance = yourSt - 42;
            return distance;
        
            }
    
            else if (yourSt < 42 && yourSt > 0) {
            distance = 42 - yourSt;
            return distance ;
            }

            else if (yourSt < 0) {
                distance = 42 + yourSt;
                return distance ;
                }
    
            else {
                distance = 0;
                return distance;
            }

        return distance;
    
        }



function distanceFromHqInFeet (yourSt) {


    
let footdistance = distanceFromHqInBlocks(yourSt) * 264;

        return footdistance;
}

function distanceTravelledInFeet(yourSt, newSt){
   let tfdistance;
    
   if(yourSt != newSt){

        tfdistance = Math.abs((yourSt - newSt)) * 264;
        return tfdistance;
    }
    
    else{
        
        tfdistance = 0;
        return tfdistance;
    }
    
    return tfdistance;

}

function calculatesFarePrice(start, destination) {


    let distanceFare = distanceTravelledInFeet(start, destination);

    if(distanceFare <= 400){
        distanceFare = 0;
        return distanceFare;
    }
    else if(distanceFare > 400 && distanceFare <= 2000){

        distanceFare = 0.02 * (distanceFare - 400)
    }
    else if(distanceFare > 2000 && distanceFare < 2500){
        distanceFare = 25
    }
    else{
        distanceFare = 'cannot travel that far'
    }
return distanceFare
}




