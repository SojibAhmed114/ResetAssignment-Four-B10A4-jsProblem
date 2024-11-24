// problem 05
function  waitingTime(waitingTimes  , serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input ";
    }

    //make average total time
        let sum = 0;
    for (let i = 0; i < waitingTimes.length; i++){
        const singleTime = waitingTimes[i];
        sum += singleTime;
    }
    //average
    const avg = sum / waitingTimes.length;
    const roundAvg = Math.round(avg);

    //find serial number
    const originalSerial = serialNumber -1;

    const nextSerial = originalSerial - waitingTimes.length;

    const totalwaitingTime = roundAvg * nextSerial;
    return totalwaitingTime;
}

console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7 , 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
