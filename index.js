// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    let headQuarters = 42;
    let pickUpLocation = someValue;
    if (pickUpLocation > headQuarters){
        return pickUpLocation - headQuarters;
    }
    else (pickUpLocation < headQuarters);{
        return headQuarters - pickUpLocation;
    }
}

function distanceFromHqInFeet(someValue){
    distanceFromHqInBlocks(someValue);
    let headQuarters = 42;
    let pickUpLocation = someValue;
    if (pickUpLocation > headQuarters){
        return ((pickUpLocation - headQuarters) * 264);
    }
    else (pickUpLocation < headQuarters);{
        return ((headQuarters - pickUpLocation) * 264);
    }
}

function distanceTravelledInFeet(start, destination){
    let startStreet = start;
    let destinationStreet = destination;
    if (destinationStreet > startStreet){
        return ((destinationStreet - startStreet) * 264);
    }
    else if (destinationStreet < startStreet){
        return ((startStreet - destinationStreet) * 264);
    }
}

function calculatesFarePrice(start, destination){
    let distance = (Math.abs(start - destination) * 264);
    if (distance < 400){
        return 0;
    }
    else if (distance > 400 && distance < 2000){
        return ((distance - 400) * .02);
    }
    else if (distance > 2000 && distance < 2500){
        return 25;
    }
    else if (distance > 2500){
        return "cannot travel that far";
    }
}